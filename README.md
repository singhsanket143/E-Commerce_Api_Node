E-commerce APi project in NodeJS

- System Requirements 
    - NodeJS
    - MySQL
    - NPM

- Setting up the project
    - Clone the repository
    - Go inside the cloned folder from your terminal/cmd
    - Run `npm install`
    - Create a new file `.env` and then configure the following environment variables
        - PORT=3000
    - `npx sequelize init`

- Run the Project
    - Run `node server.js`

- Category Resouece
    - GET `/ecom/api/v1/category`, get all categories,
    - POST `/ecom/api/v1/category`, create a category,
    - PUT `/ecom/api/v1/category/:id`, update a category,
    - DELETE `/ecom/api/v1/category/:id`, delete a cateogry`,
    - GET `/ecom/api/v1/category/:id`, get the category,

## Associations

- Every product must belong to a category
- Every category must have many products
- So between product and categories we have setup a 1:n (one to many) relation


## Seeding data in the database
```npx sequelize db:seed:all```