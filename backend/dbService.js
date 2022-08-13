
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'customers'
})
const dbService = {
    connection: connection,
    getCustomers: async () => getCustomers(),
}

async function getCustomers() {
    let customers;
    return new Promise((res, rej) => {
        connection.query("Select * from Customers", (err, results, fields) => {
            if (err) rej(err);
            res(results);
        })
    })

}

module.exports = dbService
module.exports.getCustomers = getCustomers;