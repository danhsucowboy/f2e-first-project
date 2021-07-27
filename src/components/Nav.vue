<template>
  <div class="option" :class="{alignEnd: titleHide}">
    <router-link to="/" :class="checkLink('ToDoList')" class="item" @click="linkClicked">
      <div class="nav-icon list"></div>
      <p class="nav-title" v-if="!titleHide">to-do list</p>
    </router-link>
    <router-link to="/analytics" :class="checkLink('Analytics')" class="item" @click="linkClicked">
      <div class="nav-icon analytics"></div>
      <p class="nav-title" v-if="!titleHide">analytics</p>
    </router-link>
    <router-link to="/ringtones" :class="checkLink('Ringtones')" class="item" @click="linkClicked">
      <div class="nav-icon ringtones"></div>
      <p class="nav-title" v-if="!titleHide">ringtones</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    props: {
        titleHide: Boolean
    },
    emits: {
        panelStatus: Boolean
    }
})

export default class Nav extends Vue{
    titleHide!: boolean
    panelStatus!: boolean
    // missionsNav!: Array<string>
    // finishedNav!: Array<string>
    checkLink(linkName: string){
        return{
            iconDefaultColor: this.$route.name!==linkName && !this.titleHide,  
            iconPrimaryColor: this.$route.name===linkName && !this.titleHide, 
            iconSecColor: this.titleHide
        }
    }

    linkClicked(){
        // this.titleHide = false;
        this.$emit('panelStatus', true);
    }
}
</script>

<style>

.alignEnd{
    align-items: flex-end;
}

.option{
    margin-top:3.5vw;
    height: 16.4vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.option .item{
    display: flex;
}

.option .item .nav-icon{
    width: 3.28125vw;
    height: 3.28125vw;
    /* background-color: #FFFFFF33; */
}

.iconPrimaryColor .nav-icon{
    background-color: #FF4384; 
}

.iconSecColor .nav-icon{
    background-color: #FFFFFF; 
}

.iconDefaultColor .nav-icon{
    background-color: #FFFFFF33; 
}

.option .item:hover .nav-icon{
    background-color: #FF4384;
}

.option .item .list{
    mask: url('../assets/list_black_48dp.svg') no-repeat center;
    mask-size: 2.8125vw 2.8125vw;
}

.option .item .analytics{
    mask: url('../assets/poll_black_48dp.svg') no-repeat center;
    mask-size: 2.8125vw 2.8125vw;
}

.option .item .ringtones{
    mask: url('../assets/library_music_black_48dp.svg') no-repeat center;
    mask-size: 2.8125vw 2.8125vw;
}

.option .item .nav-title{
    flex-grow: 1;
    height: 3.28125vw;
    font: normal normal bold 2.8125vw/2.8125vw 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0px;
    line-height: 3.28125vw;
    text-align: left;
    margin-left: 0.625vw;
}

.option .item:hover .nav-title{
    color: #FF4384;
}

.iconPrimaryColor .nav-title{
    color: #FF4384; 
}

.iconDefaultColor .nav-title{
    color: #FFFFFF33; 
}
</style>