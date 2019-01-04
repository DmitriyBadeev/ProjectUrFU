
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data1 = google.visualization.arrayToDataTable([
        ['стаж', 'зарплата'],
        ['до 1 года', 60000],
        ['от 1 до 3 лет', 75000],
        ['от 3 лет',  87500],
    ]);

    var data2 = google.visualization.arrayToDataTable([
        ['стаж', 'зарплата'],
        ['до 1 года', 21100],
        ['от 1 до 3 лет', 30000],
        ['от 3 лет',  40000],
    ]);

    var options1 = {
        title: 'Москва',
        titleTextStyle: {
            fontSize: 25,
            color: 'black'
        },
        pieHole: 0.3,
        pieSliceTextStyle: {
            color: 'white',

        },
        backgroundColor: '#F9F9F9',
        pieSliceText: 'value',
        legend: {
            position: 'bottom',
        }
    };

    var options2 = {
        title: 'Регионы',
        titleTextStyle: {
            fontSize: 25,
            color: 'black'
        },
        pieHole: 0.3,
        pieSliceTextStyle: {
            color: 'white',

        },
        backgroundColor: '#F9F9F9',
        pieSliceText: 'value',
        legend: {
            position: 'bottom',
        }
    };

    var data = google.visualization.arrayToDataTable([
        ['Год', 'Средний возраст выпускников', 'Средняя зарплата (тыс. руб.)', 'Процент трудоустройства'],
        ['2014', 22.8, 26.336, 73.3],
        ['2015', 23.2, 35.807, 84.8],
        ['2016', 23.1, 49.378, 89.3]
    ]);

    var options = {
        height: 400,
        backgroundColor: '#F9F9F9',
        legend: {
            position: 'bottom',
        },
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
    chart.draw(data, google.charts.Bar.convertOptions(options));

    var chart1 = new google.visualization.PieChart(document.getElementById('moscow'));
    var chart2 = new google.visualization.PieChart(document.getElementById('region'));
    chart1.draw(data1, options1);
    chart2.draw(data2, options2);
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Среднее кол-во вакансий за год на hh.ru');

    data.addRows([
        [2010, 205],   [2011, 242],  [2012, 287],  [2013, 357],  [2014, 421],  [2015, 452],
        [2016, 562], [2017, 610], [2018, 825]
    ]);

    var options = {
        hAxis: {
            title: 'Год',
            format: '# ',
            gridlines: {
                count: 7
            },
            titleTextStyle: {
                italic: false,
                fontSize: 20,
            }
        },
        vAxis: {
            title: 'Кол-во вакансий',
            titleTextStyle: {
                italic: false,
                fontSize: 20,
            }

        },
        backgroundColor: '#F9F9F9',
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out',
        },
        chartArea: {
            height: 300,
        },
        height: 450,
        colors: ['#DC3912'],
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 500) {
        document.getElementById('up').style.display = 'block';
        document.getElementById('vk_community_messages').style.display = 'block';
    } else {
        document.getElementById('up').style.display = 'none';
        document.getElementById('vk_community_messages').style.display = 'none';
    }
  }

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

