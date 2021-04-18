<template>
  <div class="container">
      <input class="name" required type="text" placeholder="Name" v-model="name">
      <input class="age" required type="number" placeholder="Age" v-model="age">
      <textarea required name="" id="" cols="30" rows="10" v-model="info"></textarea>

    <div class="rbtn">
        <input required type="radio" name="rbtn" value="One" v-model="rbtn">
        <input required type="radio" name="rbtn" value="Two" v-model="rbtn">
        <input required type="radio" name="rbtn" value="Three" v-model="rbtn">
    </div>
      

    <div class="check">
        <input required type="checkbox" name="check" value="oneCheck" v-model="check">
        <input required type="checkbox" name="check" value="twoCheck" v-model="check">
        <input required type="checkbox" name="check" value="threeCheck" v-model="check">
        <input required type="checkbox" name="check" value="fourCheck" v-model="check">
        <input required type="checkbox" name="check" value="fiveCheck" v-model="check">
    </div>

     

      <button class="btn" @click="add">Add</button>
  </div>
</template>

<script>
export default {

    data() {
        return {
            name: "",
            info: "",
            age: 0,
            rbtn: "",
            check: []
        }
    },
    methods: {
        add() {
            this.$emit("addData", {
                name: this.name, 
                info: this.info, 
                age: this.age,
                rbtn: this.rbtn,
                check: this.check
            })
        }
    }

}
</script>

<style>
    .container {
        margin-top: 25px;
        display: grid;
        grid-template-columns: 200px 200px;
        row-gap: 20px;
        column-gap: 25px;
        grid-template-areas: 
            "name age"
            "textarea textarea"
            "rbtn check"
            "btn btn";

        justify-content: center;    
    }

    .name {
        grid-area: name;
    }

    .age {
        grid-area: age;
    }

    textarea {
        grid-area: textarea;
    }

    .rbtn {
        grid-area: rbtn;
        display: flex;
        justify-content: center;
    }

    .check {
        display: flex;
        justify-content: center;
        grid-area: check;
    }

    .btn {
        grid-area: btn;
    }

</style>