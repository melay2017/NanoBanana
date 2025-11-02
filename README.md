# Nano Banana - AI Image Editor

AI-powered image editing application with natural language prompts. Transform images using advanced AI models through OpenRouter, Stability AI, and Pollinations AI.

## 🚀 Features

- **Multiple AI Model Support**
  - OpenRouter API (Flux 1.1 Pro, Gemini 2.5 Flash Image, Stability AI)
  - Stability AI Direct API
  - Pollinations AI (Flux, Turbo models)

- **Robust Image Generation**
  - True img2img with character preservation
  - Multiple fallback services
  - Automatic retry with validation
  - Image URL verification

- **Smart Upload System**
  - Vercel Blob Storage support
  - Multiple anonymous upload services (0x0.st, tmpfiles.org, transfer.sh)
  - Automatic fallback chain

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19 + TypeScript + Tailwind CSS
- **Components**: Shadcn/ui
- **AI APIs**: OpenRouter, Stability AI, Pollinations AI
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/melay2017/NanoBanana.git
cd NanoBanana

# Install dependencies
npm install
# or
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys
```

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```env
# OpenRouter API (Optional but recommended for best quality)
OPENROUTER_API_KEY=sk-or-v1-your-key-here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_SITE_URL=https://your-domain.com
OPENROUTER_SITE_NAME=Nano Banana AI Image Editor
OPENROUTER_MODEL_IMG2IMG=google/gemini-2.5-flash-image

# Stability AI API (Optional)
STABILITY_API_KEY=sk-your-stability-key

# Vercel Blob Storage (Optional, for better image uploads)
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
```

### Getting API Keys:

1. **OpenRouter** (Recommended):
   - Sign up at [openrouter.ai](https://openrouter.ai)
   - Get your API key from the dashboard
   - Add credits to your account ($5 minimum recommended)

2. **Stability AI** (Optional):
   - Sign up at [stability.ai](https://platform.stability.ai)
   - Get your API key from settings

3. **Vercel Blob** (Optional):
   - Enable Blob in your Vercel project settings
   - Copy the token from the dashboard

## 🚀 Deployment on Vercel

### Method 1: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/melay2017/NanoBanana)

### Method 2: Manual Deployment

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - In Vercel project settings → Environment Variables
   - Add all variables from `.env.local`
   - **IMPORTANT**: Add these variables:
     ```
     OPENROUTER_API_KEY=your-key-here
     OPENROUTER_SITE_URL=https://your-vercel-url.vercel.app
     OPENROUTER_MODEL_IMG2IMG=google/gemini-2.5-flash-image
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-project.vercel.app`

### Important Vercel Configuration

The `vercel.json` file configures:
- **Function timeout**: 60 seconds (for image generation)
- **Memory**: 1024MB
- **Region**: Tokyo (hnd1) for better performance

## 💻 Local Development

```bash
# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## 🎨 How to Use

1. **Upload Reference Image**
   - Click "Add Image" in the Prompt Engine
   - Select an image (max 50MB)

2. **Enter Prompt**
   - Describe your desired transformation
   - Example: "Create a 1/7 scale figure of the character in a realistic environment"

3. **Generate**
   - Click "Generate Now"
   - Wait 30-60 seconds for generation
   - Image will appear in Output Gallery

## 🔧 Troubleshooting

### "Generation Failed" Error

**Possible causes:**
1. **Missing API Keys**: Check environment variables in Vercel
2. **Insufficient Credits**: Add credits to OpenRouter account
3. **Network Issues**: Check Vercel function logs
4. **Image Too Large**: Try compressing the image

**Solutions:**
```bash
# Check Vercel logs
vercel logs your-project-url

# Test locally first
npm run dev
# Upload an image and check browser console
```

### Image Upload Fails

1. **File size too large**: Compress to < 10MB
2. **Unsupported format**: Use JPG, PNG, or WebP
3. **Network timeout**: Try again or use smaller image

### Image Generation Timeout

1. **Increase timeout**: Already set to 60s in `vercel.json`
2. **Use faster models**: Set `OPENROUTER_MODEL_IMG2IMG=google/gemini-2.5-flash-image`
3. **Check model availability**: Some models may be unavailable

## 📝 API Routes

### `POST /api/generate`

Generate images from reference image + text prompt.

**Request:**
```javascript
const formData = new FormData()
formData.append('image', imageFile)
formData.append('prompt', 'your prompt here')

const response = await fetch('/api/generate', {
  method: 'POST',
  body: formData
})
```

**Response:**
```json
{
  "success": true,
  "imageUrl": "https://...",
  "modelUsed": "OpenRouter google/gemini-2.5-flash-image",
  "seed": 123456,
  "fallback": false
}
```

## 🏗️ Architecture

```
Generation Flow:
1. Upload image → Try Vercel Blob → Try 0x0.st → Try tmpfiles → Try transfer.sh
2. Call OpenRouter Responses API → Try Flux models
3. Fallback: OpenRouter Chat → Try Gemini
4. Fallback: OpenRouter Images → Try Stability AI
5. Fallback: Stability AI Direct API
6. Final Fallback: Pollinations AI (Flux/Turbo/Default)
7. Last Resort: Placeholder service
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Credits

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- AI models via [OpenRouter](https://openrouter.ai)
- Image generation by [Stability AI](https://stability.ai) & [Pollinations AI](https://pollinations.ai)

## 📞 Support

- Issues: [GitHub Issues](https://github.com/melay2017/NanoBanana/issues)
- Discussions: [GitHub Discussions](https://github.com/melay2017/NanoBanana/discussions)

---

Made with ❤️ using AI-powered image generation
