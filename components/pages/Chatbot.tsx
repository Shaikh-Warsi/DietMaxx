"use client"

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, AlertCircle } from "lucide-react";
import { FormData } from "@/types/form";

interface ChatbotProps {
  formData: FormData;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'model';
  parts: string;
}

export function Chatbot({ formData, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { role: 'user', parts: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Import the API client
    const { apiClient } = await import('@/lib/api');
    
    const result = await apiClient.sendChatMessage(input, messages, formData);
    
    if (result.data) {
      const modelMessage: Message = { role: 'model', parts: result.data.response };
      setMessages((prev) => [...prev, modelMessage]);
    } else {
      const errorMessage = result.details || result.error || 'Unknown error';
      setMessages((prev) => [
        ...prev, 
        { role: 'model', parts: `Error: Could not get a response. ${errorMessage}` }
      ]);
    }
    
    setLoading(false);
  };

  return (
    <Card className="fixed bottom-4 right-4 w-[350px] h-[500px] flex flex-col shadow-lg z-50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">DietMaxx AI Chat</CardTitle>
        <Button variant="ghost" size="sm" onClick={onClose}>X</Button>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full p-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && (
                <Avatar className="w-8 h-8 mr-2">
                  <AvatarImage src="/placeholder-logo.svg" alt="AI" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div className={`max-w-[70%] p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {msg.parts}
              </div>
              {msg.role === 'user' && (
                <Avatar className="w-8 h-8 ml-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="You" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-4">
              <Avatar className="w-8 h-8 mr-2">
                <AvatarImage src="/placeholder-logo.svg" alt="AI" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="max-w-[70%] p-3 rounded-lg bg-gray-200 text-gray-800 animate-pulse">
                Typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex p-4 border-t">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          className="flex-1 mr-2"
          disabled={loading}
        />
        <Button onClick={handleSendMessage} disabled={loading}>
          <Send className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}