<template>
  <div class="pagination_container">
    <div v-if="currentPage > 1" @click="changePage(currentPage, -1)" class="pagination_prev">⮜ Previous</div>
    <div v-for="page in totalPages" :key="page" v-show="showPageButton(page)"
      @click="changePage(page, 0)" :class="['pagination_page', {page_active : currentPage === page}]">{{page}}</div>
    <div v-if="currentPage < totalPages" @click="changePage(currentPage, 1)" class="pagination_next">Next ⮞</div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    paginationList: {
      type: Array,
      default: ()=>{[]},
    },
    list: {
      type: Array,
      default: ()=>{[]},
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    paginate: {
      type: Function,
    }
  },

  methods: {
    changePage(page, num) {
      this.paginate(page + num);
    },
    showPageButton(page) {
      console.log(this.currentPage - page)
      return Math.abs(this.currentPage - page) < 3
      
      //page === this.currentPage || page === this.currentPage - 1 || page === this.currentPage - 2 || page === this.currentPage + 1 || page === this.currentPage + 2
    }
  }

}
</script>

<style>
.pagination_container {
  display: flex;
  position: relative;
  margin: 50px;
}
.pagination_prev, .pagination_page, .pagination_next {
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
.pagination_prev:hover, .pagination_page:hover, .pagination_next:hover {
  background-color: rgba(245, 222, 179, 0.5);
  box-shadow: 2px 2px 5px gray;
}
.pagination_prev:active, .pagination_page:active, .pagination_next:active {
  background-color: wheat;
  box-shadow: none;
}
.page_active {
  background-color: rgba(0, 4, 255, 0.2);
}
</style>