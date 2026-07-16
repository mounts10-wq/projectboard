# HobbyBoard

HobbyBoard is a full-stack productivity application built with React and Flask. The app helps users organize hobby projects by creating project boards and managing tasks for each board.

The goal of HobbyBoard is to give makers, builders, and hobbyists one place to track what they are working on, what still needs to be done, and the progress of each project.

## Project Description

Many hobbyists work on projects that involve multiple steps, materials, and goals. These projects can become difficult to manage when notes, tasks, and ideas are scattered across paper, phone notes, messages, or memory.

HobbyBoard solves this problem by allowing users to create organized boards for different hobbies or projects. Each board can contain related tasks, giving users a clear way to break larger projects into smaller, manageable steps.

Example use cases include:

- A car enthusiast tracking restoration tasks
- A woodworker organizing steps for a furniture build
- A crocheter planning progress on a blanket
- A gardener tracking seasonal projects
- A photographer planning creative shoots

## Core Features

- User signup
- User login
- User logout
- JWT-based authentication
- Users can create hobby boards
- Users can view only their own boards
- Users can delete their own boards
- Users can view details for a specific board
- Users can create tasks connected to a board
- Users can update task status
- Users can update task priority
- Users can delete tasks
- Backend ownership protection so users can only access and modify their own data
- Pagination on board and task GET routes
- Responsive React frontend
- Flask REST API backend
- SQL database using SQLAlchemy

## Technologies Used

### Frontend

- React
- JavaScript
- JSX
- React Router
- CSS
- Vite
- localStorage for storing JWT token

### Backend

- Python
- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- Flask-JWT-Extended
- Flask-CORS
- Werkzeug password hashing
- SQLite for development database

### Development Tools

- Git
- GitHub
- VS Code
- Postman / curl for API testing

## Data Models

### User

A user owns boards.

Fields include:

- `id`
- `username`
- `email`
- `password_hash`

Relationship:

- A user has many boards.

### Board

A board represents one hobby project.

Fields include:

- `id`
- `title`
- `hobby_type`
- `description`
- `created_at`
- `user_id`

Relationship:

- A board belongs to one user.
- A board has many tasks.

### Task

A task represents one step connected to a board.

Fields include:

- `id`
- `title`
- `description`
- `status`
- `priority`
- `created_at`
- `board_id`

Relationship:

- A task belongs to one board.

## API Routes

### Auth Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/signup` | Create a new user account |
| POST | `/api/login` | Log in an existing user |
| GET | `/api/me` | Get the currently authenticated user |
| POST | `/api/logout` | Logout helper route |

### Board Routes

| Method | Route | Description |
|---|---|---|
| GET | `/api/boards?page=1&per_page=10` | Get authenticated user's boards with pagination |
| POST | `/api/boards` | Create a new board |
| GET | `/api/boards/:id` | Get one board and its tasks |
| PATCH | `/api/boards/:id` | Update a board |
| DELETE | `/api/boards/:id` | Delete a board |

### Task Routes

| Method | Route | Description |
|---|---|---|
| GET | `/api/boards/:board_id/tasks?page=1&per_page=10` | Get tasks for a board with pagination |
| POST | `/api/boards/:board_id/tasks` | Create a task for a board |
| GET | `/api/tasks/:id` | Get one task |
| PATCH | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Frontend Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/signup` | Signup page |
| `/login` | Login page |
| `/dashboard` | User dashboard showing boards |
| `/boards/:boardId` | Board detail page showing tasks |

## Setup Instructions

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL_HERE
cd hobbyboard