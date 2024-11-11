[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://stand-with-ukraine.pp.ua)
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/Turskyi/nextjs-investtrack">

# InvestTrack - Web

This repository contains the Next.js implementation of **InvestTrack**, an investment tracking platform. The app serves as both a web interface for users
and a backend API for a mobile application. InvestTrack helps users manage and
track their investments across various stocks and provides essential metrics
such as gains, losses, and current market prices.

## Features

- **Investment Dashboard**: View all investments with details such as ticker,
  type, stock exchange, currency, and current value.
- **Investment CRUD Operations**: Create, update, and delete investments.
- **Authentication**: User authentication using secure sessions.
- **API for Mobile App**: A RESTful API built using Prisma and exposed via
  Next.js API routes for the mobile app to consume.
- **Real-time Data**: Fetch live stock data for current market prices.
- **Responsive Design**: The web interface is fully responsive, ensuring a
  seamless experience on both desktop and mobile devices.

## Tech Stack

- **Frontend**: Next.js (React) with Tailwind CSS for styling.
- **Backend**: Next.js API routes.
- **Database**: PostgreSQL (managed via Prisma ORM).
- **Authentication**: NextAuth.js for secure login sessions.
- **Stock Data**: Integrated with a stock market API.
- **Mobile Integration**: Provides a RESTful API to support mobile app
  functionality.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **Prisma CLI**: Used to manage migrations and database schema.

## Getting Started

1. **Clone the Repository**:

```bash
git clone https://github.com/Turskyi/nextjs-investtrack.git
cd nextjs-investtrack
```

2. **Install Dependencies**:

Install the required dependencies by running:

```bash
npm install
```

3. Set Up the Database:

You need to set up a PostgreSQL database for the app. Create an `.env` file in
the root directory and add your database URL:

```bash
POSTGRES_URL="postgresql://user:password@localhost:5432/investtrack"
```

4. **Run Database Migrations**:

Apply the Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev
```

5. Seed the Database:

To seed the database with placeholder investment data, run:

```bash
npm run seed
```

6. Start the Development Server:

You can now run the Next.js app in development mode:

```bash
npm run dev
```

The app will be available at http://localhost:3000.

## API Endpoints

The following API routes are exposed for the mobile app:

- **GET /api/investments**: Retrieve a list of all investments.
- **POST /api/investments**: Create a new investment.
- **PUT /api/investments/[id]**: Update an existing investment by ID.
- **DELETE /api/investments/[id]**: Delete an investment by ID.

## Example API Request

To fetch all investments from the Flutter app:

```bash
GET /api/investments
```

## Authentication for API Endpoints

- Authentication is required for accessing API routes.
- Use JWT tokens for authentication in the Flutter app.
- Ensure the token is sent in the Authorization header for secure access.

## Mobile App Integration

The Mobile app consumes the API provided by this Next.js app. Ensure that the
Mobile app is configured to make requests to the correct API endpoint (http://localhost:3000 during development or the production URL).

## Project Structure

```
src/
├── components
│   ├── Badge.tsx
│   ├── InvestmentListItem.tsx
│   └── ui/
├── app
│   ├── fonts/
│   └── layout.tsx
├── assets
│   ├── company-logo-placeholder.jpeg
│   └── logo.png
├── .gitignore
├── next.config.mjs
├── package.json
├── constants.ts # Application-wide constants
└── README.md
```

## Contributing

Feel free to submit issues or pull requests if you'd like to contribute to the project.

1. Fork the repository
2. Create a new feature branch (git checkout -b feature/your-feature-name)
3. Commit your changes (git commit -am 'Add a new feature')
4. Push the branch (git push origin feature/your-feature-name)
5. Create a Pull Request

## Contact:

For any questions or feedback, please feel free to create an issue in this
repository.

## Screenshot:

<!--suppress CheckImageSize -->
<img src="screenshots/Screenshot.png" width="700"  alt="screenshot">

## Credits

This project is based on the
[Learn Next.js 14 Server Actions With This One Project (UseFormStatus,
UseFormState, Error Handling)](https://youtu.be/XD5FpbVpWzk?si=V2BUShLowZq3xKAC)
by [Coding in Flow](https://github.com/codinginflow) YouTube channel.
All credit goes to the original author
[Florian Walther](https://github.com/florianwalther-private).
I only followed along and made some minor changes.
