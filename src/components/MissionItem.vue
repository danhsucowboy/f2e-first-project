<template>
    <div class="listItem" 
        :class="{
            borderPrimaryColor: itemProps.panelOpen,
            borderSecColor: !itemProps.panelOpen}" 
        >
        <button :class="[missionStatus, 
        {bgWhite: itemProps.panelOpen, 
         bgPrimaryColor: !itemProps.panelOpen}]" 
        @click="missionChecked"></button>
        <div class="missionTitle" 
            :class="[textDecorate,
                 {white: itemProps.panelOpen,
                  primaryColor: !itemProps.panelOpen}
                  ]"
            @click="missionStart">
            {{itemProps.item.contents}}</div>
        <button 
            v-if="itemProps.folderTitle !== 'done'" 
            class="starter" 
            :class="{
                bgWhite: itemProps.panelOpen,
                bgPrimaryColor: !itemProps.panelOpen}"
            @click="missionStart"></button>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ToDoItem from '@/todoprop';
@Options({
    props: {
        itemProps: {
            panelOpen: Boolean,
            folderTitle: String,
            item: Object as () => ToDoItem,
            currentId: Number
        }
    },
    emits: {
        clickId: Number,
        newProcessItem: Number
    },
    computed: {
        checkMode(){
            if(this.itemProps.panelOpen)
                return true
            else{
                if(this.itemProps.item.id !== this.itemProps.currentId)
                    return true
                else
                    return false
            }
        }
    }
})

export default class MissionItem extends Vue{
    clickId!: number
    newProcessItem!: number
    itemProps!: {
        panelOpen: boolean,
        folderTitle: string,
        item:ToDoItem,
        currentId: number
    }
    missionStatus = 'uncheck'
    textDecorate = ''

    created(){
        if(this.itemProps.folderTitle === 'done'){
            this.missionStatus = 'check'
            this.textDecorate = 'line-through'
        }
    }

    missionChecked(){
        this.itemProps.item.checkStatus = !this.itemProps.item.checkStatus
    }

    missionStart(){
       this.$emit('newProcessItem', this.itemProps.item.id)
    }
}
</script>

<style>
.line-through{
    text-decoration: line-through;
}

.white{
    color: #fff;
}

.bgWhite{
    background-color: #fff;
}

.primaryColor{
    color: #003164;
}

.bgPrimaryColor{
    background-color: #003164;
}

.borderPrimaryColor{
    border-bottom: 1px solid #FFFFFF33;
}

.borderSecColor{
    border-bottom: 1px solid #00000033;
}

.listItem{
    width: 100%;
    height: 2.5vw;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0.7vw;
}

    .listItem .uncheck{
        width: 1.875vw;
        height: 1.875vw;
        mask: url('../assets/radio_button_unchecked_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
        cursor: pointer;
    }

    .listItem .check{
        width: 1.875vw;
        height: 1.875vw;
        mask: url('../assets/check_circle_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
        cursor: pointer;
    }


    .listItem .missionTitle{
        margin-left: 0.3125vw;
        width: 100%;
        text-align: left;
        font: normal normal bold 1.25vw 'Open Sans', sans-serif;
        letter-spacing: 0px;
        text-transform: uppercase;
        cursor: pointer;
    }

    .listItem .starter{
        width: 1.875vw;
        height: 1.875vw;
        mask: url('../assets/play_circle_outline_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
        cursor: pointer;
    }
</style>