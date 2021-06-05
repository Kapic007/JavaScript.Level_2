<template>
  <div class="wrapper container">
    <ul class="task">
      <li class='task_item'><button class="task_item_button" @click="onlyActive">Показать только активные</button></li>
      <li class='task_item'><button class="task_item_button" @click="deleteCompleted">Удалить все завершенные</button></li>
      <li class='task_item'><button class="task_item_button" @click="deleteSelected">Удалить все выделенные</button></li>
      <li class='task_item'>Пагинация</li>
      <li class='task_item'>Сделать через API</li>
    </ul>
    <div>
      <input v-model="inputValue" @keyup.enter="addTask" class="input"/>
      <button @click="addTask" class="add_task_button">Добавить задачу</button>
    </div>
    <ToDoItem
      v-for="item in paginationList"
      :key="item.id"
      :item="item"
      @update-status="updateTaskStatus"
      @delete-task="deleteTask"
      @update-select="updateSelected"
    />
    <Pagination :paginate="paginate" :paginationList="paginationList" :totalPages="totalPages" :currentPage="currentPage" />
  </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";
import Pagination from "./components/Pagination.vue";

const API_URL = "http://localhost:3000";

export default {
  components: {
    ToDoItem,
    Pagination,
  },
  data: () => ({
    list: [],
    inputValue: "",
    //pagination
    itemPerPage : 5,
    currentPage : 1,
    paginationList: [],
    totalPages: 1,
  }),

  mounted() {
    this.getToDoList(`${API_URL}/toDoList`);
  },

  methods: {
    makeGETRequest(url){
      return fetch(url)
              .then((res) => res.json())
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

    getToDoList(url) {
      this.makeGETRequest(url).then((res)=>{
        this.list = res;
        this.paginate();
      }).catch((err) => {
        console.log(`Can't get todo list: ${err}`)
        })
    },
    
    paginate(page) {
      if(page) this.currentPage = page;
      if(this.list.length > this.itemPerPage) {
        this.paginationList = this.list.slice(5*(this.currentPage-1), 5*this.currentPage);
        this.totalPages = Math.ceil(this.list.length / this.itemPerPage);
      }else{
        this.paginationList = this.list;
        this.totalPages = 1
      }
      
    },

    addTask() {
      if (!this.inputValue.trim()) return;
      const data = {
        id: Date.now(),
        text: this.inputValue,
        status: false,
        select: false,
      };
      this.inputValue = "";
      this.list.push(data);
      this.paginate();
      this.makePOSTrequest(`${API_URL}/updateToDoList`, this.list);
    },

    deleteTask(id) {
      this.list = this.list.filter((item) => item.id !== id);
      this.paginate();
      this.makePOSTrequest(`${API_URL}/updateToDoList`, this.list);
    },

    updateTaskStatus(id) {
      this.list = this.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      });
      this.makePOSTrequest(`${API_URL}/updateToDoList`, this.list);
    },

    updateSelected(id) {
      this.list = this.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            select: !item.select,
          };
        }
        return item;
      });
    },

    onlyActive() {
      this.list = this.list.filter((item) => item.status);
      this.paginate();
      this.makePOSTrequest(`${API_URL}/updateToDoList`, this.list);
    },

    deleteCompleted() {
      this.list = this.list.filter((item) => !item.status);
      this.paginate();
      this.makePOSTrequest(`${API_URL}/updateToDoList`, this.list);
    },

    deleteSelected() {
      this.list = this.list.filter((item) => !item.select);
      this.paginate();
      this.makePOSTrequest(`${API_URL}/updateToDoList`, this.list);
    }

  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
  /* border: 1px solid black; */
  min-height: 50vh;

}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.task {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.task_item {
  margin: 10px 15px;
  font-size: 28px;
}
.task_item_button {
  font-size: 20px;
  border: none;
  border-radius: 15px;
  padding: 10px;
  transition: all 0.3s;
}
.task_item_button:hover {
  box-shadow: 5px 5px 5px gray;
}
.task_item_button:active{
  box-shadow: none;
}
.input {
  max-width: 400px;
  font-size: 20px;
}
.add_task_button {
  font-size: 20px;
  margin-left: 10px;
}
</style>