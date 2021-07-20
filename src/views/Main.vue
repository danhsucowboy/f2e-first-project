<template>
    <div class="wrapper">
        <div class="container">
            <div class="main-controller">
                <div class="option">
                    <div class="item">
                        <div class="nav-icon list"></div>
                        <p class="nav-title">to-do list</p>
                    </div>
                    <div class="item">
                        <div class="nav-icon analytics"></div>
                        <p class="nav-title">analytics</p>
                    </div>
                    <div class="item">
                        <div class="nav-icon ringtones"></div>
                        <p class="nav-title">ringtones</p>
                    </div>
                </div>
                <div class="pomodoro">
                    <div class="interface">
                        <div class="count-ui">
                            <div class="process-circle">
                                <button class="play-circle"></button>
                            </div>
                        </div>
                        <div class="timer">25:00</div>
                        <div class="mission">the First thing to do today</div>
                    </div>
                    <div class="bg"></div>
                </div>
            </div>
            <div class="contents">

            </div>
            <div class="menu-wrapper">
                <div class="menu">
                    <button class="cancelBtn">
                        <div class="close"></div>
                    </button>
                </div>
                <div class="title">Pomodoro</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

export default class Main extends Vue {}
</script>

<style>
.wrapper{
    width: 100%;
    height: 100vh;
    background-color: #003164;
}

.wrapper .container{
    margin-left: 6.64vw;
    margin-right: 6.64vw;
    /* width: 100%; */
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr) ;
    column-width: 5vw;
    column-gap: 2.34vw;
}

.wrapper .main-controller{
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.main-controller .option{
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
    background-color: #FF4384;
    margin-right: 0.625vw;
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
    color: #FF4384;
    font: normal normal bold 2.8125vw/2.8125vw Roboto;
    text-transform: uppercase;
    letter-spacing: 0px;
    line-height: 3.28125vw;
    text-align: left;
}

.main-controller .pomodoro{
    width: 27.34vw;
    height: 18.2vw;
    position: relative;
}

.pomodoro .interface{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 10;
}

.pomodoro .interface .count-ui{
    width: 9vw;
    height: 9vw;
    background-color: #003164;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.interface .count-ui .process-circle{
    width: 8.125vw;
    height: 8.125vw;
    border: 2px solid #FF4384;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.count-ui .process-circle .play-circle{
    width: 7.5vw;
    height: 7.5vw;
    background-color: #FF4384;
    mask: url('../assets/play_circle_filled_black_48dp.svg') no-repeat center;
    padding:0;
    border:none;
    mask-size: 115% 115%;
}

.pomodoro .bg{
    position: absolute;
    top:4.53vw;
    left:0%;
    background: #FFEDF7 0% 0% no-repeat padding-box;
    width: 27.34vw;
    height: 27.34vw;
    border-radius: 50%;
    z-index: 0;
}

.wrapper .contents{
    grid-column-start: 6;
    grid-column-end: 11;
}

.wrapper .menu-wrapper{
    width: 100%;
    height: 100%;
    grid-column-start: 12;
    grid-column-end: 13;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

.menu-wrapper .cancelBtn{
    position: relative;
    margin-top: 3.75vw;
    width: 3.75vw;
    height: 3.75vw;
    padding:0;
    border: none;
    background: none;
}

.menu-wrapper .cancelBtn .close{
    text-align: center;
    margin: 0 auto;
    vertical-align: middle;
    width: 2.1875vw;
    height: 2.1875vw;
    background-color: #fff;
    mask: url('../assets/close_black_48dp.svg') no-repeat center;
    -webkit-mask: url('../assets/close_black_48dp.svg') no-repeat center;
}


.menu-wrapper .title{
    margin-bottom: 3.75vw;
    /* align-self: flex-end; */
    width: 2.42vw;
    height: 13vw;
    text-transform: uppercase;
    color: #fff;
    writing-mode: vertical-lr;
    font: normal normal bold 1.875vw/2.5vw Futura;
}
</style>