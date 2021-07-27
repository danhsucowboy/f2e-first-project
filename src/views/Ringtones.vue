<template>
    <RingPanel title="work"/>
    <RingPanel title="break"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import RingPanel from '@/components/RingPanel.vue';
@Options({
    components:{
        RingPanel,
    }
})

export default class Ringtones extends Vue {
}
</script>
