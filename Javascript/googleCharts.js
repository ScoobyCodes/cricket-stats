google.charts.load('current', {packages: ['calendar']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'date', id: 'Date' });
    dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
    dataTable.addColumn({type: 'string' , role: 'tooltip'});
    dataTable.addRows([
        [ new Date(2017, 5, 1 ), -15 ,'England vs Bangladesh, London(Group A) ' ],
        [ new Date(2017, 5, 2),  -15 , 'Australia vs New Zealand, Birmingham(Group A) '],
        [ new Date(2017, 5, 3), -15,'SriLanka vs SouthAfrica, London(Group B) ' ],
        [ new Date(2017, 5, 4), -15,'India vs Pakistan, Birmingham(Group B) ' ],
        [ new Date(2017, 5, 5), -15,'Australia vs Bangladesh, London(Group A) ' ],

        [ new Date(2017, 5, 6), -15,'England vs NewZealand, Cardiff(Group A) ' ],
        [ new Date(2017, 5, 7), -15,'Pakistan vs SouthAfrica, Birmingham(Group B) ' ],
        [ new Date(2017, 5, 8), -15,'India vs SriLanka, London(Group B) ' ],
        [ new Date(2017, 5, 9), -15,'NewZealand vs Bangladesh, Cardiff(Group A)' ],
        [ new Date(2017, 5, 10), -15, 'England vs Australia, Birmingham(Group A) ' ],
        [ new Date(2017, 5, 11), -15,'India vs SouthAfrica, London(Group B) ' ],
        [ new Date(2017, 5, 12),  -15,'SriLanka vs Pakistan, Cardiff,(Group B) ' ],
        [ new Date(2017, 5, 14), -24 ,'Semifinal 1,Cardiff' ],
        [new Date(2017, 5, 15), -24 , 'Semifinal 2,Birmingham'],
        [new Date(2017, 5, 18), -25 , 'Final,London ']
    ]);
    var dataTable1 = new google.visualization.DataTable();
    dataTable1.addColumn({ type: 'date', id: 'Date' });
    dataTable1.addColumn({ type: 'number', id: 'Won/Loss' });
    dataTable1.addColumn({type: 'string' , role: 'tooltip'});
    dataTable1.addRows([
        [ new Date(2017, 5, 24 ), -15 ,'New Zealand Vs Sri Lanka County Ground, Bristol' +
        '                               and India Vs England	County Ground, Derby ' ],
        [ new Date(2017, 5, 25),  -15 ,'South Africa Vs Pakistan	Grace Road, Leicester '],
        [ new Date(2017, 5, 26), -15,'Australia Vs West Indies	The Cooper Associates County Ground,Taunton ' ],
        [ new Date(2017, 5, 27), -15,'England Vs Pakistan	Grace Road, Leicester ' ],
        [ new Date(2017, 5, 28), -15,'South Africa Vs New Zealand	County Ground, Derby' ],
        [ new Date(2017, 5, 29), -15,'India Vs West Indies	The Cooper Associates County Ground,Taunton and Sri Lanka Vs Australia	County Ground, Bristol' ],
        [ new Date(2017, 6, 2), -15,'England Vs Sri Lanka The Cooper Associates County Ground, Taunton , Australia Vs New Zealand  County Ground, Bristol , India Vs Pakistan  County Ground, Derby and South Africa Vs West Indies Grace Road, Leicester' ],
        [ new Date(2017, 6, 5), -15,'England Vs South Africa County Ground, Bristol ,India Vs Sri lanka County Ground, Derby and Pakistan Vs Australia	Grace Road, Leicester ' ],
        [ new Date(2017, 6, 6), -15,'New Zealand Vs West Indies The Cooper Associates County Ground, Taunton' ],
        [ new Date(2017, 6, 8), -15,'New Zealand Vs Pakistan The Cooper Associates County Ground, Taunton and South Africa Vs Indian Grace Road, Leicester ' ],
        [ new Date(2017, 6, 9), -15,'South Africa Vs Australia	The Cooper Associates County Ground, Taunton and England Vs West Indies	County Ground, Bristol'],
        [ new Date(2017, 6, 11),  -15,'West Indies Vs Pakistan	Grace Road, Leicester'],
        [ new Date(2017, 6, 12),  -15,'Sri Lanka Vs South Africa The Cooper Associates County Ground, Taunton, Australia Vs India County Ground, Bristol and England Vs New Zealand	County Ground, Derby ' ],
        [ new Date(2017, 6, 15),  -15,'South Africa vs Australia The Cooper Associates County Ground, Taunton , England Vs West Indies 	County Ground, Bristol, India Vs New Zealand County Ground, Derby and Pakistan Vs Sri Lanka	Grace Road, Leicester' ],
        [ new Date(2017, 6, 18), -24 ,'Semifinal 1,Bristol' ],
        [new Date(2017, 6, 20), -24 , 'Semifinal 2,Derby'],
        [new Date(2017, 6, 23), -25 , 'Final,London ']
    ]);
    var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));
    var chart1 = new google.visualization.Calendar(document.getElementById('calendar_basic1'));
    var options = {
        title: "CHAMPIONS TROPHY ",
        height: 350,
        calendar: {
            focusedCellColor: {
                stroke: '#d3362d',
                strokeOpacity: 1,
                strokeWidth: 1,
            }
        }
    };
    var options1 = {
        title: "ICC WOMEN'S WORLD CUP",
        height: 350,
        calendar: {
            focusedCellColor: {
                stroke: '#d3362d',
                strokeOpacity: 1,
                strokeWidth: 1,
            }
        }
    };
    chart1.draw(dataTable1,options1)
    chart.draw(dataTable, options);
}

function addchart() {
    $('.module21')[0].setAttribute("id","calendar_basic");
    $('.module22')[0].setAttribute("id","calendar_basic1")
    drawChart();

}

function addCarousel() {
    $('.carousel').carousel() ;
}