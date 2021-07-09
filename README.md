# Postgres, Express sample app

## Installation

```
npm install
```

Set environment variables following `.env.example`.

## HTTP server

Start server:

```
npm start
```

Start server in development mode:

```
npm run start:watch
```

## Database migrations

Run migrations:

```
npm run db:migrate
```

Add new migration:

Create file in `data-access/database-migrations` starting with ID.
