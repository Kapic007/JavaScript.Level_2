<template>
  <div class="task_container">
    <div :class="['task', {'task--del': isChecked}, {'task--select': isSelect}]">
      <input
        type="checkbox"
        v-model="isChecked"
        @input="$emit('update-status', item.id)"
      />
      <div :class="['text', { 'text--del': isChecked}]">{{ item.text }}</div>
      <div @click="$emit('delete-task', item.id)" class="rm-btn">❌</div>
    </div>
    <div>Select task ⮞&nbsp;</div>
    <input
      type="checkbox"
      v-model="isSelect"
      @input="$emit('update-select', item.id)"/>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isChecked: false,
    isSelect: false,
  }),
  mounted() {
    this.isChecked = this.item.status;
  },
};
</script>

<style scoped>
.task_container {
  display: flex;
  justify-content: center;
  align-items:center;
}
.task {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  border: 1px solid #000;;
  margin: 10px;
  font-size: 18px;
  background-color: rgba(255, 255, 0, 0.2);
}
.task--del {
  background-color: rgba(0, 255, 0, 0.2);
}
.task--select {
  background-color: rgba(0, 4, 255, 0.2);
}
input[type=checkbox] {
    transform: scale(2);
}
.text {
  padding: 0 10px;
  max-width: 300px;
  
}

.text--del {
  text-decoration: line-through;
}

.rm-btn {
  cursor: pointer;
}
</style>
