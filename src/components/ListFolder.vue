<template>
    <div class="folderList">
        <div class="folderBar" @click="foldList">
            <p class="folderTitle">{{title}}</p>
            <div class="folderBtn" :class="{open : unfolded, close : !unfolded}"></div>
        </div>
        <div class="listContents" :class="checkFolderType" v-if="unfolded">
            <MissionItem v-for="mission in checkItemStatus" :key="mission" 
                :itemProps="{
                    panelOpen:panelStatus, 
                    folderTitle:title,
                    item:mission}"
                @clickId="getIdStatusChange"
                @newProcessItem="checkCurrentItem"/>
            <div class="listItem" v-if="checkListEmpty">
                <div class="missionTitle">{{title === 'done' ? 'Empty' : 'Clear'}}</div>
            </div>
        </div>
        <p class="workColor mention" v-if="title === 'to-do' && checkItemStatus.length > 6 && unfolded">Scroll down see MORE</p>
        <p class="breakColor mention" v-if="title === 'done' && checkItemStatus.length > 4 && unfolded">Scroll down see your ACHIEVEMENT</p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import MissionItem from '@/components/MissionItem.vue';
import ToDoItem from '@/todoprop';

@Options({
    components: {
        MissionItem,
    },
    props: {
        id: Number,
        title: String,
        panelStatus: Boolean,
        missions: {
            type: Array,
            default(){
                return []
            }
        },
        foldedSetting:{
            type: Boolean,
            default(){return false},
        }
    },
    emits: {
        itemStatus: Number,
        newProcessItem: Number
    },
    computed: {
        checkListEmpty(){
            if(this.missions.length >= 1)
                return false
            return true
        },
        checkFolderType(){
            if(this.title==='to-do'){
                if(this.missions.length > 6)
                    return 'moreMission listToDoHeight'
                return 'listToDoHeight'
            }
            else if(this.title==='done'){
                if(this.missions.length > 4)
                    return 'moreMission listDoneHeight'
                 return 'listDoneHeight'
            }
            
            return ''
        },
        checkItemStatus(){
            if(this.title==='done')
                return this.missions.filter((m: ToDoItem) => m.checkStatus)
            else
                return this.missions.filter((m: ToDoItem) => !m.checkStatus)

        }
        
    }
})

export default class ListFolder extends Vue{
    id!: number
    title!: string
    panelStatus!: boolean
    itemStatus!: number
    newProcessItem!: number
    missions!: Array<ToDoItem>
    foldedSetting!: boolean
    unfolded = this.foldedSetting;

    foldList(){
        this.unfolded = !this.unfolded
    }

    getIdStatusChange(value: number){
        this.$emit('itemStatus', value)
    }

    checkCurrentItem(value: number){
        this.$emit('newProcessItem', value)
    }
}
</script>

<style>
.folderList{
    width: 100%;
    margin-top: 3.75vw;
    color:#fff;
}

.folderList .folderBar{
    width: 100%;
    height: 3.4375vw;
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF33;
    align-items: center;
    cursor: pointer;
}
    .folderList .folderBar .folderTitle{
        width: 100%;
        height: 2.1875vw;
        margin-left: 1.25vw;
        text-align: left;
        font: normal normal bold 1.875vw/2.1875vw 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
    }

    .folderList .folderBar .folderBtn{
        width: 1.875vw;
        height: 1.875vw;
        margin-right:1.25vw;
        background-color: #fff;
        border:none;
        padding: 0;
    }

    .folderBar .close{
        mask: url('../assets/arrow_drop_down_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
    }

    .folderBar .open{
        mask: url('../assets/arrow_drop_up_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
    }


.folderList .listContents{
    width: 100%;
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0.55vw;
}

.folderList .listToDoHeight{
    max-height: 17.8vw;
}

.folderList .listDoneHeight{
    max-height: 11.09375vw;
}

.folderList .moreMission{
    overflow-y: scroll;
}

.folderList .mention{
    margin-top: 0.55vw;
    width: 100%;
    text-align: left;
    font: normal normal bold 1.25vw 'Open Sans', sans-serif;
    letter-spacing: 0px;
}
</style>