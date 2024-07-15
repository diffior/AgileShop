# AgileShop
## Microservice-based E-commerce Backend
## Project Description

This project is a microservice-based e-commerce backend system implemented using TypeScript, Node.js, and Express. It aims to provide a scalable and modular architecture for handling various e-commerce operations.
Microservices

## The project consists of the following microservices:

    User Service: Manages user accounts and authentication
    Product Service: Handles product catalog and inventory
    Cart Service: Manages shopping carts
    Order Service: Processes and manages orders
    Payment Service: Handles payment processing (mock implementation)

## Technologies Used

    TypeScript
    Node.js
    Express.js
    Jest (for unit testing)
    MongoDB (as the database)
    Docker (for containerization)
    GitHub Actions (for CI/CD)

## Project Structure
```
e-commerce-microservice-backend/
├── user-service/
├── product-service/
├── cart-service/
├── order-service/
├── payment-service/
├── api-gateway/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── docker-compose.yml
├── README.md
└── .gitignore
```

## Setup and Installation

    Clone the repository
    Install dependencies for each microservice
    Set up MongoDB instances for each service
    Configure environment variables
    Run docker-compose up to start all services

## Testing

Run npm test in each microservice directory to execute unit tests.
## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow is defined in .github/workflows/ci-cd.yml.


## Contact

Christian.a.campbell1@outlook.com

This README provides a high-level overview of the project, its structure, and how to set it up. You can expand on each section with more detailed information as needed.
