# Shopping Cart Database Design

This document outlines the database design for a simple shopping cart system with the following requirements:

1. A cart is uniquely identifiable so that it can be abandoned and retrieved by its ID.
2. A cart can contain many items.
3. An item should contain basic information that should minimally include a name and a price.
4. A cart should contain information about aggregate data such as total summaries (subtotal, discounts, taxes, total).

## Database Schema

The database will consist of three tables:

### Carts Table

- `id` (UUID, Primary Key): A unique identifier for each shopping cart.
- `createdAt`: (Date) Timestamp for when the cart was created.
- `abandonedAt`: (Date) Timestamp for when the cart was abandoned (if applicable).
- `quantity`: (Int) The quantity applied to the cart, calculated on-the-fly.
- `subtotal` (Decimal): The subtotal applied to the cart, calculated on-the-fly.
- `discounts` (Decimal): The total discounts applied to the cart, calculated on-the-fly.
- `taxes` (Decimal): The total taxes for the cart, calculated on-the-fly.
- `total` (Decimal): The total price of the cart, calculated on-the-fly.

### CartItems Table

- `id` (UUID, Primary Key): A unique identifier for each item in a cart.
- `itemId` (UUID, Foreign Key): References the `Items` table to specify the item being added to the cart.
- `quantity`: (Int) The quantity of this item in the cart.
- `discounts` (Decimal): The total discounts applied to item in the cart.
- `taxes` (Decimal): The total taxes to the item in the cart.
- `createdAt`: (Date) Timestamp for when the cart item was created.

### Items Table

- `id` (UUID, Primary Key): A unique identifier for each item.
- `name`: (Char) The name of the item.
- `price`: (Decimal) The price of the item.
- `quantity`: (Int) The quantity of the item.
- `createdAt`: (Date) Timestamp for when the item was created.

## Calculating Aggregate Information

Aggregate information such as total summaries (subtotal, discounts, taxes, total) should be calculated dynamically based on the data in the `CartItems` and `Items` tables when needed. This approach ensures that the data remains consistent and accurate and allows for flexibility in pricing and discount changes.

## Simplified spreadsheet representation

**Carts Table:**

| Field Name               | Data Type      |
| ------------------------ | -------------- |
| `id` (UUID, PK)          | UUID           |
| `createdAt`              | TIMESTAMP      |
| `abandonedAt`            | TIMESTAMP      |
| `quantity` (Calculated)  | INT            |
| `subtotal` (Calculated)  | DECIMAL(10, 2) |
| `discounts` (Calculated) | DECIMAL(10, 2) |
| `taxes` (Calculated)     | DECIMAL(10, 2) |
| `total` (Calculated)     | DECIMAL(10, 2) |

**CartItems Table:**

| Field Name          | Data Type      |
| ------------------- | -------------- |
| `id` (UUID, PK)     | UUID           |
| `cartId` (UUID, FK) | UUID           |
| `itemId` (UUID, FK) | UUID           |
| `quantity`          | INT            |
| `discounts`         | DECIMAL(10, 2) |
| `taxes`             | DECIMAL(10, 2) |
| `createdAt`         | TIMESTAMP      |

**Items Table:**

| Field Name      | Data Type      |
| --------------- | -------------- |
| `id` (UUID, PK) | UUID           |
| `name`          | VARCHAR(255)   |
| `price`         | DECIMAL(10, 2) |
| `quantity`      | INT            |
| `createdAt`     | TIMESTAMP      |
