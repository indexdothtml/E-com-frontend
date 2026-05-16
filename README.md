# E-commerce Frontend

This is a modern e-commerce frontend application built using React, TypeScript, and Vite. It provides a seamless shopping experience with features like product browsing, detailed product views, and a shopping cart.

## Project Structure

The project is organized as follows:

```
public/
  favicon.svg       # Favicon for the application
  icons.svg         # SVG icons used in the app
src/
  App.tsx           # Main application component
  index.css         # Global styles
  main.tsx          # Application entry point
  routes.tsx        # Application routes
  assets/           # Static assets like images
  components/       # Reusable UI components
    Button.tsx
    CartItemCard.tsx
    ItemCard.tsx
    ItemsGrid.tsx
  contexts/         # Context API files
    cart-context.ts
  hook/             # Custom hooks
    useCart.tsx
  pages/            # Application pages
    CartPage.tsx
    HomePage.tsx
    ProductDetailsPage.tsx
  providers/        # Context providers
    CartContextProvider.tsx
  services/         # API service files
    products.ts
  types/            # TypeScript type definitions
    products.ts
```

## Setup and Run Instructions

Follow these steps to set up and run the application:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/indexdothtml/E-com-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd E-com-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist/` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

The application will be available at `http://localhost:4173`.

## License

This project is licensed under the MIT License.
