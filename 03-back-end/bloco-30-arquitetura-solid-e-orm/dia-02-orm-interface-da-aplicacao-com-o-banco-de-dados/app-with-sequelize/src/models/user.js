const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Users'
  });

  return User;
};

module.exports = User;
