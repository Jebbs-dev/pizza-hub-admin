# Pizza Hub Admin Dashboard

## Author
**Fulness Ojebiyi**

## Overview
Pizza Hub Admin is a modern, responsive admin dashboard built with Next.js 15. It provides a comprehensive interface for managing a pizza restaurant's operations, including order management, inventory tracking, and user administration. The application features a clean, intuitive UI with real-time updates and secure authentication.

## Tech Stack
- **Framework**: Next.js 15
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **UI Components**: Radix UI/Shadcn
- **Date Handling**: date-fns, dayjs
- **Icons**: Lucide React, React Icons
- **Table Management**: TanStack Table
- **Type Safety**: TypeScript
- **Testing**: Jest 29.7.0, React Testing Library


## Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Google Cloud Platform account (for OAuth)

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd pizza-hub-admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables Setup**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   # Google OAuth Configuration
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   NEXTAUTH_URL=http://localhost:3000 || https://your-production-domain.com
   NEXTAUTH_SECRET=your_nextauth_secret

   # Database Configuration (if applicable)
   DATABASE_URL=your_database_url
   ```

   ### Setting up Google OAuth Credentials:
   1. Navigate to [Google Cloud Console](https://console.cloud.google.com)
   2. Create a new project or select an existing one
   3. Enable the Google+ API
   4. Go to Credentials → Create Credentials → OAuth Client ID
   5. Set up the OAuth consent screen
   6. Create OAuth 2.0 Client ID
   7. Add authorized redirect URIs:
      - http://localhost:3000/api/auth/callback/google (for development)
      - https://your-production-domain.com/api/auth/callback/google (for production)
   8. Copy the Client ID and Client Secret to your `.env.local` file

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
pizza-hub-admin/
├── src/
│   ├── app/          # Next.js app directory and page components
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom React hooks for shared logic
│   ├── lib/          # Utility functions and configurations
│   ├── modules/      # Feature-specific modules
│   ├── providers/    # React context providers
│   ├── store/        # Zustand state management
├── public/           # Static assets
└── ...
```

## Key Features
- Secure authentication with Google OAuth
- Responsive dashboard layout
- Simulated real-time data updates
- Advanced table management
- Date and time handling
- Modern UI components
- Comprehensive test suite with Jest and React Testing Library

## Third-Party Libraries
- **@radix-ui/react-***: Accessible UI components
- **@tanstack/react-table**: Advanced table functionality
- **date-fns & dayjs**: Date manipulation and formatting
- **lucide-react & react-icons**: Icon libraries
- **zustand**: State management
- **class-variance-authority**: Component styling utilities
- **tailwind-merge**: Tailwind CSS class merging
- **tailwindcss-animate**: Animation utilities
- **react-day-picker**: Date picker component

## Development Notes
- The project uses Turbopack for faster development builds
- TypeScript is strictly enforced
- ESLint is configured for code quality
- Tailwind CSS is used with a custom configuration
- Jest and React Testing Library are set up for testing
- Modern ESLint configuration with @eslint/eslintrc

## Testing
The project includes a comprehensive test suite:
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Deployment
The application can be deployed on Vercel or any other platform that supports Next.js applications. Make sure to:
1. Set up all environment variables in your deployment platform
2. Configure the production OAuth redirect URIs
3. Update the `NEXTAUTH_URL` to your production domain

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
Copyright (c) 2025 Fulness Ojebiyi

All rights reserved.

