# Inventory Management System - Backend

## Overview

This backend system is designed to help small businesses manage their inventory, track stock levels, and generate detailed reports. The system allows businesses to manage products, stores, and users efficiently.

## Features

- User management.
- Multiple stores can be associated with a single user.
- Real-time stock level tracking.
- Ability to track and update inventory.
- Reporting tools stock insights.
- Low-stock alerts with reorder suggestions.

## Tech Stack

- **Node.js** - JavaScript runtime for the backend.
- **Prisma** - ORM to interact with the database.
- **PostgreSQL / MySQL** - Relational database.
- **Express.js** - Web framework for Node.js.
- **bcryptjs** or **argon2** - For password hashing and security.

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** (Node Package Manager)
- **PostgreSQL** or **MySQL** database installed locally or remotely.
- **Prisma CLI** (For handling migrations and schema management).

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/PathanJunaid/Inventory_Management.git
cd Inventory_Management

## 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
## 3. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
cd app
prisma generate
```
## env

PORT = 5000 
JWT_ACCESS_SECRET = "TOP_SECRET" 
JWT_REFRESH_TOKEN_SECRET = "REFRESH TOKEN"
JWT_SECRET = 'TOP_SECRET'

env file for prisma at app

DATABASE_URL='postgresql://postgres:password@localhost:5432/postgres'



