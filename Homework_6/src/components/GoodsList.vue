<template>
  <div class="goods-list">
      <div v-for="item in filteredGoods" :key="item.id_product" class='goods-item'>
        <h3 class="goods-item_title">{{item.product_name}}</h3>
        <p class="goods-item_price">{{item.price}}</p>
        <button class="button_add" @click="addInBasket(item)">Добавить</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GoodsList',
  components:{},
  props: {
    filteredGoods: {
      type: Array,
      default: () => [],
    },
    addToBasket: {
      type: Function,
    },
  },

  methods: {
    addInBasket(item) {
      this.addToBasket(item);
    }
  },
}
</script>

<style>
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
</style>