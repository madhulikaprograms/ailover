# AILOVER - AI Voice Companion

AILOVER is an AI-powered voice and chat companion built with Next.js 14, TypeScript, and modern web technologies. This project provides a foundation for creating meaningful AI conversations with voice synthesis capabilities.

## 🚀 Features

- **Modern UI**: Built with Next.js 14 App Router and Tailwind CSS
- **Mock Authentication**: Simple demo authentication system
- **AI Chat Interface**: Interactive chat with mock AI responses
- **Voice Synthesis**: Text-to-speech for AI responses
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Built with Radix UI and shadcn/ui components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Database**: Drizzle ORM (configured but not used in demo)
- **Authentication**: Better Auth (configured but using mock for demo)

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yuvaraj-dudukuru/ailover.git
cd ailover
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration (optional for demo):

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/ailover

# Authentication
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# AI Services (for future implementation)
OPENAI_API_KEY=your-openai-api-key-here
ELEVENLABS_API_KEY=your-elevenlabs-api-key-here

# Application URLs
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Build and Production

### Local Production Build

```bash
npm run build
npm run start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema (when using real DB)
- `npm run db:studio` - Open Drizzle Studio (when using real DB)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**:
   - Push your code to GitHub
   - Connect your repository to [Vercel](https://vercel.com)
   - Vercel will automatically detect Next.js and configure the build

2. **Environment Variables**:
   - Add environment variables in Vercel dashboard
   - Set `NEXTAUTH_URL` to your production domain
   - Configure other variables as needed

3. **Deploy**:
   - Vercel will automatically deploy on every push to main branch

### Manual Deployment

The project includes a `vercel.json` configuration file for optimal deployment settings.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── chat/          # Chat API
│   ├── auth/              # Auth pages
│   ├── chat/              # Chat interface
│   ├── sign-in/           # Sign in page
│   ├── sign-up/           # Sign up page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (redirects to sign-in)
│   └── not-found.tsx      # 404 page
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility libraries
│   ├── auth-client.ts    # Mock authentication client
│   ├── auth.ts          # Better Auth configuration
│   └── utils.ts         # Utility functions
├── modules/              # Feature modules
│   └── auth/            # Authentication module
└── db/                  # Database configuration
    ├── index.ts         # Database connection
    └── schema.ts        # Database schema
```

## 🎯 Demo Features

### Authentication Flow
- **Sign Up**: Create a new account (mock)
- **Sign In**: Login with email/password (mock)
- **Session Management**: Uses localStorage for demo persistence

### Chat Interface
- **Real-time Chat**: Interactive chat with mock AI responses
- **Voice Synthesis**: AI responses are spoken using Web Speech API
- **Responsive Design**: Works on all device sizes
- **Message History**: Persistent chat history during session

### Mock API Endpoints
- `POST /api/auth/signin` - Mock sign in
- `POST /api/auth/signup` - Mock sign up
- `GET /api/chat` - Get chat history
- `POST /api/chat` - Send message and get AI response

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | No | - |
| `NEXTAUTH_SECRET` | Secret for JWT signing | No | - |
| `NEXTAUTH_URL` | Application URL | No | `http://localhost:3000` |
| `OPENAI_API_KEY` | OpenAI API key | No | - |
| `ELEVENLABS_API_KEY` | ElevenLabs API key | No | - |
| `NEXT_PUBLIC_API_BASE_URL` | API base URL | No | `http://localhost:3000/api` |
| `NEXT_PUBLIC_APP_URL` | Application URL | No | `http://localhost:3000` |

## 🚧 Development Notes

### Current State
This is a **demo/mock version** of AILOVER with the following characteristics:

- ✅ **Frontend**: Fully functional UI with modern design
- ✅ **Authentication**: Mock authentication system
- ✅ **Chat Interface**: Working chat with mock AI responses
- ✅ **Voice Synthesis**: Text-to-speech for AI responses
- ✅ **Responsive Design**: Mobile and desktop optimized
- ✅ **TypeScript**: Full type safety
- ✅ **Build System**: Production-ready build configuration

### Future Enhancements
- 🔄 **Real AI Integration**: Connect to OpenAI or other AI services
- 🔄 **Database Integration**: Implement real user authentication
- 🔄 **Voice Input**: Add speech-to-text capabilities
- 🔄 **User Profiles**: User management and preferences
- 🔄 **Chat History**: Persistent chat storage
- 🔄 **Advanced UI**: More interactive features and animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [Better Auth](https://www.better-auth.com/) - Authentication library
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yuvaraj-dudukuru/ailover/issues) page
2. Create a new issue if your problem isn't already reported
3. Join our community discussions

---

**Happy coding! 🚀**
