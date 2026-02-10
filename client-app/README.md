# Logto Next.js App

A complete Next.js application with Logto authentication integration.

## Features

- ✅ Email verification code login
- ✅ Social login (WeChat, Google, etc.)
- ✅ Protected routes
- ✅ User profile dashboard
- ✅ Development and Production environment separation

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your Logto credentials:

```bash
cp .env.example .env.local
```

**Development Environment:**
```
LOGTO_ENDPOINT=https://f287sw.logto.app
LOGTO_APP_ID=oq3klh4954hdvb60dwtmu
LOGTO_APP_SECRET=syuwsTONNrKuOHHPqY3oSuQNkfkFLSGy
LOGTO_COOKIE_SECRET=your_random_32_char_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Production Environment (set in Vercel):**
```
LOGTO_ENDPOINT=https://[your-production-tenant].logto.app
LOGTO_APP_ID=[your-production-client-id]
LOGTO_APP_SECRET=[your-production-client-secret]
LOGTO_COOKIE_SECRET=[your-production-cookie-secret]
NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
```

### 3. Configure Logto Redirect URIs

In your Logto application settings, add these redirect URIs:

**Development:**
- `http://localhost:3000/api/logto/sign-in-callback`
- Post sign-out: `http://localhost:3000`

**Production:**
- `https://your-app.vercel.app/api/logto/sign-in-callback`
- Post sign-out: `https://your-app.vercel.app`

### 4. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables (Production values)
4. Deploy!

## Project Structure

```
client-app/
├── app/
│   ├── api/
│   │   ├── logto/[action]/route.ts   # Logto auth routes
│   │   └── user/route.ts              # User info API
│   ├── dashboard/
│   │   └── page.tsx                   # Protected dashboard
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                       # Home page
├── lib/
│   └── logto.ts                       # Logto configuration
└── package.json
```

## Environment Separation

This app uses Vercel's environment system to automatically switch between development and production Logto tenants:

- **Development/Preview**: Uses test tenant (f287sw)
- **Production**: Uses production tenant

No code changes needed - it switches automatically based on deployment environment!

## Learn More

- [Logto Documentation](https://docs.logto.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [@logto/next Documentation](https://docs.logto.io/quick-starts/next-app-router/)
