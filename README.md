# 🎨 Pixelate AI - The Magic Photo Editor

<div align="center">
  <p align="center">
    <strong>Transform your photos with AI-powered editing tools</strong>
  </p>
  <p align="center">
    Remove backgrounds, enhance quality, and create stunning visuals in seconds.
  </p>
</div>

---

## ✨ Features

Pixelate AI provides a comprehensive suite of AI-powered image editing tools:

### 🔧 Core Features

- **🎭 AI Background Removal** - Remove backgrounds with precision AI technology in one click
- **🖼️ AI Generative Fill** - Expand canvas and auto-fill edges seamlessly for perfect aspect ratios
- **⚡ AI Upscale & Enhance** - Boost resolution up to 4x while preserving and enhancing details
- **✂️ Smart Crop & Face Focus** - Automatic intelligent cropping with face detection
- **📝 Watermark & Text Overlay** - Add custom watermarks and text with professional positioning

### 💎 Additional Capabilities

- Real-time image editing canvas
- Before/After comparison slider
- Drag-and-drop file upload
- Job queue system for processing
- Progress tracking for transformations
- Download processed images

### 🚀 SaaS Features

- **User Authentication** - Secure login with NextAuth
- **Subscription Management** - Stripe integration for payments
- **Usage Limits** - Free tier (3 uploads) and unlimited Pro plan
- **User Roles** - Support for User, Admin, and Moderator roles
- **Real-time Notifications** - Payment status and processing updates

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible primitives

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - Type-safe ORM
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication solution

### Integrations
- **[Stripe](https://stripe.com/)** - Payment processing
- **[ImageKit](https://imagekit.io/)** - Image CDN and transformation
- **[Zod](https://zod.dev/)** - Schema validation
- **[React Hook Form](https://react-hook-form.com/)** - Form management

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm** or **bun**
- **MongoDB** database (local or Atlas)
- **Stripe** account
- **ImageKit** account
- **NextAuth** OAuth providers (Google, GitHub, etc.)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd saass
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/dbname"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth Providers (configure as needed)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID="price_..."

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="your-public-key"
IMAGEKIT_PRIVATE_KEY="your-private-key"
IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your-id"
```

### 4. Database Setup

Generate Prisma Client and push the schema to your database:

```bash
npx prisma generate
npx prisma db push
```

To view your database in Prisma Studio:

```bash
npx prisma studio
```

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📁 Project Structure

```
saass/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # NextAuth handlers
│   │   │   ├── create-checkout-session/
│   │   │   ├── upload-auth/  # ImageKit auth
│   │   │   ├── usage/        # Usage tracking
│   │   │   └── webhooks/     # Stripe webhooks
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── Providers.tsx     # Context providers
│   ├── components/
│   │   ├── footer/           # Footer component
│   │   ├── modals/           # Modal components
│   │   ├── navbar/           # Navigation
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities & configs
│   │   ├── auth.ts          # NextAuth configuration
│   │   ├── prisma.ts        # Prisma client
│   │   └── utils.ts         # Helper functions
│   └── modules/
│       ├── editor/          # Main editor module
│       ├── feature/         # Features showcase
│       ├── hero/            # Hero section
│       └── pricings/        # Pricing plans
├── components.json          # shadcn/ui config
├── next.config.ts          # Next.js config
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS config
├── tailwind.config.ts      # Tailwind config
└── tsconfig.json           # TypeScript config
```

---

## 🔧 Configuration

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Create a product and price for the Pro plan
4. Set up a webhook endpoint pointing to `/api/webhooks/stripe`
5. Add the webhook secret to your `.env` file

### ImageKit Setup

1. Create an ImageKit account at [imagekit.io](https://imagekit.io)
2. Get your public/private keys and URL endpoint
3. Configure the transformation endpoints as needed
4. Add credentials to your `.env` file

### NextAuth Setup

1. Generate a secret: `openssl rand -base64 32`
2. Configure OAuth providers in `src/lib/auth.ts`
3. Set up OAuth apps with your providers (Google, GitHub, etc.)
4. Add client IDs and secrets to `.env`

---

## 🎯 Usage

### For Users

1. **Sign Up/Login** - Authenticate using OAuth providers
2. **Upload Image** - Drag and drop or click to upload
3. **Choose Tool** - Select from AI editing tools
4. **Process** - Watch as AI transforms your image
5. **Download** - Save your edited image

### Free vs Pro Plans

**Free Plan:**
- 3 image uploads
- Access to all features
- Standard processing speed

**Pro Plan ($9.99/month):**
- Unlimited uploads
- Priority processing
- Advanced AI models
- Premium support

---

## 🌐 API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/[...nextauth]` | * | NextAuth authentication |
| `/api/create-checkout-session` | POST | Create Stripe checkout |
| `/api/upload-auth` | GET | ImageKit upload token |
| `/api/usage` | GET/POST | Track usage limits |
| `/api/webhooks/stripe` | POST | Stripe webhook handler |

---

## 🎨 Customization

### Styling

- Modify `src/app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.ts`
- Theme customization in CSS variables

### Adding Features

1. Create new components in `src/components/`
2. Add API routes in `src/app/api/`
3. Update database schema in `prisma/schema.prisma`
4. Run `npx prisma db push` to apply changes

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy!

### Deploy on Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS
- DigitalOcean
- Render

---

## 🔐 Security

- Environment variables are never exposed to the client
- Stripe webhooks are verified using signatures
- NextAuth handles secure session management
- CORS is properly configured for API routes
- Input validation using Zod schemas

---

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error:**
```bash
# Verify your DATABASE_URL is correct
# Check MongoDB Atlas network access settings
npx prisma db push
```

**Stripe Webhook Failing:**
```bash
# Use Stripe CLI for local testing
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

**Image Upload Issues:**
```bash
# Verify ImageKit credentials
# Check CORS settings in ImageKit dashboard
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Stripe](https://stripe.com/) for payment processing
- [ImageKit](https://imagekit.io/) for image transformations
- [Vercel](https://vercel.com/) for hosting

---

## 📞 Support

For support, email nishantborude555@gmail.com or join our Slack channel.

---

<div align="center">
  <p>Made with ❤️ by the Pixelate AI Team</p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-api-routes">API</a> •
    <a href="#-troubleshooting">Support</a>
  </p>
</div>
