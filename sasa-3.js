const customer = {
    username: "mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],

    get Balance() {
        return this.balance;
    }
    get Discount() {
        return this.discount;
    }
    set Discount(value) {
        this.discount = value
    }
    get Orders() {
        return this.orders
    }
    addOrder(cost, order) {
        this.balance -= cost - cost * this.discount;
        this.orders.push(order);
    }
}