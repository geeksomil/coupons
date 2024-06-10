# Coupon Server

Welcome to the Coupon Server README! This repository contains the backend code for managing coupons, users, and generating users. 

## Setup

To get started with the Coupon Server, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in the root directory with the following attributes:
URI=<your_mongo_db_uri>
PORT=<desired_port_number>

csharp
Copy code
Replace `<your_mongo_db_uri>` with your MongoDB connection string and `<desired_port_number>` with the port number you want the server to run on.

## Running the Server

After setting up, you can run the server using the command:

node index.js

shell
Copy code

## Features

### Apply Coupon
Allows users to apply a coupon code to their purchase, if valid.

### Add User
Enables the addition of new users to the system.

### Generate User
Generates new user data for testing or other purposes.

## Technology Stack

- **MongoDB**: Used as the database to store coupon and user information.
- **Node.js**: Utilized for the backend server development.

## Contributing

Contributions to the Coupon Server are welcome! If you find any bugs, issues, or have suggestions for improvements, feel free to open an issue or submit a pull request.
