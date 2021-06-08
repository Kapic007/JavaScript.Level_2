<template>
  <header class="header">
    <input type="text" class="goods-search" v-model="inputValue" />
    <button class="search-button" type="button" @click="setSearchLine">Искать</button>
    <button class="cart-button" type="button" @click="showBasket">
        Корзина
    </button>
  </header>
</template>

<script>
export default {
  name: 'Head', 
  components:{},
  props:{
    filterGoods: {
      type: Function,
    },
    showBasket: {
      type: Function,
    }
  },

  data: ()=> ({
    inputValue: '',
  }),

  methods: {
    setSearchLine() {
      this.filterGoods(this.inputValue);
    }
  },

  watch: {
    inputValue() {
      this.setSearchLine();
    }
  }
  
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
</style>