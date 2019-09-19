const CHART = document.getElementById('myChart').getContext('2d');
//ctx means context = chart

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        xAxisID: "Time [s]",
        yAxisID: "Temperature [C]",
        //labels is the x axis vector
        //each data in datasets is the y axis vector
        //border means line for chartjs
        datasets: [
            {
                label: "Dataset 1",
                fill: false,
                lineTension: 0,
                borderColor: "rgba(255,0,0,1)",
                backgroundColor: "rgba(255,0,0,1)",
                pointBackgroundColor: "rgba(255,0,0,1)",
                data: [4, 4, 3, 4, 5, 6, 7, 8, 9],
            },
            {
                label: "Dataset 2",
                fill: false,
                lineTension: 0,
                borderColor: "rgba(0,0,255,1)",
                backgroundColor: "rgba(0,0,255,1)",
                pointBackgroundColor: "rgba(0,0,255,1)",
                data: [5, 9, 3, 2, 6, 3, 3, 3, 8],
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                type: 'linear',
                ticks: {
                    max: 10,
                    min: 0,
                }
            }]
        },
        title: {
            display: true,
            text: 'Karl made a Web Chart'
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: 'rgb(0, 0, 0)'
            }
        }
    }
})
