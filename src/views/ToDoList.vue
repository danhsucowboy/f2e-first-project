<template>
    <div class="newMissionBar">
        <input class="missionInput" type="text" placeholder="add a new mission…">
        <button class="addMission"></button>
    </div>
    <ListFolder title="to-do"/>
    <ListFolder title="done"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ListFolder from '@/components/ListFolder.vue';

@Options({
    components:{
        ListFolder,
    },
})

export default class ToDoList extends Vue {
}
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

</style>