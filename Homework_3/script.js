// ● https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses – адрес
// API;
// ● /catalogData.json – получить список товаров;
// ● /getBasket.json – получить содержимое корзины;
// ● /addToBasket.json – добавить товар в корзину;
// ● /deleteFromBasket.json – удалить товар из корзины.

const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

function makeGETRequest(url, method = "GET") {
  return new Promise((res, rej) => {
    var xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
      rej(err);
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        res(xhr.responseText);
      }
    };
    xhr.open(method, url, true);
    xhr.send();
  });
}

class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3 class="goods-item_title">${this.product_name}</h3><p class="goods-item_price">${this.price}</p></div>`;
  }
}

class BasketItem extends GoodsItem {
  constructor(...args) {
    super(...args);
    this.count = 0;
  }

  render() {
    return `<div class="basket-item"><div class="basket-item_info_name">${this.product_name}</div><div class="basket-item_info_price">${this.price}</div></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    return makeGETRequest(`${API_URL}/catalogData.json`, "GET").then(
      (goods) => {
        this.goods = JSON.parse(goods);
      }
    );
  }

  getTotalPrice() {
    return this.goods.reduce((total, good) => total + good.price, 0);
  }

  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods().then(() => list.render());

class Basket extends GoodsList {
  constructor(...args) {
    super(...args);
  }

  fetchGoods() {
    return makeGETRequest(`${API_URL}/getBasket.json`, "GET").then((goods) => {
      this.goods = JSON.parse(goods);
    });
  }

  addItem(item) {
    let idx;
    let count = { quantity: 1 };
    if (
      this.goods.contents.some((good, index) => {
        if (good.id_product === item.id_product) idx = index;
        return good.id_product === item.id_product;
      })
    ) {
      this.goods.contents[idx].quantity += 1;
      this.goods.countGoods += 1;
    } else {
      this.goods.contents.push[{ ...item, ...count }];
      this.goods.countGoods += 1;
    }
    this.getTotalPrice();
  }

  deleteItem(item) {
    let counter;
    this.goods.contents = this.goods.contents.filter((good) => {
      if (good.id_product !== item.id_product) {
        counter = good.id.quantity;
      }
      return good.id_product !== item.id_product;
    });
    this.goods.countGoods -= counter;
    this.getTotalPrice();
  }

  getTotalPrice() {
    return this.goods.contents.reduce((total, good) => total + good.price, 0);
  }

  render() {
    let listHtml = `<div class="basket-container"><div class="basket-header"><div class="basket-item_name">Название товара</div><div class="basket-item_price">Цена</div></div>`;
    let addHtml = "";
    this.goods.contents.forEach((item) => {
      const basketItem = new BasketItem(item.product_name, item.price);
      addHtml += basketItem.render();
    });
    listHtml += addHtml + "</div>";
    document.body.insertAdjacentHTML("beforeend", listHtml);
  }
}

function showBasket() {
  const basket = new Basket();
  basket.fetchGoods().then(() => basket.render());
}