<template>
    <div class="statisticPanel">
        <div class="panelBar">
            <p class="barTitle">Focus Time</p>
        </div>
        <div class="statisticData">
            <div class="dataContents">
                <p class="title">today</p>
                <div class="mainContents">
                    <div class="number">20</div>
                    <p class="units">/tomato</p>
                </div>
            </div>
            <div class="dataContents">
                <p class="title">week</p>
                <div class="mainContents">
                    <div class="number">108</div>
                    <p class="units">/tomato</p>
                </div>
            </div>
        </div>
    </div>

    <div class="analyticPanel">
        <div class="panelBar">
            <p class="barTitle">Chart</p>
            <div class="dateRange">
                <button class="forward"></button>
                <p class="date">2019.7.1 - 2019.7.7</p>
                <button class="backward"></button>
            </div>
        </div>
        <canvas id="theChart" width="100" height="58"></canvas>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Chart, {ChartItem} from 'chart.js/auto';

@Options({
    mounted(){
        let ctx = (document.getElementById('theChart') as HTMLCanvasElement)?.getContext('2d') // node
        // let data_count = [16, 12, 16, 8, 12, 4, 20]
        // let number_cfg = {count: data_count, min:0, max:24} 

        new Chart(ctx as ChartItem, {
            type: 'bar',
            data: {
                labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],
                datasets: [{
                    label: '',
                    data: [16, 12, 16, 8, 12, 4, 20],
                    backgroundColor: [
                        '#ffffff',
                        '#ffffff',
                        '#ffffff',
                        '#ffffff',
                        '#ffffff',
                        '#ffffff',
                        '#FF4384'
                    ]
                }]
            },
            options: {
                datasets:{
                    bar:{
                        barThickness:20
                    }
                },
                plugins:{
                    legend:{
                        display:false
                    }
                },
                scales: {
                    x: {
                        ticks:{
                            color: '#fff',
                            font: {
                                family: "'Open Sans', sans-serif",
                                size: 12,
                                style: 'normal',
                                weight: 'normal'
                            }
                        },
                        grid:{
                            display:false,
                            borderColor: '#fff',
                        }
                    },
                    y: {
                        max: 24,
                        beginAtZero: true,
                        ticks:{
                            color: '#fff',
                            font: {
                                family: "'Open Sans', sans-serif",
                                size: 12,
                                style: 'normal',
                                weight: 'normal'
                            }
                        },
                        grid:{
                            display: false,
                            borderColor: '#fff'
                        }
                    }
                }
            }
        })
    }
})

export default class Analytics extends Vue {

}
</script>

<style>
.statisticPanel{
    width: 100%;
    margin-top: 3.5vw;
    display: flex;
    flex-direction: column;
}

.analyticPanel{
    width: 100%;
    margin-top: 4.6875vw;
    display: flex;
    flex-direction: column;
}

.panelBar{
    width: 100%;
    height: 3.4375vw;
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF33;
    align-items: center;
    margin-bottom: 1.25vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

    .panelBar .barTitle{
        width: 100%;
        height: 2.1875vw;
        margin-left: 1.25vw;
        text-align: left;
        font: normal normal bold 1.875vw/2.1875vw 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
    }

    .panelBar .dateRange{
        width: 16.2vw;
        display: flex;
        flex-direction: row;
        margin-right: 1.25vw;
    }

    .panelBar .dateRange .forward{
        width: 1.875vw;
        height: 1.875vw;
        mask: url('../assets/keyboard_arrow_left_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
        cursor: pointer;
        background-color: #fff;
    }

    .panelBar .dateRange .date{
        margin-left: 0.625vw;
        margin-right: 0.625vw;
        width: 11.17vw;
        height: 1.48vw;
        text-align: left;
        font: normal normal bold 1.25vw/1.875vw 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
    }

    .panelBar .dateRange .backward{
        width: 1.875vw;
        height: 1.875vw;
        mask: url('../assets/keyboard_arrow_right_black_48dp.svg') no-repeat center;
        mask-size: 100% 100%;
        cursor: pointer;
        background-color: #fff;
    }

.statisticData{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
    .statisticData .dataContents{
        display: flex;
        flex-direction: column;
    }

        .statisticData .dataContents .mainContents{
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-top: 0.86vw;
        }

        .statisticData .dataContents .title{
            width: 3.9vw;
            height: 1.4844vw;
            text-align: left;
            font: normal normal bold 1.25vw/2.8125vw 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
        }

            .dataContents .mainContents .number{
                height: 5vw;
                text-align: left;
                font: normal normal bold 5vw/5vw 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #FF4384;
                text-transform: uppercase;
            }

            .dataContents .mainContents .units{
                align-self: flex-end;
                margin-left: 0.625vw;
                height: 1.49vw;
                text-align: left;
                font: normal normal bold 1.25vw/1.25vw 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #FFFFFF33;
                text-transform: uppercase;
                text-transform: uppercase;
            }

</style>