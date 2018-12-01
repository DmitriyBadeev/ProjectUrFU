
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data1 = google.visualization.arrayToDataTable([
        ['стаж', 'зарплата'],
        ['до 1 года', 60000],
        ['от 1 до 3 лет', 75000],
        ['от 3 до 6 лет',  87500],
    ]);

    var data2 = google.visualization.arrayToDataTable([
        ['стаж', 'зарплата'],
        ['до 1 года', 21100],
        ['от 1 до 3 лет', 30000],
        ['от 3 до 6 лет',  40000],
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
    data.addColumn('number', 'Вакансии на одном популярном портале для поиска работы');

    data.addRows([
        [2010, 205],   [2011, 242],  [2012, 287],  [2013, 357],  [2014, 421],  [2015, 452],
        [2016, 562]
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
            height: 280,
        },
        height: 440,
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