"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Sparkles, Loader2 } from "lucide-react"

interface GenerationResult {
  success: boolean
  imageUrl?: string
  description?: string
  creativePrompt?: string
  modelUsed?: string
  seed?: number
  fallback?: boolean
  error?: string
}

export function Editor() {
  const [prompt, setPrompt] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationResult, setGenerationResult] = useState<GenerationResult | null>(null)
  const [imageLoading, setImageLoading] = useState(false)
  const imageRetryCount = useRef(0)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!selectedFile || !prompt.trim()) {
      alert('Please upload an image and enter a prompt')
      return
    }

    setIsGenerating(true)
    setGenerationResult(null)
    imageRetryCount.current = 0

    try {
      const formData = new FormData()
      formData.append('image', selectedFile)
      formData.append('prompt', prompt)

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 90000) // 90 second timeout

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      const result = await response.json()

      if (response.ok) {
        setImageLoading(true)
        setGenerationResult({
          success: true,
          imageUrl: result.imageUrl,
          description: result.description,
          creativePrompt: result.creativePrompt,
          modelUsed: result.modelUsed,
          seed: result.seed,
          fallback: result.fallback
        })
      } else {
        setGenerationResult({
          success: false,
          error: result.error || result.details || 'Failed to generate image'
        })
      }
    } catch (error) {
      console.error('Generation error:', error)
      setGenerationResult({
        success: false,
        error: error instanceof Error && error.name === 'AbortError'
          ? 'Request timed out. The image generation is taking longer than expected. Please try again.'
          : 'Network error occurred. Please check your connection and try again.'
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section id="editor" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try The AI Editor</h2>
          <p className="text-lg text-muted-foreground">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text
            commands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Prompt Engine */}
          <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Prompt Engine</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Transform your image with AI-powered editing</p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Reference Image</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {selectedImage ? (
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Uploaded"
                        className="max-h-40 mx-auto rounded-lg"
                      />
                    ) : (
                      <>
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Add Image</p>
                        <p className="text-xs text-muted-foreground mt-1">Max 50MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Main Prompt</label>
                <Textarea
                  placeholder="A futuristic city powered by nano technology, golden hour lighting, ultra detailed..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-32 resize-none"
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
                onClick={handleGenerate}
                disabled={isGenerating || !selectedFile || !prompt.trim()}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Now
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Output Gallery */}
          <Card className="p-6 border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <Upload className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Output Gallery</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Your ultra-fast AI creations appear here instantly</p>

            <div className="border-2 border-dashed border-border rounded-lg p-6 min-h-[400px] bg-muted/20">
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[350px]">
                  <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                  <p className="text-lg font-medium mb-2">Generating...</p>
                  <p className="text-sm text-muted-foreground text-center">AI is working on your image</p>
                  <p className="text-xs text-muted-foreground text-center mt-2">This may take 30-60 seconds</p>
                </div>
              ) : generationResult ? (
                <div className="space-y-4">
                  {generationResult.success ? (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-green-700 dark:text-green-400">Generation Complete</span>
                          {generationResult.fallback && (
                            <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Fallback Mode</span>
                          )}
                        </div>
                        {generationResult.modelUsed && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">{generationResult.modelUsed}</span>
                        )}
                      </div>
                      {generationResult.imageUrl && (
                        <div className="space-y-4">
                          <div className="relative">
                            {imageLoading && (
                              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5">
                                <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                                <p className="text-sm text-muted-foreground">Loading image...</p>
                                <p className="text-xs text-muted-foreground mt-1">This may take a few seconds</p>
                              </div>
                            )}
                            <img
                              src={generationResult.imageUrl}
                              alt="Generated image"
                              className={`w-full rounded-lg border border-border ${imageLoading ? 'hidden' : 'block'}`}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                setImageLoading(false);

                                // Try to reload the image after a delay (max 3 retries)
                                if (imageRetryCount.current < 3) {
                                  imageRetryCount.current++;
                                  console.log(`Image load failed, retry ${imageRetryCount.current}/3 in 2 seconds...`);

                                  setTimeout(() => {
                                    const timestamp = new Date().getTime();
                                    target.src = `${generationResult.imageUrl}?retry=${imageRetryCount.current}&t=${timestamp}`;
                                  }, 2000);
                                } else {
                                  console.log('Image load failed after 3 retries');
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent && !parent.querySelector('.error-message')) {
                                    const errorDiv = document.createElement('div');
                                    errorDiv.className = 'error-message flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700';
                                    errorDiv.innerHTML = `
                                      <div class="text-4xl mb-2">🖼️</div>
                                      <p class="text-sm text-gray-600 dark:text-gray-400 text-center font-medium">Image failed to load</p>
                                      <p class="text-xs text-gray-500 dark:text-gray-500 text-center mt-1">The image generation service may be temporarily unavailable</p>
                                      <p class="text-xs text-gray-500 dark:text-gray-500 text-center mt-1">Try clicking "Generate Now" again with different settings</p>
                                    `;
                                    parent.appendChild(errorDiv);
                                  }
                                }
                              }}
                              onLoad={(e) => {
                                const target = e.target as HTMLImageElement;
                                console.log('Image loaded successfully!');
                                setImageLoading(false);
                                target.style.display = 'block';
                              }}
                            />
                          </div>
                          {generationResult.description && (
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-border">
                              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                <strong>Analysis:</strong> {generationResult.description}
                              </p>
                            </div>
                          )}
                          {generationResult.creativePrompt && (
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-border">
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                <strong>Creative Prompt:</strong> {generationResult.creativePrompt}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full min-h-[350px]">
                      <div className="text-6xl mb-4">❌</div>
                      <p className="text-lg font-medium mb-2 text-red-600 dark:text-red-400">Generation Failed</p>
                      <p className="text-sm text-muted-foreground text-center max-w-md">{generationResult.error}</p>
                      <Button
                        onClick={handleGenerate}
                        className="mt-4"
                        variant="outline"
                      >
                        Try Again
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[350px]">
                  <div className="text-6xl mb-4">🖼️</div>
                  <p className="text-lg font-medium mb-2">Ready for Instant Generation</p>
                  <p className="text-sm text-muted-foreground text-center">Enter your prompt and unleash the power</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
