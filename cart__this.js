'use strict';
{
  /*
  Задача #2

  Методы объекта cart не должны обращаться к объекту по имени
  В объект cart добавьте сеттер setDiscount и свойство discount
  Сеттер setDiscount будет принимать promocode
  если promocode будет строка METHED, то в discount
  будет добавляться значение 15
  если promocode будет строка NEWYEAR, то в discount
  будет добавляться значение 21
  метод calculateItemPrice должен учитывать скидку
  равную процентному значению discount
  */
}

{
  const cart = {
    items: [],
    count: 0,
    discount: 0,

    get totalPrice() {
      return this.calculateItemPrice();
    },

    set setDiscount(promocode) {
      if (promocode === 'METHED') {
        this.discount += 15 / 100;
      }
      if (promocode === 'NEWYEAR') {
        this.discount += 21 / 100;
      }
    },

    add(nameItem, priceItem, countItem = 1) {
      this.items.push({
        name: nameItem,
        price: priceItem,
        count: countItem,
      });

      this.inceaseCount(countItem);
      this.inceaseCount();
    },

    inceaseCount(number) {
      return this.count += number;
    },

    calculateItemPrice() {
      const sumPrice = this.items
        .reduce(((acc, item) =>
          acc + item.count * item.price), 0);
      const totalPrice = sumPrice - sumPrice * this.discount;
      return totalPrice;
    },

    clear() {
      this.items = [];
      this.totalPrice = 0;
      this.count = 0;
    },

    print() {
      const stringJson = JSON.stringify(this.items);
      console.log(stringJson);
      console.log(this.totalPrice);
    },
  };

  const arrGood = [
    ['apple', 20, 5],
    ['green', 50, 10],
  ];
  console.log(arrGood);

  arrGood.forEach(item => cart.add(...item));
  // cart.clear();

  cart.setDiscount = 'METHED';
  console.log(cart.discount);

  cart.print();
}
