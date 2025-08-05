import { FormData, RecommendationsData } from '@/types/form';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  details?: string;
}

import { ChatMessage } from '@/types/chat';

/**
 * Centralized API client for making requests to backend endpoints
 */
export const apiClient = {
  /**
   * Get diet recommendations based on form data
   */
  async getRecommendations(formData: FormData): Promise<ApiResponse<{ recommendations: RecommendationsData }>> {
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `HTTP error! status: ${response.status}${errorData.error ? ` - ${errorData.error}` : ''}`
        );
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      return { 
        error: 'Failed to get recommendations', 
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  },

  /**
   * Send a chat message to the AI assistant
   */
  async sendChatMessage(
    message: string, 
    history: ChatMessage[], 
    formData: FormData
  ): Promise<ApiResponse<{ response: string }>> {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ history, message, formData }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `HTTP error! status: ${response.status}${errorData.error ? ` - ${errorData.error}` : ''}`
        );
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error sending message:', error);
      return { 
        error: 'Failed to get response', 
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
};