<template>
    <div class="radioItem">
        <button :class="{radioUnCheck: !inputStatus, radioCheck: inputStatus}" 
            @click="ringChecked()">
            <!-- <audio src='../assets/audio/"Alarm Clock".mp3'></audio> -->
        </button>
        <div class="itemName">{{toneName}}</div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    props:{
        toneId: Number,
        toneName: String,
        inputStatus: Boolean,
    },
    emits: {
        selectedId: Number
    }
})

export default class RingItem extends Vue {
    toneId!: number
    toneName!: string
    inputStatus!: boolean
    selectedId!: number
    // sound = '/src/assets/audio/alarm-clock.mp3' 

    ringChecked():void{
        this.$emit('selectedId', this.toneId)
        // new Audio(this.sound).play();
    }

}
</script>

<style>
.radioItem{
    width: 27%;
    margin-bottom: 1.2vw;
    display: flex;
}

    .radioItem .radioUnCheck{
        width: 1.875vw;
        height: 1.875vw;
        mask: url('../../assets/radio_button_unchecked_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
        cursor: pointer;
        background-color: #fff;
    }

    .radioItem .radioCheck{
        width: 1.875vw;
        height: 1.875vw;
        mask: url('../../assets/radio_button_checked_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
        cursor: pointer;
        background-color: #FF4384;
    }

    .radioItem .itemName{
        margin-left: 0.3125vw;
        text-align: left;
        font: normal normal bold 1.25vw/1.875vw 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
}
</style>