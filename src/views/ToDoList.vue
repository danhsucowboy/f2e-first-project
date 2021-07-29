<template>
    <AddMissionBar @add="addNewMission"/>
    <ListFolder title="to-do" 
    :foldedSetting="true" 
    :panelStatus="true" 
    :missions="missionsToDO" 
    @itemChecked="getItemCheckedId"
    @newProcessItem="checkCurrentItem"/>
    <ListFolder title="done" :missions="finishedToDO" :panelStatus="true" @itemChecked="getItemUnCheckedId"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import AddMissionBar from '@/components/AddMissionBar.vue';
import ListFolder from '@/components/ListFolder.vue';

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
    newMission!: string
    missionsToDO!: Array<string>
    finishedToDO!: Array<string>
    listSetting = true
    
    
    addNewMission(value: string){
        this.$emit('newMission', value)
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