---

# Workshop Demo

This is a simple React and Express-based application designed as a workshop demo. The application features a basic API using Express, which serves an array of names to a React frontend. The frontend displays these names with some interactive styling effects.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Features](#features)
- [License](#license)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/workshop-demo.git
   cd workshop-demo
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

## Running the Application

### Development Mode

1. **Start the Express Server:**

   ```bash
   npm run dev
   ```

   This will start the Express server using `nodemon`, which automatically restarts the server on code changes.

2. **Start the React Application:**

   Open a new terminal and run:

   ```bash
   npm start
   ```

   This will start the React development server.

3. **Access the Application:**

   Open your browser and navigate to `http://localhost:3000` to view the React app.

## Project Structure

```bash
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── server.js
│   └── ...
├── package.json
└── README.md
```

- **`public/`**: Contains the public assets of the React app.
- **`src/`**: Contains the source code for both the React frontend and the Express backend.
  - **`App.js`**: The main React component that fetches and displays the names.
  - **`App.css`**: Contains the styling for the React app.
  - **`index.js`**: The entry point for the React application.
  - **`server.js`**: The Express server file that handles the API requests.
- **`package.json`**: Contains the project metadata and dependencies.
- **`README.md`**: Provides an overview and setup instructions for the project.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Express**: A minimal and flexible Node.js web application framework.
- **Nodemon**: A utility that monitors for changes in your code and automatically restarts your server.
- **Cors**: A package to provide a Connect/Express middleware that can be used to enable CORS with various options.

## Features

- **Express API**: Serves a list of names via an endpoint.
- **React Frontend**: Fetches and displays the list of names with hover effects.
- **Dynamic Styling**: Interactive UI with CSS transitions and transformations.

## License

This project is licensed under the MIT License.

---
