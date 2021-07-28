<template>
    <div class="selectionPanel">
        <div class="panelBar">
            <p class="barTitle">{{title}}</p>
        </div>
        <div class="radioPanel">
            <RingItem v-for="(selection, index) in selections" :key="index" :toneName="selection"/>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import RingItem from '@/components/Ring/RingItem.vue';

@Options({
    components: {
        RingItem,
    },
    props:{
        title: String,
    }
})

export default class RingPanel extends Vue {
    title!: string
    selections = [
        'none', 'Default', 'alarm',
        'alert', 'beep', 'bell',
        'bird', 'bugle', 'digital',
        'drop', 'horn', 'music',
        'ring', 'warning', 'whistle'
    ]
}
</script>

<style>
.selectionPanel{
    width: 100%;
    margin-top: 3.5vw;
    display: flex;
    flex-direction: column;
}
    .selectionPanel .panelBar{
        width: 100%;
        height: 3.4375vw;
        display: flex;
        flex-direction: row;
        background-color: #FFFFFF33;
        align-items: center;
        margin-bottom: 1.25vw;
    }

        .selectionPanel .panelBar .barTitle{
            width: 100%;
            height: 2.1875vw;
            margin-left: 1.25vw;
            text-align: left;
            font: normal normal bold 1.875vw/2.1875vw 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
        }
    
    .selectionPanel .radioPanel{
        width: 100%;
        height: 14vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>