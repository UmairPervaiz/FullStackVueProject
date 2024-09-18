# Simple E-commerce Project

A simple e-commerce application where users can browse through a list of products, add or remove items from the cart, and proceed with authenticated actions using Firebase. This project is built with a modern stack using Vue.js for the frontend, Express.js for the backend, and MongoDB for data storage.

## Features

- Browse a variety of products
- Add products to the cart
- Remove products from the cart
- Firebase-based user authentication (sign up, login, and logout)
- Dynamic interaction between frontend and backend
- Store cart and user data in MongoDB

## Stack

### Frontend
- **Vue.js**: A progressive JavaScript framework for building user interfaces.

### Backend
- **Express.js**: A minimal and flexible Node.js web application framework to handle backend logic and APIs.

### Database
- **MongoDB**: A NoSQL database to store product and cart details.

### Authentication
- **Firebase Authentication**: Secure user authentication for handling login and registration.

## Installation

To get a local copy of the project, follow these steps:

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running locally or accessible via cloud
- Firebase project for authentication

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/UmairPervaiz/ecommerce-project.git
    cd ecommerce-project
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. Set up environment variables for Firebase and MongoDB in the `.env` file (for backend):
    ```bash
    PORT=8000
    DATABASE_URL=your_mongodb_uri
    UE_APP_FIREBASE_APIKEY=your_firebase_api_key
    VUE_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VUE_APP_FIREBASE_PROJECT_ID=your_firebase_projects_id
    VUE_APP_FIREBASE_STORGAE_BUCKET=your_firebase_storage_bucket
    VUE_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VUE_APP_FIREBASE_APP_ID=your_firebase_app_id
    VUE_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurment_id
    ```

5. Start the backend server:
    ```bash
    cd backend
    node ./build/server.js
    ```

6. Open the app in your browser at:
    ```bash
    http://localhost:8000
    ```

