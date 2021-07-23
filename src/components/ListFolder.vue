<template>
    <div class="folderList">
        <div class="folderBar" @click="foldList">
            <p class="folderTitle">{{title}}</p>
            <div class="folderBtn" :class="{open : unfolded, close : !unfolded}"></div>
        </div>
        <div class="listContents" v-if="unfolded">
            <div class="listItem" v-for="(mission, index) in missions" :key="index">
                <MissionItem :folderTitle="title" :content="mission" :id="index" @checked="getCheckedId"/>
            </div>

            <div class="listItem" v-if="checkListEmpty">
                <div class="missionTitle">{{title === 'done' ? 'Empty' : 'Clear'}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import MissionItem from '@/components/MissionItem.vue';

@Options({
    components: {
        MissionItem,
    },
    props: {
        id: Number,
        title: String,
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
        itemChecked: Number
    },
    computed: {
        checkListEmpty(){
            if(this.missions.length >= 1)
                return false
            return true
        }
    },
    // data(){
    //     return{
    //         outputId:0
    //     }
    // }
})

export default class ListFolder extends Vue{
    id!: number
    title!: string
    itemChecked!: number
    itemUnChecked!: number
    // outputId = 0
    missions!: Array<string>
    foldedSetting!: boolean
    unfolded = this.foldedSetting;

    foldList(){
        this.unfolded = !this.unfolded
    }

    getCheckedId(value: number){
        // this.outputId = value
        this.$emit('itemChecked', value)
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
    /* overflow-y: scroll; */
    background: none;
    display: flex;
    flex-direction: column;
    margin-top: 0.55vw;
}
    .folderList .listContents .listItem{
        width: 100%;
        height: 2.5vw;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        border-bottom: 2px solid #FFFFFF33;
        margin-top: 0.7vw;
    }
</style>