# My Fullstack App

## Backend

This project includes a backend built with Node.js and TypeScript. The backend is structured to handle API requests and serve data to the frontend.

### Structure

- **src/app.ts**: Entry point for the backend application. It creates an instance of the Express application, sets up middleware, and loads routes.
- **src/controllers/index.ts**: Exports the `IndexController` class, which has a method `getIndex` to handle the main route of the application.
- **src/routes/index.ts**: Exports the `setRoutes` function, which sets up routes for the application using `IndexController`.
- **src/types/index.ts**: Exports interfaces for `Request` and `Response`, extending the interfaces from the Express library.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

### Testing

To run tests, use:
```
npm test
```

## Frontend

The frontend of this application is built with React and TypeScript. It communicates with the backend to display data and handle user interactions.

### Structure

- **src/App.tsx**: The main component of the frontend application, containing the logic and structure of the React app.
- **src/index.tsx**: Entry point for the frontend application, rendering the main `App` component to the DOM.
- **src/components/ExampleComponent.tsx**: Exports the `ExampleComponent`, which can be used within the application.
- **src/types/index.ts**: Exports interfaces that can be used in the frontend application.

### Installation

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the frontend application, run:
```
npm start
```

The application will be running on `http://localhost:3000` by default.

## License

This project is licensed under the MIT License. See the LICENSE file for details.