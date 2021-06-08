<template>
  <div class="basket-container" v-show="isVisibleCart">
    <div class="basket-header">
      <div class="basket-item_name">Название товара</div>
      <div class="basket-item_price">Цена</div>
    </div>
    <div v-for="item in basketList" :key="item.id_product" class='basket-item'>
      <div class="basket-item_info_name">{{item.product_name}}</div>
      <div class="basket-item_info_price">{{item.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basket',
  components: {},
  props: {
    isVisibleCart: {
      type: Boolean,
      default: false,
    },
    basketList: {
      type: Array,
      default: () => [],
    }
  },

  data: ()=>({}),

  methods:{}
}
</script>

<style>
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