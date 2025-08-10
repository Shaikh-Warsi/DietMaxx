# DietMaxx

DietMaxx is a web application designed to provide personalized dietary recommendations based on user input regarding their basic information, workout habits, daily meals, food habits, other habits, and medical history.

## Features

- **Personalized Recommendations**: Generates diet recommendations tailored to individual user profiles.
- **Multi-step Form**: Guides users through a series of steps to collect comprehensive health and lifestyle data.
- **Interactive UI**: Provides an intuitive and responsive user interface for data entry.
- **Loading Indicator**: Displays a loading bar when generating recommendations for better user experience.

## Technologies Used

- **Next.js**: React framework for building server-side rendered and static web applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Shadcn/ui**: Reusable components built with Radix UI and Tailwind CSS.
- **TypeScript**: Strongly typed superset of JavaScript.
- **Gemini API**: Used for generating personalized recommendations.

## Setup and Installation

To set up and run the project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd dietmaxx
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

3.  **Set up environment variables**:
    Create a `.env.local` file in the root directory and add your Gemini API key:
    ```
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```

    The application will be accessible at `http://localhost:3003`.

## Project Structure

```
.env.local
.gitignore
app/
├── api/             # API routes for Gemini integration
├── globals.css      # Global styles
├── layout.tsx       # Root layout
├── page.tsx         # Main application page
└── ...              # Other pages (gut-health, home, neurochemical-optimization, etc.)
components/
├── pages/           # Individual step components for the form
│   ├── Chatbot.tsx
│   ├── basic-info-step.tsx
│   ├── daily-meals-step.tsx
│   ├── food-habits-step.tsx
│   ├── home-page.tsx
│   ├── medical-history-step.tsx
│   ├── other-habits-step.tsx
│   ├── results-page.tsx
│   ├── signup-page.tsx
│   └── workout-step.tsx
└── ui/              # Shadcn/ui components
hooks/
├── use-form.ts      # Custom hook for form management
└── ...
lib/
├── api.ts           # API client for recommendations
├── utils.ts
└── validation.ts    # Form validation logic
public/              # Static assets
types/               # TypeScript type definitions
├── chat.ts
└── form.ts
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.
