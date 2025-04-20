# TaskFlow

TaskFlow is a full-stack task management application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete tasks with real-time updates and persistence.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo
Live demo: [https://task-flow-fullstack-mern-aguru-sireeshas-projects.vercel.app/](https://task-flow-fullstack-mern-aguru-sireeshas-projects.vercel.app/)

## Features
- Create, read, update, and delete tasks
- Toggle task completion status
- Persistent storage with MongoDB Atlas
- Responsive UI built with React and CSS Flex
- Loader indicator during data fetch
- Deployed backend on Render and frontend on Vercel

## Tech Stack
- **Frontend:** React.js, Bootstrap 4
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas via Mongoose
- **Deployment:** Render (backend), Vercel (frontend)

## Prerequisites
- Node.js (v14+)
- npm 
- MongoDB Atlas account (or local MongoDB)

## Installation

### Backend
1. Clone the repo and navigate to the backend folder:
   ```bash
   git clone https://github.com/sireesha-siri/TaskFlow.git
   cd TaskFlow/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend
1. Open a new terminal, navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables
Rename `.env.example` to `.env` and set:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
For frontend, the default `src/services/api.js` points to `http://localhost:5000/api/tasks`. Update if your backend URL differs.

## Running the App
- Backend: `npm start` (listens on port 5000)
- Frontend: `npm start` (runs on port 3000)

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## API Endpoints
| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| GET    | `/api/tasks`       | Fetch all tasks           |
| POST   | `/api/tasks`       | Create a new task         |
| PUT    | `/api/tasks/:id`   | Update task status or data |
| DELETE | `/api/tasks/:id`   | Delete a task             |

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Contact
Sireesha Aguru — [LinkedIn](https://www.linkedin.com/in/aguru-sireesha) | [GitHub](https://github.com/sireesha-siri)

