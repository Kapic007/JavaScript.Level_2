<template>
  <div class="error_container" v-show="isError">
    <div class="error_message">Невозможно получить данные с сервера</div>
    <p class="error_real">{{error}}</p>
  </div>
</template>

<script>
export default {
  name: 'ShowError',
  components:{},
  props:{
    isError: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Error,
    }
  }
}
</script>

<style>
.error_container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  min-height: 50%;
  background-color: rgb(58, 58, 58);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border: 10px solid red;
}
.error_message {
  font-size: 30px;
  color: white;
  margin-bottom: 20px;
}
.error_real {
  font-size: 30px;
  color: brown;
}
</style>