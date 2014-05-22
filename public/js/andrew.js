$(function() {
    // top employers function
    $.getJSON('/js/andrew.json', function(data){
        // console.log("data", data);
        // doing the for loop outside of the series
        var employerData = [];
        for (var i = 0; i < data.length; i++) {
            employerData.push([data[i].employer, data[i].percentage]);
        };
        $('#top-employers-data').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Top Employeers'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            // top employers data
            series: [{
                type: 'pie',
                name: 'Top Employeers',
                data: employerData

                    // [data.employer, data.percentage * 100]
                    // [data.employer, data.percentage * 100],
                    // ['State of Missouri',   67.8],
                    // ['Scholastic',       5.5]
                    // ['Capital Regional Medical Center',    5.4],
                    // ['St. Mary\'s Health Center',     4.4],
                    // ['Jefferson City Public School District',   4.1],
                    // ['Wal-Mart', 2.9],
                    // ['Central Bank', 2.8],
                    // ['ABB Inc.', 2.8],
                    // ['Jefferson City Medical Group', 2.1],
                    // ['RR Donnelley', 1.9]
                
            }],
        });

        // population function
        $('#population-data').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Historical Population Change'
                    },
                    subtitle: {
                        text: 'Source: wikipedia.org'
                    },
                    xAxis: {
                        categories: [
                            '1860',
                            '1870',
                            '1880',
                            '1890',
                            '1900',
                            '1910',
                            '1920',
                            '1920',
                            '1930',
                            '1940',
                            '1950',
                            '1960',
                            '1970',
                            '1980',
                            '1990',
                            '2000',
                            '2010'
                        ]
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Population'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },

                    // population data 
                    series: [{
                        name: 'Population ',
                        data: [3082, 4420, 5271, 6742, 9664, 11850, 14490, 21596, 24268, 25099, 28228, 32407, 33619, 35481, 39636, 43079]
                    },{
                        name: 'Percentage Increase',
                        data: [0, 43.4, 19.3, 27.9, 43.4, 22.6, 22.3, 49, 12.4, 3.4, 12.5, 14.8, 3.7, 5.5, 11.7, 8.7].map(function(perc){
                            return perc * 1000;
                        })
                    }]
                });

            // max/min temps
            $('#climate-data').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Average min/max temperatures (C°)'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Average Low',
                data: [-6.7, -4.7, .1, 6.2, 11.7, 17.1, 19.6, 18.6, 13.3, 6.7, 1.1, -5 ]
            }, {
                name: 'Average High',
                data: [4.4, 7.4, 13.1, 19.3, 23.9, 28.6, 31.3, 31, 26.6, 20.3, 13.2, 5.8]
            }]
        });

        // custom carousel
        $('#myCarousel').carousel({
            interval:   4000
        });
        
        var clickEvent = false;
        $('#myCarousel').on('click', '.nav a', function() {
                clickEvent = true;
                $('.nav li').removeClass('active');
                $(this).parent().addClass('active');        
        }).on('slid.bs.carousel', function(e) {
            if(!clickEvent) {
                var count = $('.nav').children().length -1;
                var current = $('.nav li.active');
                current.removeClass('active').next().addClass('active');
                var id = parseInt(current.data('slide-to'));
                if(count == id) {
                    $('.nav li').first().addClass('active');    
                }
            }
            clickEvent = false;
        });


    }).fail(function() {
        // refers to all arguments
        console.log( "error", arguments );
  });

});