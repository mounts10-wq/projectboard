# ProjectBoard

ProjectBoard is a full-stack productivity app built for the Flatiron School Project 2 capstone. It helps hobbyists organize project boards and break work into manageable tasks.

Target users include makers, builders, and creatives working on projects like car restoration, crochet, woodworking, gardening, photography, and cooking.

## Core Functionality

- User signup, login, and logout
- JWT authentication
- Ownership-based authorization for boards and tasks
- Full CRUD for boards
- Full CRUD for tasks
- Pagination support on list endpoints
- Protected frontend routes for dashboard and board details
- Responsive frontend with polished visual states

## Tech Stack

### Frontend

- React
- React Router
- Vite
- CSS

### Backend

- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- Flask-JWT-Extended
- Flask-CORS
- SQLite (default) or PostgreSQL via DATABASE_URL

## Data Model

- User has many Boards
- Board belongs to User and has many Tasks
- Task belongs to Board

## API Overview

All backend routes are served under /api.

### Utility

- GET /api/health

### Auth

- POST /api/signup
- POST /api/login
- GET /api/me
- POST /api/logout

### Boards

- GET /api/boards?page=1&per_page=10
- POST /api/boards
- GET /api/boards/:id
- PATCH /api/boards/:id
- DELETE /api/boards/:id

### Tasks

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

## Local Setup

### 1. Clone and enter project

```bash
git clone https://github.com/mounts10-wq/projectboard.git
cd projectboard
```

### 2. Backend setup (one-time)

```bash
cd server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Create a .env file in server/:

```env
SECRET_KEY=dev-secret-key
JWT_SECRET_KEY=dev-jwt-secret-key
DATABASE_URL=sqlite:///projectboard.db
```

Run migrations once:

```bash
flask --app run.py db upgrade
```

### 3. Frontend setup (one-time)

Open a new terminal:

```bash
cd projectboard/client
npm install
```

### 4. Run the app (each time)

Terminal 1 (backend):

```bash
cd projectboard/server
source venv/bin/activate
flask --app run.py db upgrade
python3 run.py
```

Terminal 2 (frontend):

```bash
cd projectboard/client
npm run dev
```

Backend runs at http://127.0.0.1:5000
Frontend runs at http://127.0.0.1:5173


### Troubleshooting

- If flask is not found, reactivate the backend virtual environment with source venv/bin/activate.
- If port 5000 is in use, stop the other process or run backend on a different port and update client/src/services/api.js.
- Stop both servers with Ctrl+C.

## Future Enhancements

- Materials list per board
- Notes and resource links
- Dashboard analytics
- Social sharing and collaboration
