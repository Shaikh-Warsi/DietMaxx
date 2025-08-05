"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"

interface RecommendationItem {
  title: string;
  description: string;
}

interface RecommendationsData {
  immediate_needs: RecommendationItem[];
  add_later: RecommendationItem[];
  optional_boosters: RecommendationItem[];
}

interface ResultsPageProps {
  onReset: () => void;
  recommendations: RecommendationsData | null;
}


export function ResultsPage({ onReset, recommendations }: ResultsPageProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800">Your Personalized Recommendations! 👋</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Here's your AI-powered dietary analysis and recommendations.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Recommendations Content */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          {recommendations ? (
            <RecommendationsDisplay recommendations={recommendations} />
          ) : (
            <p className="text-gray-600">No recommendations available. Please go back and submit your information.</p>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="text-center space-y-4">
        <Button
          onClick={onReset}
          variant="outline"
          className="h-12 px-8 border-gray-300 hover:bg-gray-50 bg-transparent"
        >
          Start New Analysis
        </Button>
      </div>
    </div>
  )
}

interface RecommendationsDisplayProps {
  recommendations: RecommendationsData;
}

function RecommendationsDisplay({ recommendations: data }: RecommendationsDisplayProps) {

    return (
      <div className="space-y-8">
        {data.immediate_needs && data.immediate_needs.length > 0 && (
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Immediate Nutrient Needs</h3>
            <div className="space-y-4">
              {data.immediate_needs.map((item, index) => (
                <Collapsible key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                  <CollapsibleTrigger className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-800">
                    {item.title}
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2 text-gray-600">
                    {item.description}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </section>
        )}

        {data.add_later && data.add_later.length > 0 && (
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Things to Add Later</h3>
            <div className="space-y-4">
              {data.add_later.map((item, index) => (
                <Collapsible key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                  <CollapsibleTrigger className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-800">
                    {item.title}
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2 text-gray-600">
                    {item.description}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </section>
        )}

        {data.optional_boosters && data.optional_boosters.length > 0 && (
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Optional Boosters</h3>
            <div className="space-y-4">
              {data.optional_boosters.map((item, index) => (
                <Collapsible key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                  <CollapsibleTrigger className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-800">
                    {item.title}
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2 text-gray-600">
                    {item.description}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </section>
        )}
      </div>
    );

}
