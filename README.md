# To-Do List Application

## Description

A simple To-Do List application built using Angular for the frontend and Node.js with Express.js for the backend. This application allows users to add, edit, delete, and view tasks. Data is managed using a JSON file in the backend for simplicity.

## Project Structure

- **Frontend (Angular)**
  - `src/app/MyComponents/todos/`: Component for displaying the list of todos.
  - `src/app/MyComponents/todo-item/`: Component for displaying individual todo items.
  - `src/app/MyComponents/add-todo/`: Component for adding new todos.
  - `src/app/MyComponents/about/`: Component for the About page.
  - `src/app/todo.model.ts`: Defines the Todo model.

- **Backend (Node.js with Express)**
  - Handles API requests and manages data storage using a JSON file.

## Setup

### Frontend

1. **Clone the repository**

   ```bash
   git clone https://github.com/Suraj051198/To-Do-List-Application.git

2. **Navigate to the frontend directory**
   ```bash
   cd To-Do-List-Application/frontend


3. **Install dependencies**
   ```bash
   npm install
   
4. **Run the Node.js server: Set the environment variable for legacy OpenSSL provider:**
   ```bash
   $env:NODE_OPTIONS="--openssl-legacy-provider" # On Windows PowerShell
   export NODE_OPTIONS="--openssl-legacy-provider" # On Unix-based systems
   
5. **Run the Angular application:**
   ```bash
   ng serve --o
   

## Backend

   1. **Navigate to the backend directory**
      ```bash
      cd To-Do-List-Application/backend
      
   2. **Install dependencies**
      ```bash
      npm install

   3. **Run the Node.js server**
      ```bash
      npm start

 *The server will be available at http://localhost:3000.*


## Data Management
The application uses a JSON file for managing data during development. 
Ensure that the JSON file is properly configured and available in the backend directory.

## Screenshots
Here are some screenshots of the application:
**Home Page**
##
![image](https://github.com/user-attachments/assets/6f4f4c20-a676-482c-b758-f30e96bd5ad3)

**ALL Todo List**
##
![image](https://github.com/user-attachments/assets/74fed2c9-e7da-4682-a740-9f1d896cc24a)

**Delete, Save, Edit, Cancel**
##
![image](https://github.com/user-attachments/assets/a3e8dc81-5858-41e1-b81c-d88407a02512)

   
