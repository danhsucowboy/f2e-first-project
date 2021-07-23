<template>
    <button :class="missionStatus" @click="missionChecked"></button>
    <div class="missionTitle" :class="textDecorate">{{content}}</div>
    <button v-if="folderTitle !== 'done'" class="starter"></button>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    props: {
        content: String,
        folderTitle: String,
        id: Number
    },
    emits: {
        checked: Number,
        unchecked: Number
    }
})

export default class MissionItem extends Vue{
    checked!: number
    unchecked!: number
    content!: string
    folderTitle!: string
    id!: number
    missionStatus = 'uncheck'
    textDecorate = ''

    created(){
        if(this.folderTitle === 'done'){
            this.missionStatus = 'check'
            this.textDecorate = 'line-through'
        }
    }

    missionChecked(){
        if(this.missionStatus === 'uncheck'){
            this.$emit('checked', this.id)
        }
        else{
            // this.missionStatus = 'uncheck'
            // this.textDecorate = ''
            this.$emit('checked', this.id)
        }   
    }
}
</script>

<style>
.line-through{
    text-decoration: line-through;
}

.listItem{
    width: 100%;
    height: 2.5vw;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 2px solid #FFFFFF33;
    margin-top: 0.7vw;
}

    .listItem .uncheck{
        width: 1.875vw;
        height: 1.875vw;
        background-color: #fff;
        mask: url('../assets/radio_button_unchecked_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
        cursor: pointer;
    }

    .listItem .check{
        width: 1.875vw;
        height: 1.875vw;
        background-color: #fff;
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
        color: #FFFFFF;
        text-transform: uppercase;
    }

    .listItem .starter{
        width: 1.875vw;
        height: 1.875vw;
        background-color: #fff;
        mask: url('../assets/play_circle_outline_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
    }
</style>