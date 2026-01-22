/**
 * AI Edit Component
 * Provides an enhanced interface for the AI Edit feature with prompt suggestions
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}

const promptSuggestions = [
  {
    category: "Lighting",
    suggestions: [
      "Improve the lighting and exposure",
      "Reduce harsh shadows",
      "Add dramatic lighting",
      "Brighten the image",
    ],
  },
  {
    category: "Color & Tone",
    suggestions: [
      "Add warm, golden tones",
      "Make it more vibrant and saturated",
      "Add cool blue tones",
      "Make it look like a vintage photo",
    ],
  },
  {
    category: "Enhancement",
    suggestions: [
      "Enhance details and sharpness",
      "Increase contrast and clarity",
      "Enhance skin tones",
      "Boost colors and saturation",
    ],
  },
  {
    category: "Style",
    suggestions: [
      "Make it look more professional",
      "Add a cinematic color grade",
      "Make it look like a painting",
      "Create a modern look",
    ],
  },
];

const AIEditModal: React.FC<AIEditModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}) => {
  const [prompt, setPrompt] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleQuickSuggest = (suggestion: string) => {
    setPrompt(suggestion);
  };

  const handleSubmit = () => {
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt("");
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-2xl glass rounded-2xl p-6 border border-card-border shadow-glow-primary max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">AI Edit</h2>
          </div>
          <p className="text-muted-foreground">
            Describe how you want to edit your image
          </p>
        </div>

        {/* Prompt Input */}
        <div className="mb-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What would you like to edit? (e.g., 'make it brighter', 'add warm tones', 'enhance details')"
            className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            rows={4}
            disabled={isLoading}
          />
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xs text-muted-foreground">
              {prompt.length}/500 characters
            </span>
            {prompt.length > 500 && (
              <span className="text-xs text-red-500">
                Prompt too long (max 500)
              </span>
            )}
          </div>
        </div>

        {/* Quick Suggestions */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="h-4 w-4 text-yellow-500" />
            <h3 className="font-semibold text-foreground">Quick Suggestions</h3>
          </div>

          <div className="space-y-3">
            {promptSuggestions.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  {group.category}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {group.suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleQuickSuggest(suggestion)}
                      className="text-left p-2 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors text-sm text-foreground hover:text-primary"
                      disabled={isLoading}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!prompt.trim() || isLoading || prompt.length > 500}
          >
            {isLoading ? "Processing..." : "Apply Edit"}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AIEditModal;
