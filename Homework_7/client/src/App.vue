<template>
  <div>
    <Head :filterGoods="filterGoods" :showBasket="showBasket" />
    <main class="main_wrapper">
      <GoodsList :filteredGoods="filteredGoods" :addToBasket="addToBasket" />
      <Basket :isVisibleCart="isVisibleCart" :basketList="basketList" 
        :addToBasket="addToBasket" :decreaseFromBasket="decreaseFromBasket" :delFromBasket="delFromBasket"/>
      <ShowError :isError="isError" :error="error"/>
    </main>
  </div>
</template>

<script>
import Head from "./components/Header";
import GoodsList from "./components/GoodsList";
import Basket from "./components/Basket";
import ShowError from "./components/ShowError";

const API_URL =
  "http://localhost:3000";

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
    stats: [],
  }),

  mounted() {
    this.getGoods(`${API_URL}/catalogData`);
    this.getBasket(`${API_URL}/basketData`);
    this.getStats(`${API_URL}/statistic`)
  },

  methods: {
    makeGETRequest(url){
      return fetch(url)
              .then((res) => res.json())
    },

    getGoods(url){
      this.makeGETRequest(url).then((res)=>{
        this.goods = res;
        this.filteredGoods = res;
      }).catch((err) => {
        this.isError = true;
        this.error = err;
        })
    },

    getBasket(url) {
      this.makeGETRequest(url).then((res)=>{
        this.basketList = res;
      }).catch((err) => {
        this.isError = true;
        this.error = err;
        })
    },

    getStats(url) {
      this.makeGETRequest(url).then((res)=>{
        this.stats = res;
      }).catch((err) => {
        console.log(`Can not get statistic: ${err}`)
        })
    },

    makePOSTrequest(url, data){
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
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
      let itemIdx;
      if(!this.basketList.some((el, index) => {
        if(el.id_product === item.id_product) itemIdx = index;
        return el.id_product === item.id_product
      })){
        this.basketList.push({...item, quantity: 1});
        this.updateStatistic('Add_item', item);
      }else{
        this.basketList[itemIdx].quantity += 1;
      }
      this.makePOSTrequest(`${API_URL}/updateBasket`, this.basketList);
    },

    decreaseFromBasket(item) {
      if(item.quantity > 1) {
        let itemIdx = this.basketList.indexOf(item);
        this.basketList.[itemIdx].quantity -= 1;
        this.makePOSTrequest(`${API_URL}/updateBasket`, this.basketList);
      }
    },

    delFromBasket(item){
      let itemIdx = this.basketList.indexOf(item);
      this.basketList.splice(itemIdx, 1);
      this.makePOSTrequest(`${API_URL}/updateBasket`, this.basketList);
      this.updateStatistic('Delete_item', item);
    },

    updateStatistic(action, item){
      const event = {
        "action" : action,
        "product": item.product_name,
        "date" : new Date(Date.now()).toLocaleString(),
      };
      this.stats.push(event);
      this.makePOSTrequest(`${API_URL}/statistic`, this.stats);
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
