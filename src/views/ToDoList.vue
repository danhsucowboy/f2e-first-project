<template>
    <AddMissionBar @add="addNewMission"/>
    <ListFolder title="to-do" :foldedSetting="true" :panelStatus="true" :missions="missionsToDO" @itemChecked="getItemCheckedId"/>
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
    
    
    addNewMission(value: string){
        this.missionsToDO.push(value)
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