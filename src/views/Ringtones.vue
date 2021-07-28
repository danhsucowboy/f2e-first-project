<template>
    <RingPanel title="work" 
        :selectedRing="workRing"
        @newSelectedRing="getNewWorkRing"/>
    <RingPanel title="break" 
        :selectedRing="breakRing"
        @newSelectedRing="getNewBreakRing"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import RingPanel from '@/components/Ring/RingPanel.vue';
@Options({
    components:{
        RingPanel,
    },
    props:{
        workRing: Number,
        breakRing: Number
    },
    emits: {
        newWorkRing: Number,
        newBreakRing: Number
    }
})

export default class Ringtones extends Vue {
    workRing!: number
    breakRing!: number
    newWorkRing!: number
    newBreakRing!: number

    getNewWorkRing(value: number): void{
        this.$emit('newWorkRing',value)
    }

    getNewBreakRing(value: number): void{
        this.$emit('newBreakRing',value)
    }
}
</script>
