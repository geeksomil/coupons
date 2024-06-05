# Coupon Management System

A backend system for managing coupons, built with Node.js and MongoDB.

## Project Structure

coupon/
├── .env
├── controllers/
│ ├── addUser.js
│ ├── applyCoupon.js
│ └── generateCoupon.js
├── db/
│ ├── connection.js
│ ├── userModel.js
│ └── couponModel.js
├── index.js
├── package.json
├── package-lock.json

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

    ```sh
    git clone <REMOTE_URL>
    cd coupon
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the necessary environment variables. For example:

    ```
    MONGODB_URI=<your-mongodb-uri>
    PORT=<your-server-port>
    ```

4. **Run the application:**

    ```sh
    npm start
    ```

## Project Structure Details

### index.js

This is the main server file that starts the application and sets up the routes.

### Controllers

- **addUser.js**: Handles user registration by adding new users to the database.
- **applyCoupon.js**: Handles the application of coupons by checking the coupon's validity and applying the discount.
- **generateCoupon.js**: Handles the generation of new coupons with specified properties.

### Database (db/)

- **connection.js**: Establishes a connection to the MongoDB database.
- **userModel.js**: Defines the schema for the User model, with fields `username` and `password`.
- **couponModel.js**: Defines the schema for the Coupon model, with fields `name`, `limitExist` (boolean), `limit`, `discount`, and `discountType` (discrete or percentage).

### Models

#### User Schema

- **username**: String
- **password**: String
- **coupons**: Array

#### Coupon Schema

- **name**: String
- **limitExist**: Boolean
- **limit**: Number
- **discount**: Number
- **discountType**: String (either 'discrete' or 'percentage')

## Tech Stack

- **Backend**: Node.js
- **Database**: MongoDB

## Dependencies

The project relies on the following npm packages:

- **dotenv**: ^16.4.5
- **express**: ^4.19.2
- **mongoose**: ^8.4.0

## API Endpoints

### Add User

- **Endpoint**: `/addUser`
- **Method**: POST
- **Description**: Registers a new user.
- **Parameters**:
    - `username` (String): The username of the new user.
    - `password` (String): The password for the new user.
- **Response**:
    - `success` (Boolean): Indicates if the operation was successful.
    - `msg` (String): A message detailing the result of the operation.

### Generate Coupon

- **Endpoint**: `/generateCoupon`
- **Method**: POST
- **Description**: Creates a new coupon.
- **Parameters**:
    - `name` (String): The name of the coupon.
    - `limitExist` (Boolean): Indicates if the coupon has a usage limit.
    - `limit` (Number): The usage limit of the coupon.
    - `discount` (Number): The amount of discount.
    - `discountType` (String): The type of discount, either 'discrete' or 'percentage'.
- **Response**:
    - `success` (Boolean): Indicates if the operation was successful.
    - `msg` (String): A message detailing the result of the operation.

### Apply Coupon

- **Endpoint**: `/applyCoupon`
- **Method**: POST
- **Description**: Applies a coupon to a user's purchase.
- **Parameters**:
    - `username` (String): The username of the user.
    - `coupon` (String): The name of the coupon.
    - `price` (Number): The original price of the purchase.
- **Response**:
    - `success` (Boolean): Indicates if the operation was successful.
    - `msg` (String): A message detailing the result of the operation.
    - `price` (Number, optional): The new price after applying the coupon, included only if `success` is `true`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
