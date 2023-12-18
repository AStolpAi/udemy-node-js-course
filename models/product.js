const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), "data", "products.json");

const getProductsFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            return callback([]);
        }
        callback(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(title, imageUrl, description, price, id) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.id = id;
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if(err) {
                    console.log(err);
                }
            });
        });
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }

    static findById(id, callback) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            callback(product);
        });
    }
}