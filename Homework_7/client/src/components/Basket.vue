<template>
  <div class="basket-container" v-show="isVisibleCart">
    <div class="basket-header">
      <div class="basket-item_header">Название товара</div>
      <div class="basket-item_header">Цена</div>
      <div class="basket-item_header">Количество</div>
      <div class="basket-item_header">Добавить/уменьшить</div>
      <div class="basket-item_header">Сума</div>
      <div class="basket-item_header">Удалить</div>
    </div>
    <div v-for="item in basketList" :key="item.id_product" class='basket-item'>
      <div class="basket-item_info">{{item.product_name}}</div>
      <div class="basket-item_info">{{item.price}}</div>
      <div class="basket-item_info">{{item.quantity}}</div>
      <div class="basket-item_info">
        <button class="basket-item_button" @click="addInBasket(item)">➕</button>
        <button class="basket-item_button" @click="decreaseInBasket(item)">➖</button>
      </div>
      <div class="basket-item_info">{{item.price * item.quantity}}</div>
      <div class="basket-item_info">
        <button class="basket-item_button" @click="delInBasket(item)">❌</button>
      </div>
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
    },
    addToBasket: {
      type: Function,
    },
    delFromBasket: {
      type: Function,
    },
    decreaseFromBasket: {
      type: Function,
    },
  },

  data: ()=>({}),

  methods:{
    addInBasket(item) {
      this.addToBasket(item);
    },
    delInBasket(item) {
      this.delFromBasket(item);
    },
    decreaseInBasket(item) {
      this.decreaseFromBasket(item);
    }
  },
}
</script>

<style>
.basket-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 50%;
  min-height: 50%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.basket-header, .basket-item {
  display: flex;
  width: 900px;
}
.basket-item_header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  border: 3px solid black;
  padding: 10px;
  width: 150px;
  box-sizing: border-box;
}
.basket-item_info {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  border: 1px solid black;
  padding: 10px;
  width: 150px;
  box-sizing: border-box;
}
</style>