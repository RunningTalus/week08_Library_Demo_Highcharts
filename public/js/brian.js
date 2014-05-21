$(document).on('ready', function() {

    $.getJSON("/js/brian.json", function(data) {
        // console.log('the-data-', data);

        var categories = data.categories;
        var malePopulation = data.malePopulation.map(function(item) {
            return -item;
        });
        var femalePopulation = data.femalePopulation.slice(0);

        $('#the-chart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid for New Orleans, midyear 2010'
            },
            subtitle: {
                text: 'Source: www.census.gov'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function() {
                        return (Math.abs(this.value) / 1000) + 'Thous';
                    }
                },
                min: -18000,
                max: 18000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function() {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Male',
                data: malePopulation
            }, {
                name: 'Female',
                data: femalePopulation

            }]
        });


    })

})