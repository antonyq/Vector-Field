const TORNADOS = [
    new Tornado(-0.5, -0.5),
    new Tornado(0, -0.5),
    new Tornado(0.5, -0.5),
    new Tornado(-0.5, 0),
    new Tornado(0, 0),
    new Tornado(0.5, 0),
    new Tornado(-0.5, 0.5),
    new Tornado(0, 0.5),
    new Tornado(0.5, 0.5)
]
var [marker, time, tale] = [new Marker(random(-0.5, 0.5), random(-0.5, 0.5)), null, null];

window.onload = () => {
    time = Number(prompt('Running time(ms):', 6000));
    tale = Number(prompt('Tale length(points):', 100));
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
    var points = [['X', 'Y']].concat(TORNADOS.map((tornado) => [tornado.x, tornado.y]));
    const plot = document.getElementById('plot');
    const options = {
        title: 'VECTOR FIELD',
        pointSize: 2,
        colors: ['#C06'],
        width: plot.style.width, 
        height: plot.style.height,
        hAxis: {title: 'X', minValue: -0.5, maxValue: 0.5},
        vAxis: {title: 'Y', minValue: -0.5, maxValue: 0.5},
        legend: 'none'
    }    
    const running = setInterval(() => {
        points.push([marker.x, marker.y]);
        if (points.length > 100) points.splice(TORNADOS.length + 1, 1);
        if (points.length < TORNADOS.length + 3) marker.euler(TORNADOS);
        else marker.adams(points, TORNADOS);
        (new google.visualization.ScatterChart(plot)).draw(google.visualization.arrayToDataTable(points), options);
    }, 1);
    setTimeout(() => {
        clearInterval(running);
    }, time);
}