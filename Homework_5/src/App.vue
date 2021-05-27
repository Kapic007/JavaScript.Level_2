<template>
  <header class="header">
    <input type="text" class="goods-search" v-model="searchLine" @keyup="filterGoods"/>
      <button class="search-button" type="button" @click="filterGoods">Искать</button>
      <button class="cart-button" type="button" @click="showBasket">
        Корзина
      </button>
    </header>
    <main class="main_wrapper">
      <div class="goods-list">
        <div v-for="item in filteredGoods" :key="item.id_product" class='goods-item'>
          <h3 class="goods-item_title">{{item.product_name}}</h3>
          <p class="goods-item_price">{{item.price}}</p>
          <button class="button_add">Добавить</button>
        </div>
      </div>
      <div class="basket-container" v-show="isVisibleCart"></div>
    </main>
</template>

<script>

const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  name: 'App',
  
  data: () => ({
    goods:[],
    filteredGoods:[],
    searchLine: '',
    isVisibleCart: false,
  }),

  components: {},

  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`)
  },

  methods: {
    makeGETRequest(url){
      fetch(url).then((res) => res.json()).then((res)=>{
        this.goods = res;
        this.filteredGoods = res;
      })
    },

    filterGoods(){
      const regexp = new RegExp(this.searchLine, "i");
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));

    },
    showBasket(){
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
}
</script>


<style>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: rgb(214, 214, 214);
  display: flex;
  border: 1px solid black;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 2px 2px 15px;
}

.goods-search,
.search-button {
  font-size: 18px;
  height: 30px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px;
  
}
.goods-search {
  margin-right: 20px;
  width: 300px;
  outline: none;
  padding: 0 10px;
  border: none;
}

.search-button{
  margin-right: 20%;
  width: 100px;
}

.cart-button {
  flex-direction: row;
  margin-right: 20px;
  font-size: 28px;
  height: 50px;
  width: 300px;
  border-radius: 25px;
  box-shadow: 2px 2px 5px;
}

.main_wrapper {
  margin: 0 auto;
  max-width: 1920px;
  padding: 50px;
}


.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.goods-item {
  width: 400px;
  height: 600px;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.goods-item_title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
}

.goods-item_price {
  font-size: 32px;
}
.button_add {
  margin-top: 50px;
width: 100px;
font-size: 18px;
}

/* basket */
.basket-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  min-height: 50%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.basket-header {
  display: flex;
  width: 50%;
}
.basket-item_name, .basket-item_price {
  font-size: 28px;
  border: 3px solid black;
  padding: 20px;
  width: 50%;
  text-align: center;
}
.basket-item {
  display: flex;
  width: 50%;
}
.basket-item_info_name, .basket-item_info_price {
  font-size: 28px;
  border: 1px solid black;
  padding: 20px;
  width: 50%;
  text-align: center;
}
</style>
