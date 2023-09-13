# Observer Dashboard

Observer Dashboard is a web application built with Django for the backend, React for the frontend, and orchestrated using Docker.

## Prerequisites

- Docker
- Docker Compose

## Project Structure

```bash
observer-dashboard/
│
├── backend/                # Django project directory
├── frontend/               # React project directory
├── nginx/                  # Nginx configuration directory
├── docker-compose.yml      # Docker Compose configuration file
├── .env.example            # Environment variables for Docker services
└── README.md
```

## Setup

### Clone the Repository:

```bash
git clone https://github.com/alex-budko/observer-dashboard.git
cd observer-dashboard
```

### Environment Variables:

Rename the provided `.env.example` to `.env` and update the variables as necessary. Ensure that you don't commit the `.env` file to version control.

```bash
cp .env.example .env
```

Edit the `.env` file with your preferred text editor. Update the `.env` file in the **backend/** directory too.

__Note__: Ensure that the MYSQL_HOST in the `.env` file in the project root directory matches the service name in the `docker-compose.yml` file.

Build and Start the Services:

```bash
docker compose build
docker compose up
```

This will build the Docker images and start the services defined in `docker-compose.yml`.

## Access the Application:

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000
- **Django Admin**: http://localhost:8000/admin (Use the superuser credentials defined in `.env`)

## Development

**Backend**: Any changes made to the Django application will be reflected immediately due to the volume binding in the `docker-compose.yml`.

**Frontend**: Similarly, changes made in the React app will be reflected in real-time, due to React's _hot-reloading_ feature.
