# CRM Management Project

This project is a CRM (Client Relationship Management) system where users can manage clients, projects, interaction logs, and reminders.

---

## 🧑‍💻 Tech Stack

- Node JS
- Express JS
- Typescript
- PostgreSQL
- Prisma ORM

---

## ⚙️ Setup Instructions

### Backend

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install the required dependencies**

```bash
yarn install
```

3. **Create a `.env` file in the root directory and configure the following environment variables**

```bash

 PORT=<5000>
 NODE_ENV=<development>
 JWT_SECRET=<your_jwt_secret>
 JWT_EXPIRES_IN=<your_jwt_expire>
 DATABASE_URL=<your_database_url>

```

4. **Run database migrations (If Needed)**

```bash

npx prisma migrate dev --name init

```

5. **Start the Server**

```bash
 yarn dev
```

6. **The Live Site will be available at**

```bash
http://localhost:5000
```

## Entity Relationship Diagram (ERD)

- The ERD is available in the ./src/app/assets folder.

- It shows the relationships between User, Client, Project, InteractionLog, and Reminder models.

## Project Features

- User Management (Register, Login)

- Client Management (Add, Update, Delete Clients)

- Project Management (Assign Projects to Clients)

- Interaction Logs (Calls, Meetings, Emails)

- Reminders (for Clients and Projects)

# API Documentation

The API endpoints are documented in the attached Postman Collection.

You can import the Freelancer.postman_collection.json file into Postman to test the APIs easily.

👉 Location: /Freelancer.postman_collection.json
