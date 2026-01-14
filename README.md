# DonorConnect

A comprehensive donor retention platform for nonprofits that helps organizations track donor information and donation history in one clear, organized system.

## 🎯 Problem Statement

Nonprofits struggle to track donor information and donation history in one clear, organized system. This leads to missed follow-ups, poor reporting, and lost funding opportunities.

## 💡 Solution

DonorConnect provides a comprehensive platform to manage donors, track donations, and improve retention—all in one place. The platform helps solve the critical "first-to-second gift" conversion problem by providing tools to identify at-risk donors, track engagement, and automate follow-up workflows.

## ✨ Features

### Core Features
- **Donor Management**: Complete donor profiles with contact information, giving history, and calculated retention risk metrics
- **Donation Tracking**: Record and track all donations linked to donors, with automatic calculation of donor metrics
- **Dashboard**: Real-time overview showing total donors, donations, total raised, and lapsed donors
- **Retention Risk Calculation**: Automatic scoring to identify high-risk donors who need immediate attention
- **Search & Filter**: Find donors quickly with search and filtering capabilities
- **Role-Based Access**: Admin and staff roles with appropriate permissions

### AI Features
- **AI-Powered Donor Summaries**: Generate concise summaries of donor activity and engagement patterns
- **Planning Support**: AI recommendations for donor outreach strategies based on retention risk

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript
- **Database**: PostgreSQL (via Neon)
- **ORM**: Prisma 7
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Authentication**: Session-based with HTTP-only cookies
- **AI Integration**: OpenAI GPT-4 API
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ and pnpm 10.18+
- PostgreSQL database (local or cloud service like Neon)
- OpenAI API key (for AI features)

## 🚀 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd donor
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?schema=public&sslmode=require"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   OPENAI_API_KEY="your_openai_api_key_here"
   ```

4. **Set up the database:**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev

   # Seed the database with sample data
   npx prisma db seed
   ```

5. **Start the development server:**
   ```bash
   pnpm dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Test Credentials

After seeding, you can log in with:
- **Email**: `admin@hopefoundation.org`
- **Password**: `password123`

## 📁 Project Structure

```
donor/
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── seed.js            # Seed data script
│   └── client.js          # Prisma client setup
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── dashboard/     # Dashboard pages
│   │   ├── donors/        # Donor pages
│   │   ├── donations/     # Donation pages
│   │   ├── about/         # About page
│   │   ├── why-donorconnect/  # Why DonorConnect page
│   │   ├── ai-policy/     # AI Policy page
│   │   ├── evidence/      # Evidence page
│   │   ├── reflection/    # Reflection page
│   │   ├── login/         # Login page
│   │   ├── layout.jsx     # Root layout
│   │   └── page.jsx       # Home page
│   ├── components/
│   │   └── ui/            # UI components
│   └── lib/
│       ├── api/           # Business logic
│       ├── validation/   # Zod schemas
│       ├── auth.js        # Authentication
│       ├── session.js     # Session management
│       └── db.js          # Database client
└── middleware.js          # Route protection
```

## 🎨 Pages

- **Home** (`/`): Landing page with app overview and navigation
- **About** (`/about`): Problem explanation and impact
- **Why DonorConnect** (`/why-donorconnect`): Solution rationale and planning
- **Dashboard** (`/dashboard`): Summary metrics from database
- **Donors** (`/donors`): List of all donors with search
- **Add Donor** (`/donors/new`): Form to create new donors
- **Donations** (`/donations`): List of all donations linked to donors
- **Add Donation** (`/donations/new`): Form to record new donations
- **AI Policy** (`/ai-policy`): Documentation of AI usage and safeguards
- **Evidence** (`/evidence`): Assessment evidence and links
- **Reflection** (`/reflection`): Learning and decision-making process

## 🔐 Authentication

DonorConnect uses session-based authentication with HTTP-only cookies for security. Users must log in to access dashboard features. The system supports role-based access control with ADMIN and STAFF roles.

## 🤖 AI Integration

DonorConnect integrates OpenAI's GPT-4 API to provide:
- **Donor Activity Summaries**: AI analyzes giving patterns and generates concise summaries
- **Planning Support**: Recommendations for donor outreach strategies

All AI usage follows responsible practices:
- Data privacy protection
- Human oversight of AI outputs
- Clear documentation of AI usage
- Graceful fallback if AI services are unavailable

See `/ai-policy` for complete documentation.

## 📊 Database Schema

The application uses a PostgreSQL database with the following main models:
- **Organization**: Multi-tenant support
- **User**: Staff members with authentication
- **Donor**: Complete donor profiles with calculated metrics
- **Donation**: Donations linked to donors and campaigns
- **Campaign**: Fundraising campaigns
- **Session**: User authentication sessions

## 🧪 Development

```bash
# Run development server
pnpm dev

# Run linting
pnpm lint

# Generate Prisma client after schema changes
npx prisma generate

# Create new migration
npx prisma migrate dev --name migration_name

# View database in browser
npx prisma studio
```

## 📝 License

ISC

## 🙏 Acknowledgments

Built as a learning project to demonstrate modern full-stack web development with Next.js, PostgreSQL, and AI integration.
