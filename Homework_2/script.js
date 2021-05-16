class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3 class="goods-item_title">${this.title}</h3><p class="goods-item_price">${this.price}</p></div>`;
  }
}

//велосипед уже изобрели, по-этому наследуемся
class BasketItem extends GoodsItem {
  constructor(...args) {
    //если у товара будет много свойств, то наследовать
    //нужно будет тольке те которые нужны для отображения в корзине
    super(...args);
  }

  render() {
    return `какая-то разметка HTML(согласно какого-то макета) для товара в корзине`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: "Shirt", price: 150 },
      { title: "Socks", price: 50 },
      { title: "Jacket", price: 350 },
      { title: "Shoes", price: 250 },
    ];
  }

  getTotalPrice() {
    return this.goods.reduce((total, good) => total + good.price, 0);
  }

  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

//класс корзины можно унаследовать от класса GoodsList
//но пока мы как-бы не знаем всю "начинку" GoodsList
// и по этому пишем класс Basket с нуля
class Basket {
  constructor() {
    this.basketList = [];
  }

  addItem(item) {
    this.basketList.push(item);
  }

  deleteItem(item) {
    let index = this.basketList.indexOf(item);
    this.basketList.splice(index, 1);
  }

  getTotalPrice() {
    return this.basketList.reduce((total, good) => total + good.price, 0);
  }

  render() {
    return `какая-то разметка HTML(согласно какого-то макета) для показа корзины
            (модальное окно, рендер новой страницы или может переход на другую страницу)`;
  }
}

//
