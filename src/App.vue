<template>
  <div class="wrapper">
    <div class="container">
        <div class="main-controller">
            <Nav/>
            <Pomodoro/>
        </div>
        <div class="contents">
            <router-view/>
        </div>
        <div class="menu-wrapper">
            <Menu/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nav from '@/components/Nav.vue';
import Pomodoro from '@/components/Pomodoro.vue';
import Menu from '@/components/Menu.vue';
// import ToDoList from '@/views/ToDoList.vue';

@Options({
    components: {
        Nav,
        Pomodoro,
        Menu,
    },
})

export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  // overflow: hidden;
}

*:focus {
    outline: none;
}

button{
  background: none;
  border: none;
  padding: 0;
}

.wrapper{
    width: 100%;
    height: 62.5vw;
    background-color: #003164;
    position: relative;
}

.wrapper .container{
    margin-left: 6.64vw;
    margin-right: 6.64vw;
    /* width: 100%; */
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr) ;
    column-width: 5vw;
    column-gap: 2.34vw;
}

.wrapper .container .main-controller{
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.wrapper .container .contents{
    grid-column-start: 6;
    grid-column-end: 11;
}

.wrapper .container .menu-wrapper{
    width: 100%;
    height: 100%;
    grid-column-start: 12;
    grid-column-end: 13;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
</style>
