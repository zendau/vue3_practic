<template>
  <div>
    <div class="container column">
    <form class="card card-w30">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select v-model="type" id="type">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Значение</label>
        <textarea v-model="data" id="value" rows="3"></textarea>
      </div>

      <button :disabled="isDisabled" @click.prevent="add" class="btn primary">Добавить</button>
    </form>
    <div class="card card-w70">
		<component v-for="item in body" :is="item[0]" :key="item[1]" :value="item[1]"></component>
    <h3 v-if=" body.length === 0 ">Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
  <comments></comments>
  </div>
</template>

<script>

import mainTitle from "./components/title"
import subTitle from "./components/subtitle"
import avatar from "./components/avatar"
import dataText from "./components/text"
import Comments from './components/comments.vue'

export default {
	data() {
		return {
			type: "",
			data: "",
			body: [],
		}
	},
	methods: {
		add() {
			let type

			if (this.type === "title") {
				type = mainTitle
			} else if (this.type === "subtitle") {
				type = subTitle
			} else if (this.type === "avatar") {
				type = avatar
			} else if (this.type === "text") {
				type = dataText
			} 

			this.body.push([type, this.data])

			this.data = ""
			this.type = ""
		},
		
	},
	components: {
		mainTitle,
		subTitle,
		avatar,
		dataText,
		Comments
	},
	computed: {
		isDisabled() {
			return this.data.length < 4 ? true : false
		}
	}
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
