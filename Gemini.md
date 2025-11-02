[Skip to content](https://openrouter.ai/google/gemini-2.5-flash-image/api#skip)

[OpenRouter](https://openrouter.ai/)





/

[Models](https://openrouter.ai/models)[Chat](https://openrouter.ai/chat)[Rankings](https://openrouter.ai/rankings)[Docs](https://openrouter.ai/docs/quick-start)

- 

# Google: Gemini 2.5 Flash Image (Nano Banana)

### [google](https://openrouter.ai/google)/gemini-2.5-flash-image



[Chat](https://openrouter.ai/chat?models=google/gemini-2.5-flash-image)[Compare](https://openrouter.ai/compare/google/gemini-2.5-flash-image)

Created Oct 7, 202532,768 context

$0.30/M input tokens$2.50/M output tokens$1.238/K input imgs$0.03/K output imgs

Gemini 2.5 Flash Image, a.k.a. "Nano Banana," is now generally available. It is a state of the art image generation model with contextual understanding. It is capable of image generation, edits, and multi-turn conversations. Aspect ratios can be controlled with the [image_config API Parameter](https://openrouter.ai/docs/features/multimodal/image-generation#image-aspect-ratio-configuration)



OverviewProvidersPerformanceAppsActivityUptimeAPI

## Sample code and API for Gemini 2.5 Flash Image (Nano Banana)

### OpenRouter normalizes requests and responses across providers for you.

[Create API key](https://openrouter.ai/settings/keys)

OpenRouter provides an OpenAI-compatible completion API to 400+ models & providers that you can call directly, or using the OpenAI SDK. Additionally, some third-party SDKs are available.

In the examples below, the [OpenRouter-specific headers](https://openrouter.ai/docs/requests#request-headers) are optional. Setting them allows your app to appear on the OpenRouter leaderboards.

openai-pythonpythontypescriptopenai-typescriptcurl

Copy

```typescript
import OpenAI from 'openai';
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "<OPENROUTER_API_KEY>",
  defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  },
});
async function main() {
  const completion = await openai.chat.completions.create({
    model: "google/gemini-2.5-flash-image",
    messages: [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "What is in this image?"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
            }
          }
        ]
      }
    ],
    
  });

  console.log(completion.choices[0].message);
}

main();
```

## Using third-party SDKs

For information about using third-party SDKs and frameworks with OpenRouter, please see our [frameworks documentation](https://openrouter.ai/docs/community/frameworks-and-integrations-overview).

See the [Request docs](https://openrouter.ai/docs/api-reference/overview) for all possible fields, and [Parameters](https://openrouter.ai/docs/api-reference/parameters) for explanations of specific sampling parameters.

## More models from [Google](https://openrouter.ai/google)

[Gemini Embedding 001gemini-embedding-001 provides a unified cutting edge experience across domains, including science, legal, finance, and coding. This embedding model has consistently held a top spot on the Massive Text Embedding Benchmark (MTEB) Multilingual leaderboard since the experimental launch in March.](https://openrouter.ai/google/gemini-embedding-001)

[Gemini 2.5 Flash Preview 09-2025Gemini 2.5 Flash Preview September 2025 Checkpoint is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in "thinking" capabilities, enabling it to provide responses with greater accuracy and nuanced context handling.Additionally, Gemini 2.5 Flash is configurable through the "max tokens for reasoning" parameter, as described in the documentation (https://openrouter.ai/docs/use-cases/reasoning-tokens#max-tokens-for-reasoning).](https://openrouter.ai/google/gemini-2.5-flash-preview-09-2025)

[Gemini 2.5 Flash Lite Preview 09-2025Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, "thinking" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the Reasoning API parameter to selectively trade off cost for intelligence.](https://openrouter.ai/google/gemini-2.5-flash-lite-preview-09-2025)

[Gemini 2.5 Flash Image PreviewGemini 2.5 Flash Image Preview, a.k.a. "Nano Banana," is a state of the art image generation model with contextual understanding. It is capable of image generation, edits, and multi-turn conversations.](https://openrouter.ai/google/gemini-2.5-flash-image-preview)

[Gemini 2.5 Flash LiteGemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, "thinking" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the Reasoning API parameter to selectively trade off cost for intelligence.](https://openrouter.ai/google/gemini-2.5-flash-lite)

[Gemma 3n 2BGemma 3n E2B IT is a multimodal, instruction-tuned model developed by Google DeepMind, designed to operate efficiently at an effective parameter size of 2B while leveraging a 6B architecture. Based on the MatFormer architecture, it supports nested submodels and modular composition via the Mix-and-Match framework. Gemma 3n models are optimized for low-resource deployment, offering 32K context length and strong multilingual and reasoning performance across common benchmarks. This variant is trained on a diverse corpus including code, math, web, and multimodal data.](https://openrouter.ai/google/gemma-3n-e2b-it:free)

[Gemini 2.5 Flash Lite Preview 06-17Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, "thinking" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the Reasoning API parameter to selectively trade off cost for intelligence.](https://openrouter.ai/google/gemini-2.5-flash-lite-preview-06-17)

[Gemini 2.5 FlashGemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in "thinking" capabilities, enabling it to provide responses with greater accuracy and nuanced context handling.Additionally, Gemini 2.5 Flash is configurable through the "max tokens for reasoning" parameter, as described in the documentation (https://openrouter.ai/docs/use-cases/reasoning-tokens#max-tokens-for-reasoning).](https://openrouter.ai/google/gemini-2.5-flash)

[Gemini 2.5 ProGemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.](https://openrouter.ai/google/gemini-2.5-pro)

[Gemini 2.5 Pro Preview 06-05Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.](https://openrouter.ai/google/gemini-2.5-pro-preview)

[Gemma 1 2BGemma 1 2B by Google is an open model built from the same research and technology used to create the Gemini models.Gemma models are well-suited for a variety of text generation tasks, including question answering, summarization, and reasoning.Usage of Gemma is subject to Google's Gemma Terms of Use.](https://openrouter.ai/google/gemma-2b-it)

[Gemma 3n 4BGemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks such as text generation, speech recognition, translation, and image analysis. Leveraging innovations like Per-Layer Embedding (PLE) caching and the MatFormer architecture, Gemma 3n dynamically manages memory usage and computational load by selectively activating model parameters, significantly reducing runtime resource requirements.This model supports a wide linguistic range (trained in over 140 languages) and features a flexible 32K token context window. Gemma 3n can selectively load parameters, optimizing memory and computational efficiency based on the task or device capabilities, making it well-suited for privacy-focused, offline-capable applications and on-device AI solutions. Read more in the blog post](https://openrouter.ai/google/gemma-3n-e4b-it)

[Gemini 2.5 Flash Preview 05-20Gemini 2.5 Flash May 20th Checkpoint is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in "thinking" capabilities, enabling it to provide responses with greater accuracy and nuanced context handling.Note: This model is available in two variants: thinking and non-thinking. The output pricing varies significantly depending on whether the thinking capability is active. If you select the standard variant (without the ":thinking" suffix), the model will explicitly avoid generating thinking tokens.To utilize the thinking capability and receive thinking tokens, you must choose the ":thinking" variant, which will then incur the higher thinking-output pricing.Additionally, Gemini 2.5 Flash is configurable through the "max tokens for reasoning" parameter, as described in the documentation (https://openrouter.ai/docs/use-cases/reasoning-tokens#max-tokens-for-reasoning).](https://openrouter.ai/google/gemini-2.5-flash-preview-05-20)

[Gemini 2.5 Pro Preview 05-06Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.](https://openrouter.ai/google/gemini-2.5-pro-preview-05-06)

[Gemini 2.5 Flash Preview 04-17Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in "thinking" capabilities, enabling it to provide responses with greater accuracy and nuanced context handling.Note: This model is available in two variants: thinking and non-thinking. The output pricing varies significantly depending on whether the thinking capability is active. If you select the standard variant (without the ":thinking" suffix), the model will explicitly avoid generating thinking tokens.To utilize the thinking capability and receive thinking tokens, you must choose the ":thinking" variant, which will then incur the higher thinking-output pricing.Additionally, Gemini 2.5 Flash is configurable through the "max tokens for reasoning" parameter, as described in the documentation (https://openrouter.ai/docs/use-cases/reasoning-tokens#max-tokens-for-reasoning).](https://openrouter.ai/google/gemini-2.5-flash-preview)

[Gemini 2.5 Pro ExperimentalThis model has been deprecated by Google in favor of the (paid Preview model)[google/gemini-2.5-pro-preview\]  Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.](https://openrouter.ai/google/gemini-2.5-pro-exp-03-25)

[Gemma 3 1BGemma 3 1B is the smallest of the new Gemma 3 family. It handles context windows up to 32k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Note: Gemma 3 1B is not multimodal. For the smallest multimodal Gemma 3 model, please see Gemma 3 4B](https://openrouter.ai/google/gemma-3-1b-it)

[Gemma 3 4BGemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling.](https://openrouter.ai/google/gemma-3-4b-it)

[Gemma 3 12BGemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 12B is the second largest in the family of Gemma 3 models after Gemma 3 27B](https://openrouter.ai/google/gemma-3-12b-it)

[Gemma 3 27BGemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 27B is Google's latest open source model, successor to Gemma 2](https://openrouter.ai/google/gemma-3-27b-it)

[Gemini 2.0 Flash LiteGemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to Gemini Flash 1.5, while maintaining quality on par with larger models like Gemini Pro 1.5, all at extremely economical token prices.](https://openrouter.ai/google/gemini-2.0-flash-lite-001)

[Gemini 2.0 FlashGemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to Gemini Flash 1.5, while maintaining quality on par with larger models like Gemini Pro 1.5. It introduces notable enhancements in multimodal understanding, coding capabilities, complex instruction following, and function calling. These advancements come together to deliver more seamless and robust agentic experiences.](https://openrouter.ai/google/gemini-2.0-flash-001)

[Gemini 2.0 Flash ExperimentalGemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to Gemini Flash 1.5, while maintaining quality on par with larger models like Gemini Pro 1.5. It introduces notable enhancements in multimodal understanding, coding capabilities, complex instruction following, and function calling. These advancements come together to deliver more seamless and robust agentic experiences.](https://openrouter.ai/google/gemini-2.0-flash-exp:free)

[Gemini Experimental 1121Experimental release (November 21st, 2024) of Gemini.](https://openrouter.ai/google/gemini-exp-1121)

[Gemini Experimental 1114Gemini 11-14 (2024) experimental model features "quality" improvements.](https://openrouter.ai/google/gemini-exp-1114)

[Gemini 1.5 Flash 8BGemini Flash 1.5 8B is optimized for speed and efficiency, offering enhanced performance in small prompt tasks like chat, transcription, and translation. With reduced latency, it is highly effective for real-time and large-scale operations. This model focuses on cost-effective solutions while maintaining high-quality results.Click here to learn more about this model.Usage of Gemini is subject to Google's Gemini Terms of Use.](https://openrouter.ai/google/gemini-flash-1.5-8b)

[Gemini 1.5 Flash ExperimentalGemini 1.5 Flash Experimental is an experimental version of the Gemini 1.5 Flash model.Usage of Gemini is subject to Google's Gemini Terms of Use.#multimodalNote: This model is experimental and not suited for production use-cases. It may be removed or redirected to another model in the future.](https://openrouter.ai/google/gemini-flash-1.5-exp)

[Gemini 1.5 Pro ExperimentalGemini 1.5 Pro Experimental is a bleeding-edge version of the Gemini 1.5 Pro model. Because it's currently experimental, it will be **heavily rate-limited** by Google.Usage of Gemini is subject to Google's Gemini Terms of Use.#multimodal](https://openrouter.ai/google/gemini-pro-1.5-exp)

[Gemma 2 27BGemma 2 27B by Google is an open model built from the same research and technology used to create the Gemini models.Gemma models are well-suited for a variety of text generation tasks, including question answering, summarization, and reasoning.See the launch announcement for more details. Usage of Gemma is subject to Google's Gemma Terms of Use.](https://openrouter.ai/google/gemma-2-27b-it)

[Gemma 2 9BGemma 2 9B by Google is an advanced, open-source language model that sets a new standard for efficiency and performance in its size class.Designed for a wide variety of tasks, it empowers developers and researchers to build innovative applications, while maintaining accessibility, safety, and cost-effectiveness.See the launch announcement for more details. Usage of Gemma is subject to Google's Gemma Terms of Use.](https://openrouter.ai/google/gemma-2-9b-it)

[Gemini 1.5 FlashGemini 1.5 Flash is a foundation model that performs well at a variety of multimodal tasks such as visual understanding, classification, summarization, and creating content from image, audio and video. It's adept at processing visual and text inputs such as photographs, documents, infographics, and screenshots.Gemini 1.5 Flash is designed for high-volume, high-frequency tasks where cost and latency matter. On most common tasks, Flash achieves comparable quality to other Gemini Pro models at a significantly reduced cost. Flash is well-suited for applications like chat assistants and on-demand content generation where speed and scale matter.Usage of Gemini is subject to Google's Gemini Terms of Use.#multimodal](https://openrouter.ai/google/gemini-flash-1.5)

[Gemini 1.5 ProGoogle's latest multimodal model, supports image and video[0\] in text or chat prompts.Optimized for language tasks including:Usage of Gemini is subject to Google's Gemini Terms of Use.](https://openrouter.ai/google/gemini-pro-1.5)

[Gemma 7BGemma by Google is an advanced, open-source language model family, leveraging the latest in decoder-only, text-to-text technology. It offers English language capabilities across text generation tasks like question answering, summarization, and reasoning. The Gemma 7B variant is comparable in performance to leading open source models.Usage of Gemma is subject to Google's Gemma Terms of Use.](https://openrouter.ai/google/gemma-7b-it)

[PaLM 2 Chat 32kPaLM 2 is a language model by Google with improved multilingual, reasoning and coding capabilities.](https://openrouter.ai/google/palm-2-chat-bison-32k)

[PaLM 2 Code Chat 32kPaLM 2 fine-tuned for chatbot conversations that help with code-related questions.](https://openrouter.ai/google/palm-2-codechat-bison-32k)

[PaLM 2 Code ChatPaLM 2 fine-tuned for chatbot conversations that help with code-related questions.](https://openrouter.ai/google/palm-2-codechat-bison)

[PaLM 2 ChatPaLM 2 is a language model by Google with improved multilingual, reasoning and coding capabilities.](https://openrouter.ai/google/palm-2-chat-bison)

Previous slideNext slide



© 2023 – 2025 OpenRouter, Inc



Google: Gemini 2.5 Flash Image (Nano Banana) – Run with an API

[
![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/2025-11-01T23:00:07.152Z/content/assets/logo.svg)](https://openrouter.ai/)

Search/Ask AI

[API](https://openrouter.ai/docs/api-reference/overview)[Models](https://openrouter.ai/models)[Chat](https://openrouter.ai/chat)[Ranking](https://openrouter.ai/rankings)

- Overview
  - [Quickstart](https://openrouter.ai/docs/quickstart)
  - [FAQ](https://openrouter.ai/docs/faq)
  - [Principles](https://openrouter.ai/docs/overview/principles)
  - [Models](https://openrouter.ai/docs/overview/models)
  - [Enterprise](https://openrouter.ai/enterprise)
- Features
  - [Privacy and Logging](https://openrouter.ai/docs/features/privacy-and-logging)
  - [Zero Data Retention (ZDR)](https://openrouter.ai/docs/features/zdr)
  - [Model Routing](https://openrouter.ai/docs/features/model-routing)
  - [Provider Routing](https://openrouter.ai/docs/features/provider-routing)
  - [Exacto Variant](https://openrouter.ai/docs/features/exacto-variant)
  - [Latency and Performance](https://openrouter.ai/docs/features/latency-and-performance)
  - [Presets](https://openrouter.ai/docs/features/presets)
  - [Prompt Caching](https://openrouter.ai/docs/features/prompt-caching)
  - [Structured Outputs](https://openrouter.ai/docs/features/structured-outputs)
  - [Tool Calling](https://openrouter.ai/docs/features/tool-calling)
  - Multimodal
    - [Overview](https://openrouter.ai/docs/features/multimodal/overview)
    - [Images](https://openrouter.ai/docs/features/multimodal/images)
    - [Image Generation](https://openrouter.ai/docs/features/multimodal/image-generation)
    - [PDFs](https://openrouter.ai/docs/features/multimodal/pdfs)
    - [Audio](https://openrouter.ai/docs/features/multimodal/audio)
  - [Message Transforms](https://openrouter.ai/docs/features/message-transforms)
  - [Uptime Optimization](https://openrouter.ai/docs/features/uptime-optimization)
  - [Web Search](https://openrouter.ai/docs/features/web-search)
  - [Zero Completion Insurance](https://openrouter.ai/docs/features/zero-completion-insurance)
  - [Provisioning API Keys](https://openrouter.ai/docs/features/provisioning-api-keys)
  - [App Attribution](https://openrouter.ai/docs/app-attribution)
- API Reference
  - [Overview](https://openrouter.ai/docs/api-reference/overview)
  - [Streaming](https://openrouter.ai/docs/api-reference/streaming)
  - [Limits](https://openrouter.ai/docs/api-reference/limits)
  - [Authentication](https://openrouter.ai/docs/api-reference/authentication)
  - [Parameters](https://openrouter.ai/docs/api-reference/parameters)
  - [Errors](https://openrouter.ai/docs/api-reference/errors)
  - Responses API
  - beta.responses
  - Analytics
  - Credits
  - Generations
  - Models
  - Endpoints
  - Parameters
  - Providers
  - API Keys
  - O Auth
  - Chat
  - Completions
- Use Cases
  - [BYOK](https://openrouter.ai/docs/use-cases/byok)
  - [Crypto API](https://openrouter.ai/docs/use-cases/crypto-api)
  - [OAuth PKCE](https://openrouter.ai/docs/use-cases/oauth-pkce)
  - [MCP Servers](https://openrouter.ai/docs/use-cases/mcp-servers)
  - [Organization Management](https://openrouter.ai/docs/use-cases/organization-management)
  - [For Providers](https://openrouter.ai/docs/use-cases/for-providers)
  - [Reasoning Tokens](https://openrouter.ai/docs/use-cases/reasoning-tokens)
  - [Usage Accounting](https://openrouter.ai/docs/use-cases/usage-accounting)
  - [User Tracking](https://openrouter.ai/docs/use-cases/user-tracking)
- Community
  - [Frameworks and Integrations Overview](https://openrouter.ai/docs/community/frameworks-and-integrations-overview)
  - [Effect AI SDK](https://openrouter.ai/docs/community/effect-ai-sdk)
  - [Arize](https://openrouter.ai/docs/community/arize)
  - [LangChain](https://openrouter.ai/docs/community/lang-chain)
  - [Langfuse](https://openrouter.ai/docs/community/langfuse)
  - [Mastra](https://openrouter.ai/docs/community/mastra)
  - [OpenAI SDK](https://openrouter.ai/docs/community/open-ai-sdk)
  - [PydanticAI](https://openrouter.ai/docs/community/pydantic-ai)
  - [Vercel AI SDK](https://openrouter.ai/docs/community/vercel-ai-sdk)
  - [Xcode](https://openrouter.ai/docs/community/xcode)
  - [Zapier](https://openrouter.ai/docs/community/zapier)
  - [Discord](https://discord.gg/openrouter)

[Features](https://openrouter.ai/docs/features/privacy-and-logging)[Multimodal](https://openrouter.ai/docs/features/multimodal/overview)

# Image Generation

Copy page

How to generate images with OpenRouter models

OpenRouter supports image generation through models that have in their . These models can create images from text prompts when you specify the appropriate modalities in your request.`"image"``output_modalities`

## Model Discovery

You can find image generation models in several ways:

### On the Models Page

Visit the [Models page](https://openrouter.ai/models) and filter by output modalities to find models capable of image generation. Look for models that list in their output modalities.`"image"`

### In the Chatroom

When using the [Chatroom](https://openrouter.ai/chat), click the **Image** button to automatically filter and select models with image generation capabilities. If no image-capable model is active, you’ll be prompted to add one.

## API Usage

To generate images, send a request to the endpoint with the parameter set to include both and .`/api/v1/chat/completions``modalities``"image"``"text"`

### Basic Image Generation

PythonTypeScript



```
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${API_KEY_REF}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'google/gemini-2.5-flash-image-preview',
    messages: [
      {
        role: 'user',
        content: 'Generate a beautiful sunset over mountains',
      },
    ],
    modalities: ['image', 'text'],
  }),
});

const result = await response.json();

// The generated image will be in the assistant message
if (result.choices) {
  const message = result.choices[0].message;
  if (message.images) {
    message.images.forEach((image, index) => {
      const imageUrl = image.image_url.url; // Base64 data URL
      console.log(`Generated image ${index + 1}: ${imageUrl.substring(0, 50)}...`);
    });
  }
}
```

### Image Aspect Ratio Configuration

Gemini image-generation models let you request specific aspect ratios by setting . Read more about using Gemini Image Gen models here: `image_config.aspect_ratio`https://ai.google.dev/gemini-api/docs/image-generation

**Supported aspect ratios:**

- `1:1` → 1024×1024 (default)
- `2:3` → 832×1248
- `3:2` → 1248×832
- `3:4` → 864×1184
- `4:3` → 1184×864
- `4:5` → 896×1152
- `5:4` → 1152×896
- `9:16` → 768×1344
- `16:9` → 1344×768
- `21:9` → 1536×672

PythonTypeScript



```
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${API_KEY_REF}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'google/gemini-2.5-flash-image-preview',
    messages: [
      {
        role: 'user',
        content: 'Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme',
      },
    ],
    modalities: ['image', 'text'],
    image_config: {
      aspect_ratio: '16:9',
    },
  }),
});

const result = await response.json();

if (result.choices) {
  const message = result.choices[0].message;
  if (message.images) {
    message.images.forEach((image, index) => {
      const imageUrl = image.image_url.url;
      console.log(`Generated image ${index + 1}: ${imageUrl.substring(0, 50)}...`);
    });
  }
}
```

### Streaming Image Generation

Image generation also works with streaming responses:

PythonTypeScript



```
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${API_KEY_REF}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'google/gemini-2.5-flash-image-preview',
    messages: [
      {
        role: 'user',
        content: 'Create an image of a futuristic city',
      },
    ],
    modalities: ['image', 'text'],
    stream: true,
  }),
});

const reader = response.body?.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  const lines = chunk.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = line.slice(6);
      if (data !== '[DONE]') {
        try {
          const parsed = JSON.parse(data);
          if (parsed.choices) {
            const delta = parsed.choices[0].delta;
            if (delta?.images) {
              delta.images.forEach((image, index) => {
                console.log(`Generated image ${index + 1}: ${image.image_url.url.substring(0, 50)}...`);
              });
            }
          }
        } catch (e) {
          // Skip invalid JSON
        }
      }
    }
  }
}
```

## Response Format

When generating images, the assistant message includes an field containing the generated images:`images`

```
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "I've generated a beautiful sunset image for you.",
        "images": [
          {
            "type": "image_url",
            "image_url": {
              "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
            }
          }
        ]
      }
    }
  ]
}
```



### Image Format

- **Format**: Images are returned as base64-encoded data URLs
- **Types**: Typically PNG format (`data:image/png;base64,`)
- **Multiple Images**: Some models can generate multiple images in a single response
- **Size**: Image dimensions vary by model capabilities

## Model Compatibility

Not all models support image generation. To use this feature:

1. **Check Output Modalities**: Ensure the model has in its `"image"``output_modalities`
2. **Set Modalities Parameter**: Include in your request`"modalities": ["image", "text"]`
3. **Use Compatible Models**: Examples include:
   - `google/gemini-2.5-flash-image-preview`
   - Other models with image generation capabilities

## Best Practices

- **Clear Prompts**: Provide detailed descriptions for better image quality
- **Model Selection**: Choose models specifically designed for image generation
- **Error Handling**: Check for the field in responses before processing`images`
- **Rate Limits**: Image generation may have different rate limits than text generation
- **Storage**: Consider how you’ll handle and store the base64 image data

## Troubleshooting

**No images in response?**

- Verify the model supports image generation ( includes `output_modalities``"image"`)
- Ensure you’ve included in your request`"modalities": ["image", "text"]`
- Check that your prompt is requesting image generation

**Model not found?**

- Use the [Models page](https://openrouter.ai/models) to find available image generation models
- Filter by output modalities to see compatible models

Was this page helpful?

YesNo

[Previous](https://openrouter.ai/docs/features/multimodal/images)[PDF InputsHow to send PDFs to OpenRouter modelsNext](https://openrouter.ai/docs/features/multimodal/pdfs)

[Built with](https://buildwithfern.com/?utm_campaign=buildWith&utm_medium=docs&utm_source=openrouter.ai)



Ask AI


