<template>
    <AddMissionBar @add="addNewMission" :status="true"/>
    <ListFolder title="to-do" 
    :foldedSetting="true" 
    :panelStatus="true" 
    :missions="missionsToDO" 
    @itemStatus="getItemCheckedId"
    @newProcessItem="checkCurrentItem"/>
    <ListFolder title="done" 
    :missions="missionsToDO" 
    :panelStatus="true"
    @itemStatus="getItemUnCheckedId"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import AddMissionBar from '@/components/AddMissionBar.vue';
import ListFolder from '@/components/ListFolder.vue';
import ToDoItem from '@/todoprop';

@Options({
    components:{
        AddMissionBar,
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
        newMission: String,
        missionChecked: Number,
        missionUnChecked: Number,
        newProcessItem: Number
    },
})

export default class ToDoList extends Vue {
    missionChecked!: number
    missionUnChecked!: number
    newMission!: ToDoItem
    missionsToDO!: Array<ToDoItem>
    finishedToDO!: Array<string>
    listSetting = true
    
    
    addNewMission(value: string){
        let inputMission:ToDoItem = {
            id: Math.floor(new Date().valueOf() * Math.random()),
            contents: value,
            checkStatus: false,
            timeUnit: 25,
            processTimeUnits: 0
        }
        this.$emit('newMission', inputMission)
    }

    checkCurrentItem(value: number){
        this.$emit('newProcessItem', value)
    }

    getItemCheckedId(value: number){
        this.$emit('missionChecked', value)
    }

    getItemUnCheckedId(value: number){
        this.$emit('missionUnChecked', value)
    }
}
</script>