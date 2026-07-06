# 🎓 Student Management System

A full-stack **Student Management System** built using **React**, **Node.js**, **Express.js**, and **PostgreSQL (Neon)**. The application provides complete CRUD functionality along with search, pagination, grade filtering, and student details in a clean and responsive interface.

---

# 🚀 Features

- ✅ Create Student
- ✅ View All Students
- ✅ View Student Details
- ✅ Update Student
- ✅ Delete Student
- ✅ Search Students
- ✅ Filter Students by Grade
- ✅ Pagination
- ✅ Form Validation using React Hook Form
- ✅ Toast Notifications
- ✅ Responsive UI
- ✅ PostgreSQL Transactions for Create and Update Operations

---

# 🛠 Tech Stack

## Frontend

- React
- React Router DOM
- Axios
- React Hook Form
- Tailwind CSS
- React Hot Toast
- Lucide React

## Backend

- Node.js
- Express.js
- PostgreSQL
- Neon Database

---

# 📂 Project Structure

```
student-management-system
│
├── frontend
│
├── backend
│   ├── sql
│   │   ├── schema.sql
│   │   └── seed.sql
│   └── src
│
├── postman
│   └── Student Management API.postman_collection.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/PrathmeshShahapure/student-management-system.git
```

---

## 2. Install Backend

```bash
cd backend
npm install
npm run dev
```

The backend will start on:

```
http://localhost:8000
```

---

## 3. Install Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
DATABASE_URL=your_neon_database_connection_string
PORT=8000
```

---

# 🗄 Database Setup

This project uses **PostgreSQL (Neon Database)**.

The SQL files required to create and populate the database are located inside:

```
backend/sql/
├── schema.sql
└── seed.sql
```

### Setup Steps

1. Create a PostgreSQL database in **Neon**.
2. Open the **SQL Editor** in the Neon dashboard.
3. Copy the contents of **schema.sql** and execute them.
4. After the schema is successfully created, copy the contents of **seed.sql** and execute them.
5. Copy your Neon connection string into the backend `.env` file.

```env
DATABASE_URL=your_neon_database_connection_string
```

### File Description

- **schema.sql** → Creates all required database tables.
- **seed.sql** → Inserts sample data into the database.

> **Important:** Execute **schema.sql** before **seed.sql**.

---

# 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get student by ID |
| POST | `/api/students` | Create a student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

---

# 📬 Postman Collection

The exported Postman collection is available inside:

```
postman/
```

Import the collection into Postman to test all available API endpoints.

---

# 🎥 Demo Video

A short demo video -https://drive.google.com/file/d/1APduUwbvXZYpSUKNUN_sfcaaNYYD_BjH/view

The demo covers:

- Create Student
- View Students
- Search
- Grade Filter
- Pagination
- Student Details
- Update Student
- Delete Student

---

# 👨‍💻 Author

**Prathmesh Shahapure**

GitHub: https://github.com/PrathmeshShahapure
