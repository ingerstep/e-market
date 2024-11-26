# E-market

E-market is an online platform for selling household appliances, designed with inspiration from Apple’s aesthetics.

## Descriptiom

The application consists of several screens:

- **Authorization**: .
- **Main Page**: .
- **Category Product Page**: .
- **Product page**: .
- **Cart**: .
- **Favorites**: .
- **Account**: .

### General Elements of the Application

- **-**: .
  - **-**: .
  
### Layout - [Figma](https://www.figma.com/design/aEL4s7qHVNbuQxZmHkvWni/E-Commerce-UI-Kit-(Community)?node-id=113-159&node-type=canvas&t=9S3m8orkpzwUUHEb-0)

## Set Up the Repository

```bash
$ git clone https://github.com/ingerstep/e-market
$ cd e-market
```

# Running with Docker

## Description

To simplify the deployment of the application, you can use Docker.

## Installation

Make sure you have Docker and Docker Compose installed.

```bash
$ docker --version
$ docker compose version | docker-compose --version
```
## Environment

```bash
#create .env in root of the project
POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_LOCAL_PORT=your_local_port | 5432
POSTGRES_USER=user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_db_name
SERVER_PORT=your_server_port | 3000
JWT_SECRET=your_secret
```
## Running the Application

### Navigate to the root directory of the project.

Start Docker Compose:

```bash
$ docker-compose up --build
```

### Stopping the Application

To stop the application, use:

```bash
$ docker-compose down
```

- **The frontend will be accessible at http://localhost:3000.**
- **The backend will be accessible at http://localhost:3000 or your specified SERVER_PORT.**
- **After each docker compose up --build, Postgres restarts the migrations and refills the tables with mock data.**
- **An isolated bridge network named emarket is created in the Docker settings.**

# Default start

After cloning the repository, you need to initialize the backend part of the application, followed by the frontend.

# Backend

## Description

The repository contains the server side of the application using NestJS and PostgreSQL.

Directory - /server.

## Install Dependencies and Initialize the Database

```bash
$ npm install
$ npm run migration:run
```

## Run the Application

```bash
# development
$ npm run start
```
## Build

```bash
$ npm run build
```

# Frontend

## Description

This repository contains the frontend part of the application, utilizing Next JS, Redux, and TypeScript.

Directory - /client.

## Install Dependencies

```bash
$ npm install
```

## Run the Application

```bash
# development
$ npm run dev
```

## Build

```bash
$ npm run build
```
