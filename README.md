# ProjectBoard

ProjectBoard is a full-stack app I built to help hobbyists organize projects into boards and tasks. I created it as a capstone-style portfolio project to practice authentication, protected data access, and full CRUD across a React + Flask stack.

## Why I Built This

When a hobby project gets bigger, it is easy to lose track of what to do next. I wanted a simple tool where users can create boards, break work into tasks, and see progress in one place.

## Features

- User signup, login, and logout
- JWT authentication
- Ownership-based access control for boards and tasks
- Full CRUD for boards
- Full CRUD for tasks
- Pagination for board and task lists
- Dashboard stats (board count, task totals, completion rate, status and priority breakdown)
- Protected frontend routes for private pages

## Tech Stack

Frontend:
- React
- React Router
- Vite
- CSS

Backend:
- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- Flask-JWT-Extended
- Flask-CORS
- SQLite by default (or PostgreSQL via DATABASE_URL)

## Data Model

- User has many Boards
- Board belongs to User
- Board has many Tasks
- Task belongs to Board

## API Summary

All backend endpoints are under /api.

Utility:
- GET /api/health
- GET /api/dashboard/stats (protected)

Auth:
- POST /api/signup
- POST /api/login
- GET /api/me
- POST /api/logout

Boards:
- GET /api/boards?page=1&per_page=10
- POST /api/boards
- GET /api/boards/:id
- PATCH /api/boards/:id
- DELETE /api/boards/:id

Tasks:
- GET /api/boards/:board_id/tasks?page=1&per_page=10
- POST /api/boards/:board_id/tasks
- GET /api/tasks/:id
- PATCH /api/tasks/:id
- DELETE /api/tasks/:id

## Frontend Routes

- /
- /signup
- /login
- /dashboard (protected)
- /boards/:boardId (protected)

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 20+
- npm 10+

### 1. Clone the Repository

```bash
git clone https://github.com/mounts10-wq/projectboard.git
cd projectboard
```

### 2. Backend Setup (one-time)

```bash
cd server
python3 -m venv venv
source venv/bin/activate
python3 -m pip install -r requirements.txt
```

Create a .env file in server/:

```env
SECRET_KEY=dev-secret-key
JWT_SECRET_KEY=dev-jwt-secret-key
DATABASE_URL=sqlite:///projectboard.db
```

Run migrations:

```bash
python3 -m flask --app run.py db upgrade
```

### 3. Frontend Setup (one-time)

Open a second terminal:

```bash
cd projectboard/client
npm install
```

### 4. Start the App

Terminal 1 (backend):

```bash
cd projectboard/server
source venv/bin/activate
python3 -m flask --app run.py db upgrade
python3 run.py
```

Terminal 2 (frontend):

```bash
cd projectboard/client
npm run dev
```

App URLs:
- Backend: http://127.0.0.1:5000
- Frontend: http://127.0.0.1:5173

## Troubleshooting

- If flask is not found, reactivate your venv with source venv/bin/activate.
- If npm run dev fails, run npm install inside client/ first.
- If port 5000 is already in use, stop the process using it or run Flask on a different port and update client/src/services/api.js.
- Use Ctrl+C in each terminal to stop both servers.

## Future Improvements

- Materials list on each board
- Notes and resource links
- More dashboard analytics
- Team collaboration and sharing

## Author

James Mounts

## License

This project is shared for portfolio and educational use.
