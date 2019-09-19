const CHART = document.getElementById('myChart').getContext('2d');

var timeVec = [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5]; //x axis
var dataSet1 = [4, 4, 3, 4, 5, 6, 7, 8, 9];//y values for dataSet1
var dataSet2 = [5, 9, 3, 2, 6, 3, 3, 3, 8];//y values for dataSet2
var yRange = [0, 10];//range of y axis
var xRange = [0, 8]; //max of x is limited by max of timevec
var xStepSize = 0.5;

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: timeVec,
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
                data: dataSet1
            },
            {
                label: "Dataset 2",
                fill: false,
                lineTension: 0,
                borderColor: "rgba(0,0,255,1)",
                backgroundColor: "rgba(0,0,255,1)",
                pointBackgroundColor: "rgba(0,0,255,1)",
                data: dataSet2
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time [s]',
                },
                ticks: {
                    maxTicksLimit: 200,
                    precision: 20,
                    stepSize: 0.25,
                    max: xRange[1],
                    min: 0,
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Pressure [psi]',
                },
                ticks: {
                    max: yRange[1],
                    min: yRange[0],
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
