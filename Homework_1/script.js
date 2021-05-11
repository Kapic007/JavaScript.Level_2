const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
];

const renderGoodsItem = (title = "Title", price = "price") => {
  return `<div class="goods-item"><h3 class="goods-item_title">${title}</h3><p class="goods-item_price">${price}</p></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));
  document.querySelector(".goods-list").innerHTML = goodsList.join('');
};

// const renderGoodsList = (list) => {
//   list.map((item) =>
//     document
//       .querySelector(".goods-list")
//       .insertAdjacentHTML("beforeend", renderGoodsItem(item.title, item.price))
//   );
// };

renderGoodsList(goods);