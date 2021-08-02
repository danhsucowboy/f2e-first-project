<template>
    <div class="timer" 
        :class="{
            workColor: timerProp.status,
            breakColor: !timerProp.status}">
            {{timerProp.currentId > 0 ? showCountingTime : 'Clear'}}
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'

@Options({
    props:{
        timerProp:{
            status: Boolean,
            currentId: Number,
            processMode: Number,
            timeUnit: Number,
            processMin: Number,
            processSec: Number,
        }
    },
    data(){
        return{
            delayTime: 0,
            rightDuration: 0,
            leftDuration: 0
        }
    }
})

export default class Orologio extends Vue{
    timerProp!:{
        status: boolean,
        currentId: number,
        mode: number,
        timeUnit: number,
        processMin:number,
        processSec: number
    }

    get showCountingTime(): string{
        if(this.timerProp.currentId > 0){
            if(this.timerProp.mode === 0){
                if(this.timerProp.timeUnit <10)
                    return `0${this.timerProp.timeUnit}:00`
                return this.timerProp.timeUnit + ":00"
            }
            else{
                if(this.timerProp.processMin <10 && this.timerProp.processSec < 10)
                    return `0${this.timerProp.processMin}:0${this.timerProp.processSec}`
                else if(this.timerProp.processMin <10)
                    return `0${this.timerProp.processMin}:${this.timerProp.processSec}`
                else if(this.timerProp.processSec < 10)
                    return `${this.timerProp.processMin}:0${this.timerProp.processSec}`
                else
                    return `${this.timerProp.processMin}:${this.timerProp.processSec}`
            }
        }
        else
            return 'Clear'
    }
}
</script>

<style>
.timer{
    width: 13vw;
    height: 6vw;
    text-align: center;
    font: normal normal bold 5vw/6vw 'Open Sans', sans-serif;
}
</style>