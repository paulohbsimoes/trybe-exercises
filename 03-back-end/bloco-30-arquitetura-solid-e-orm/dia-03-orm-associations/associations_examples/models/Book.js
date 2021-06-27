module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookId: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    numberPages: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Books',
    underscored: true,
  });

  return Book;
};
