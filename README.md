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

