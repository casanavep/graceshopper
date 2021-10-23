const client = require("./client");

async function createProduct({
  title,
  description,
  price,
  quantity,
  category_id,
}) {
  try {
    const resp = await client.query(
      `
        INSERT INTO products (title,
            description,
            price,
            quantity,
            category_id)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;
      `,
      [title, description, price, quantity, category_id]
    );
    const product = resp.rows[0];
    return product;
  } catch (error) {
    throw error;
  }
}
// createProduct({
//   title: "faster car",
//   description: "second fastest car in all of Mexico",
//   price: 99.0,
//   quantity: 4,
//   category_id: 1,
// }).then(console.log);

async function getProductByTitle(title) {
  try {
    const resp = await client.query(
      `
      SELECT * FROM products
      WHERE title = $1
      `,
      [title]
    );
    return resp.rows[0];
  } catch (error) {
    throw error;
  }
}
// getProductByTitle("faster car").then(console.log);

// getProductById
async function getProductById(id) {
  try {
    const resp = await client.query(
      `
      SELECT * FROM products
      WHERE id = $1
      `,
      [id]
    );
    return resp.rows[0];
  } catch (error) {
    throw error;
  }
}
// getProductById(4).then(console.log);

// getProductByCategoryId
async function getProductByCategoryId(category_id) {
  try {
    const resp = await client.query(
      `
        SELECT * FROM products
        WHERE category_id = $1
        `,
      [category_id]
    );
    return resp.rows;
  } catch (error) {
    throw error;
  }
}
getProductByCategoryId(1).then(console.log);
module.exports = {
  getProductByTitle,
  getProductById,
  createProduct,
  getProductByCategoryId,
};