<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# RajaOngkir App

This is a Next.js application that provides a user-friendly interface for fetching and displaying location data from the RajaOngkir API. The app includes authentication, a search feature, pagination, and reusable components for an enhanced user experience.

## Features

- **Authentication**: Users must log in to access the application.
- **Location Management**: Fetch and display a list of provinces from the RajaOngkir API.
- **Search Functionality**: Search for specific provinces by name.
- **Pagination**: Navigate through multiple pages of province data.
- **Reusable Components**: Includes a search bar, spinner/loader, and location cards.
- **Responsive Design**: Ensures a seamless experience across devices.

## Technologies Used

- **Frontend**: Next.js 15 (with App Router)
- **Styling**: Tailwind CSS
- **Backend**: RajaOngkir API
- **State Management**: React useState and useEffect
- **HTTP Client**: Axios

## Installation

Follow the steps below to set up and run the application locally:

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/heyghani/rajaongkir-app.git
   cd rajaongkir-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Environment Variables**:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_RAJAONGKIR_API_KEY=4887b8ccc56873e73986a867b9325476
   NEXT_PUBLIC_JWT_SECRET=ghanidev
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Log in with valid credentials.
3. Navigate to the locations page to view provinces.
4. Use the search bar to find specific provinces.
5. Use the pagination controls to browse through the list.

>>>>>>> d17a4af1a022cb7186e89b9bbe4be9626b599a00
