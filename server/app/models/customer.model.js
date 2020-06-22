module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("users", {
        customerNumber: {
            type: Sequelize.INTEGER(11),
        },
        customerName: {
            type: Sequelize.STRING,
        },
        contactFirstName: {
            type: Sequelize.STRING,
        },
    });

    return Customer;
};