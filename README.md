# HobbyBoard

HobbyBoard is a full-stack productivity app built for the Flatiron School Project 2 capstone. It helps hobbyists organize project boards and break work into manageable tasks.

Target users include makers, builders, and creatives working on projects like car restoration, crochet, woodworking, gardening, photography, and cooking.

## Project Goals

- Build a full React + Flask CRUD application
- Implement authentication with protected, user-owned data
- Model related resources (boards and tasks)
- Deliver a polished and presentation-ready user experience

## Core Functionality

- User signup, login, and logout
- JWT authentication
- Ownership-based authorization for boards and tasks
- Full CRUD for boards
- Full CRUD for tasks
- Pagination support on list endpoints
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
- /dashboard
- /boards/:boardId

## Local Setup

### 1. Clone and enter project

```bash
git clone <your-repo-url>
cd hobbyboard
```

### 2. Backend setup

```bash
cd server
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Create a .env file in server/:

```env
SECRET_KEY=dev-secret-key
JWT_SECRET_KEY=dev-jwt-secret-key
DATABASE_URL=sqlite:///hobbyboard.db
```

Run migrations and start API:

```bash
flask --app run.py db upgrade
python run.py
```

Backend runs at http://127.0.0.1:5000

### 3. Frontend setup

```bash
cd ../client
npm install
npm run dev
```

Frontend runs at http://127.0.0.1:5173

Note: client/src/services/api.js currently points to http://127.0.0.1:5000/api.

## Submission Checklist

- Public GitHub repository with complete code
- Clean commit history showing progress
- Proper .gitignore configuration
- README with setup + feature documentation
- Optional deployed links (Render/Netlify/etc.)

## Future Enhancements

- Materials list per board
- Notes and resource links
- Dashboard analytics
- Social sharing and collaboration
