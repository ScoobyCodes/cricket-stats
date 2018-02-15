google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'RunsScored'],
        ['Australia',     974],
        ['England',      1012],
        ['Pakistan',  1899],
        ['SouthAfrica', 1309],
        ['SriLanka',    1662],
        ['Bangladesh',    197],
        ['Scotland',    10],
        ['WestIndies',    1348],
        ['Zimbawe',    885],
        ['NewZealand',    1032],
    ]);
    var data1 = google.visualization.arrayToDataTable([
        ['Country', 'RunsScored'],
        ['Australia',     2116],
        ['England',      1950],
        ['Pakistan',  1236],
        ['SouthAfrica', 1252],
        ['SriLanka',    1508],
        ['Bangladesh',    560],
        ['WestIndies',    1978],
        ['Zimbawe',    979],
        ['NewZealand',    1659],
    ]);
    var options = {
        title: "PERFORMANCE BY COUNTRY(in ODI's)",
        wmode: 'opaque' ,
    };
    var options1 = {
        title: "PERFORMANCE BY COUNTRY(in Test)",
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
    chart.draw(data, options);
    chart1.draw(data1,options1);
}