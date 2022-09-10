"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Customer_1 = require("./Customer");
const Client_1 = require("./Client");
const user = new User_1.User("10", "teste@gmail.com", "teste", "xxxxxx");
const customer = new Customer_1.Customer("20", "teste2@gmail.com", "teste2", "xxxxxx", "414-555");
const customer1 = new Customer_1.Customer("30", "teste3@gmail.com", "teste3", "xxxxxx", "414-555");
console.log(Client_1.client.calculateBill());
//# sourceMappingURL=index.js.map