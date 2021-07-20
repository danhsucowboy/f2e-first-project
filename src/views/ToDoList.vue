<template>
    <div class="newMissionBar">
        <input class="missionInput" type="text" placeholder="add a new mission…">
        <button class="addMission"></button>
    </div>
    <div class="toDoList">
        <div class="folderBar">
            <p class="title">to-do</p>
            <button class="folderBtn"></button>
        </div>
        <div class="listContents">
            <div class="listItem">
                <button class="check"></button>
                <div class="missionTitle">the First thing to do today</div>
                <button class="starter"></button>
            </div>
            <div class="listItem">
                <button class="check"></button>
                <div class="missionTitle">the second thing to do today</div>
                <button class="starter"></button>
            </div>
            <div class="listItem">
                <button class="check"></button>
                <div class="missionTitle">the third thing to do today</div>
                <button class="starter"></button>
            </div>
            <div class="listItem">
                <button class="check"></button>
                <div class="missionTitle">the Forth thing to do today</div>
                <button class="starter"></button>
            </div>
            <div class="listItem">
                <button class="check"></button>
                <div class="missionTitle">complete the keynote</div>
                <button class="starter"></button>
            </div>
            <div class="listItem">
                <button class="check"></button>
                <div class="missionTitle">prepare presentation</div>
                <button class="starter"></button>
            </div>
        </div>
    </div>
    <div class="toDoList">
            <div class="folderBar">
            <p class="title">done</p>
            <button class="folderBtn"></button>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

export default class ToDoList extends Vue {}
</script>

<style>
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


.container .contents .toDoList{
    width: 100%;
    margin-top: 3.75vw;
    color:#fff;
}

.contents .toDoList .folderBar{
    width: 100%;
    height: 3.4375vw;
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF33;
    align-items: center;
}
    .toDoList .folderBar .title{
        width: 100%;
        height: 2.1875vw;
        margin-left: 1.25vw;
        text-align: left;
        font: normal normal bold 1.875vw/2.1875vw 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
    }

    .toDoList .folderBar .folderBtn{
        width: 1.875vw;
        height: 1.875vw;
        margin-right:1.25vw;
        background-color: #fff;
        border:none;
        padding: 0;
        mask: url('../assets/arrow_drop_up_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
    }

.contents .toDoList .listContents{
    width: 100%;
    height: 20vw;
    /* overflow-y: scroll; */
    background: none;
    display: flex;
    flex-direction: column;
    margin-top: 0.55vw;
}
    .toDoList .listContents .listItem{
        width: 100%;
        height: 2.5vw;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        border-bottom: 2px solid #FFFFFF33;
        margin-top: 0.7vw;
    }
        .listContents .listItem .check{
            width: 1.875vw;
            height: 1.875vw;
            background-color: #fff;
            mask: url('../assets/radio_button_unchecked_black_48dp.svg') no-repeat center;
            mask-size: 100% 100%;
        }

        .listContents .listItem .missionTitle{
            margin-left: 0.3125vw;
            width: 100%;
            text-align: left;
            font: normal normal bold 1.25vw 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
        }

        .listContents .listItem .starter{
            width: 1.875vw;
            height: 1.875vw;
            background-color: #fff;
            mask: url('../assets/play_circle_outline_black_48dp.svg') no-repeat center;
            mask-size: 100% 100%;
        }
</style>