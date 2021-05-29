const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const [ result ] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return null;
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    return rows;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    if (!result.length) return null
    return result[0];
  } catch (err) {
    console.error(err);
    return null;
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query(
      'UPDATE products SET name = ?, brand = ? WHERE id = ?',
      [name, brand, id]
    );
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query('DELETE FROM products WHERE id = ?', [id])
    return product;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = { add, getAll, getById, update, exclude };
