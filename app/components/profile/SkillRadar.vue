<template>
    <div class="skill-radar">
        <h3 class="skill-radar-title">{{ title }}</h3>

        <ClientOnly>
            <div class="chart-wrapper">
                <Radar :data="chartData" :options="chartOptions" />
            </div>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Radar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    type ChartOptions
} from 'chart.js'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

const props = defineProps<{
    title: string
    labels: string[]
    values: number[]
}>()

const chartData = computed(() => ({
    labels: props.labels,
    datasets: [
        {
            label: props.title,
            data: props.values,
            backgroundColor: 'rgba(245, 166, 35, 0.25)',
            borderColor: 'rgba(245, 166, 35, 1)',
            pointBackgroundColor: 'rgba(245, 166, 35, 1)',
            pointBorderColor: '#fff',
            borderWidth: 2
        }
    ]
}))

const chartOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            suggestedMin: 0,
            suggestedMax: 5,
            ticks: {
                stepSize: 1,
                showLabelBackdrop: false
            },
            angleLines: {
                color: '#eee'
            },
            grid: {
                color: '#eee'
            },
            pointLabels: {
                font: {
                    size: 11
                }
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}
</script>

<style scoped>
.skill-radar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 320px;
}

.skill-radar-title {
    margin: 0 0 6px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
}

/* グラフ本体の入れ物 */
.chart-wrapper {
    position: relative;
    width: 100%;
    height: 220px;
}

.chart-wrapper canvas {
    width: 100% !important;
    height: 100% !important;
}
</style>
