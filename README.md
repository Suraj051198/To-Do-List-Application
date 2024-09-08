o-Do List Application
Description

A simple To-Do List application built using Angular for the frontend and Node.js with Express.js for the backend. This application allows users to add, edit, delete, and view tasks. Data is managed using a JSON file in the backend for simplicity.
Project Structure

    Frontend (Angular)
        src/app/MyComponents/todos/: Component for displaying the list of todos.
        src/app/MyComponents/todo-item/: Component for displaying individual todo items.
        src/app/MyComponents/add-todo/: Component for adding new todos.
        src/app/MyComponents/about/: Component for the About page.
        src/app/todo.model.ts: Defines the Todo model.

    Backend (Node.js with Express)
        Handles API requests and manages data storage using a JSON file.

Setup
Frontend

Clone the repository

git clone https://github.com/Suraj051198/To-Do-List-Application.git

Navigate to the frontend directory

cd To-Do-List-Application/frontend

Install dependencies

npm install

Run the Node.js server: Set the environment variable for legacy OpenSSL provider:

$env:NODE_OPTIONS="--openssl-legacy-provider" # On Windows PowerShell
export NODE_OPTIONS="--openssl-legacy-provider" # On Unix-based systems

Run the Angular application:

ng serve --o

Backend
Navigate to the backend directory

cd To-Do-List-Application/backend

Install dependencies

npm install

Run the Node.js server

npm start

The server will be available at http://localhost:3000.
Data Management

The application uses a JSON file for managing data during development. Ensure that the JSON file is properly configured and available in the backend directory.
Screenshots

Here are some screenshots of the application: Home Page

image

ALL Todo List

image

Delete, Save, Edit, Cancel

image
