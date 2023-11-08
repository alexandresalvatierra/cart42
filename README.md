<h1 align="center">Welcome to Shopping Cart42 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple Cart shopping, using Node with Typescript, MongoDB and Docker. Published on AWS EC2 using Github Actions for CI/CD. I hope you have as much fun as I was doing in this journey.

## Docs

If it doesn't bother you, see some documents below:

- [System design](docs/0-design-system.md)
- [Database design](docs/1-database-design.md)

## Manual Installation - Local Depelopment

Clone the repo:

```sh
git clone --depth 1 https://github.com/alexandresalvatierra/cart42.git
cd book42
```

## How to Run

Please, rename the .env.development.example to .env.development and setting the environment vars if you want. And them run on terminal.

```sh
docker compose up
```

Wait a little bit for all application set up. After all process completed, go to <strong>HTTP</strong> directory, see those <strong>\*.http</strong> files that you can test all the requests using [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code plugin.

## Endpoints

- Mongo Express: localhost:8081
- Node App: http://localhost:4242
  - **Item** [http file](http/item.http)
    - Add item: POST http://localhost:4242/items
    - Find all items: GET http://localhost:4242/items
    - Find one item: GET http://localhost:4242/items/(_id_)
    - Update one item: PUT http://localhost:4242/items/(_id_)
    - Delete one item: DELETE http://localhost:4242/items/(_id_)
  - **Cart** [http file](http/cart.http)
    - Add cart: POST http://localhost:4242/carts
    - Find all items: GET http://localhost:4242/carts
    - Find one item: GET http://localhost:4242/carts/(_id_)
    - Abandon (soft delete) one item: DELETE http://localhost:4242/carts/(_id_)

### What could come next

There are few important activities to improve this project like:

- [ ] Unit Tests (most important)
- [ ] Improve the controller layers
- [ ] Include validations layers
- [ ] Manage items inventory table
- [ ] Include another endpoints to cart like:
  - Add Item to Cart (POST /carts/{cart_id}/items)
  - Remove Item from Cart (DELETE /carts/{cart_id}/items/{item_id})
  - Update Cart Item Quantity (PUT /carts/{cart_id}/items/{item_id})
  - Checkout Cart (POST /carts/{cart_id}/checkout)
- [ ] Event driven between modules. Ex: When creating the shopping cart, it is necessary to send the price of the items. To automatically retrieve the price when creating the cart, to avoid sending the price, it would be necessary to create the service layer to send events between the item and cart modules, to avoid coupling between the modules
- [ ] Consider using Serverless, especially Lambda

## Author

👤 **Alexandre**

- Github: [@alexandresalvatierra](https://github.com/alexandresalvatierra)
- LinkedIn: [@https:\/\/br.linkedin.com\/in\/alexandre-salvatierra](https://linkedin.com/in/https://br.linkedin.com/in/alexandre-salvatierra)

## Show your support

Give a ⭐️ if this project helped you!
