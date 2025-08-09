## Description
This is a movie browsing application built with Next.js. Users can browse movies, view details, and create a wishlist. The application uses a modern tech stack including React, Tailwind CSS, and Next.js for server-side rendering and routing.

## live link: https://movienet2.netlify.app

## Folder Structure

### `/app`

This directory contains the core application logic and routing.

-   **`/app/layout.jsx`**: The main layout of the application.
-   **`/app/page.jsx`**: The home page of the application.
-   **`/app/account`**: Contains pages related to user account management (signin, signup, logout).
-   **`/app/movies`**: Contains pages for browsing movies and viewing movie details.
-   **`/app/wishList`**: Contains the page for the user's wishlist.

### `/components`

This directory contains reusable React components.

-   **`/components/FetchData.jsx`**: A component for fetching data.
-   **`/components/authentication/authenticationHOC.jsx`**: A higher-order component for handling authentication.
-   **`/components/shared`**: Contains shared components like the header, footer, carousel, modal, and pagination.

### `/style`

This directory contains global styles for the application.

-   **`/style/globals.css`**: The main stylesheet for the application.
