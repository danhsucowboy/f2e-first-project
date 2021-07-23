<template>
    <div class="newMissionBar">
        <input class="missionInput" type="text" placeholder="add a new mission…" v-model="newMission" @keyup.enter="addNewMission">
        <button class="addMission" @click="addNewMission"></button>
    </div>
    <ListFolder title="to-do" :foldedSetting="true" :missions="missionsToDO" @itemChecked="getItemCheckedId"/>
    <ListFolder title="done" :missions="finishedToDO" @itemChecked="getItemUnCheckedId"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ListFolder from '@/components/ListFolder.vue';

@Options({
    data(){
        return{
            newMission:"",
        }
    },
    components:{
        ListFolder,
    },
    props: {
        missionsToDO:{
            type: Array,
            default:[]
        },
        finishedToDO:{
            type: Array,
            default:[]
        }
    },
    emits: {
        missionChecked: Number,
        missionUnChecked: Number
    },
})

export default class ToDoList extends Vue {
    missionChecked!: number
    missionUnChecked!: number
    missionsToDO!: Array<string>
    finishedToDO!: Array<string>
    listSetting = true
    
    // inputMissions = ["the First thing to do today", "the second thing to do today", "complete the keynote", "prepare presentation"]
    // finishedMissions: Array<string> = []
    newMission!:string
    addNewMission(){
        this.missionsToDO.push(this.newMission)
        this.newMission = ""
    }

    getItemCheckedId(value: number){
        // this.missionChecked = value
        this.$emit('missionChecked', value)
    }

    getItemUnCheckedId(value: number){
        this.$emit('missionUnChecked', value)
    }
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
    cursor: pointer;
}

</style>