<template>
  <div>
        <div class="item" v-for="(item, index) in users" :key="item.name">
                <p>№ {{index+1}}</p> 
                <p>Name: {{item.name}}</p>  
                <p>Age: {{item.age}}</p>  
                <p>Rbtn status: {{item.rbtn}}</p>
                <p class="title">CheckBox</p> 
                <div class="container">
                    <p v-for="(cbox, i) in item.check" :key="cbox">
                        # {{i+1}} {{cbox}}
                    </p>
                </div>
                
                <p class="info">{{item.info}}</p>
                <hr>
        </div>
  </div>
</template>

<script>
export default {
    props: ["users"]
}
</script>

<style scoped>
    .item {
        margin-top: 35px;
        display: grid;
        grid-template-columns: 50px 150px 150px 200px;
        justify-content: center;
    }
    p {
        text-align: center;
    }
    .info, .title, .container, hr{
        grid-column: 1/5;
    }

    .container {
        grid-template-columns: repeat(3, 170px);
    }

    hr {
        width: 100%;
    }

</style>