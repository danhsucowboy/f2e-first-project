<template>
    <div class="wrapper">
        <div class="container">
            <div class="main-controller">
                <Nav/>
                <Pomodoro/>
            </div>
            <div class="contents">
                <div class="newMissionBar">
                    <input class="missionInput" type="text" placeholder="add a new mission…">
                    <button class="addMission"></button>
                </div>
                <div class="toDoList">
                    
                </div>
                <div class="doneList">

                </div>
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

@Options({
    components: {
        Nav,
        Pomodoro,
        Menu,
    },
})

export default class Main extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.wrapper{
    width: 100%;
    height: 100vh;
    background-color: #003164;
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

.container .contents .newMissionBar{
    width: 100%;
    height: 4.375vw;
    background-color: #fff;
    margin-top: 3.75vw;
    display: flex;
    flex-direction: row;
}

.contents .newMissionBar .missionInput{
    width: 100%;
    height: 100%;
    color: #FF4384;
    font: normal normal bold 1.25vw 'Open Sans', sans-serif;
    letter-spacing: 0px;
    background: none;
    border:none;
    padding: 0;
    margin-left: 1.33vw;

}

.contents .newMissionBar .missionInput::placeholder{
    color: #FF4384;
    text-align: left;
    font: italic normal bold 1.25vw 'Open Sans', sans-serif;
    letter-spacing: 0px;
    text-transform: uppercase;
}

.contents .newMissionBar .addMission{
    width: 1.875vw;
    height: 1.875vw;
    margin:1.25vw;
    background-color: #FF4384;
    border:none;
    padding: 0;
    mask: url('../assets/add_black_48dp.svg') no-repeat center;
    mask-size: 100% 100%;
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