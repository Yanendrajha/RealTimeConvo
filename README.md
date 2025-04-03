# RealTimeConvo

A real-time conversation app.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

RealTimeConvo is a real-time chat application that allows users to communicate with each other instantly. The app leverages WebSocket technology to ensure messages are delivered in real time.

## Features

- Live chat functionality
- User authentication and authorization
- Responsive design
- Support for multiple chat rooms
- Message history
- Real-time notifications

## Technologies Used

- **Frontend:**
  - React
  - JavaScript
  - HTML
  - CSS

- **Backend:**
  - Spring Boot
  - Java
  - Maven

## Installation

Follow these steps to set up the project locally:

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd RealTimeConvo/frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend server:**

    ```bash
    npm start
    ```

### Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd RealTimeConvo/backend
    ```

2. **Build the project using Maven:**

    ```bash
    mvn clean install
    ```

3. **Start the backend server:**

    ```bash
    mvn spring-boot:run
    ```

## Usage

Once the servers are up and running, open your web browser and navigate to:

```
http://localhost:3000

```

You should see the RealTimeConvo application interface. Sign up or log in to start chatting!

---
