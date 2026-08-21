"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPrice(product) {
    const productPrice = product.forEach((item) => {
        console.log(item.price);
    });
    // for (let item of product){
    //   console.log(item.price) 
    // }
}
const product = [
    { title: "Laptop", price: 55000 },
    { title: "Mouse", price: 500, inStock: true }
];
getPrice(product);
//# sourceMappingURL=03-interface-optional-property.js.map