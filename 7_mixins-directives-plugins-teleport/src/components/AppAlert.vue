<template>
  <button class="modal__open" @click="modal = true">{{$translate("app.modal")}}</button>
  <teleport to="body">
    <div class="modal" v-if="modal">
      <div class="modal__title">Modal window</div>
      <div class="modal__body">Modal body</div>
      <button class="modal__close" @click="modal = false">&#x2716;</button>
    </div>
    <div class="overlay" v-if="modal"></div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      modal: false
    }
  }
}
</script>

<style>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: .5;
    background-color: #000;
  }
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 400px;
    height: 200px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 350px 50px;
    grid-template-rows: 50px 150px;
    font-size: 20px;
  }

  .modal__title {
    justify-self: center;
    align-self: center;
  }

  .modal__body {
    grid-column: 1/3;
    padding: 10px;
  }

  .modal__close {
    display: block;
    width: 50px;
    height: 50px;
    position: relative;
    font-size: 28px;
    grid-column: 2/3;
    grid-row-start: 1;
  }

</style>