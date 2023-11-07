<h1 align="center">Welcome to Shopping Cart42 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple Cart shopping, using Node with Typescript, MongoDB and Docker. I hope you have as much fun as I was doing this job.

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
    - Abandon (soft dele) one item: DELETE http://localhost:4242/carts/(_id_)

### What could come next

There are few important activities to improve this project like: Unit Tests (most important), improve the controller layers, include validations layers, manage the items quantity table, and include another endpoints to cart like: Add Item to Cart (POST /carts/{cart_id}/items), Remove Item from Cart (DELETE /carts/{cart_id}/items/{item_id}), Update Cart Item Quantity (PUT /carts/{cart_id}/items/{item_id}), Checkout Cart (POST /carts/{cart_id}/checkout)

## Author

👤 **Alexandre**

- Github: [@alexandresalvatierra](https://github.com/alexandresalvatierra)
- LinkedIn: [@https:\/\/br.linkedin.com\/in\/alexandre-salvatierra](https://linkedin.com/in/https://br.linkedin.com/in/alexandre-salvatierra)

## Show your support

Give a ⭐️ if this project helped you!
