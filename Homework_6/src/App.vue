<template>
  <Head :filterGoods="filterGoods" :showBasket="showBasket" />
  <main class="main_wrapper">
    <GoodsList :filteredGoods="filteredGoods" :addToBasket="addToBasket" />
    <Basket :isVisibleCart="isVisibleCart" :basketList="basketList" />
    <ShowError :isError="isError" :error="error"/>
  </main>
</template>

<script>
import Head from "./components/Header";
import GoodsList from "./components/GoodsList";
import Basket from "./components/Basket";
import ShowError from "./components/ShowError";

const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  name: 'App',
  components: {
    Head,
    GoodsList,
    Basket,
    ShowError,
  },

  data: () => ({
    goods:[],
    filteredGoods:[],
    searchLine: '',
    isVisibleCart: false,
    basketList: [],
    isError: false,
    error: new Error,
  }),



  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`)
  },

  methods: {
    makeGETRequest(url){
      fetch(url).then((res) => res.json()).then((res)=>{
        this.goods = res;
        this.filteredGoods = res;
      }).catch((err) => {
        this.isError = true;
        this.error = err;
        })
    },

    filterGoods(value){
      this.searchLine = value;
      const regexp = new RegExp(this.searchLine, "i");
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },

    showBasket(){
      this.isVisibleCart = !this.isVisibleCart;
    },

    addToBasket(item){
      this.basketList.push(item);
    }
  },

}
</script>


<style>
.main_wrapper {
  margin: 0 auto;
  max-width: 1920px;
  padding: 50px;
}
</style>
