$('.andrew-graph').addClass();
$('#top-employers-data').css("visibility","visible");
$(function() {
    // IDs for the rendered graphs
// #top-employers-data
// #population-data
// #climate-data
   
   // function call to hide to easily hide all the graphs
   var hideAll = function(){
       $('.andrew-graph').hide();
   };
   // hideAll();

    // hide all the graphs on page load
    // when you click on graph 1, show that graph
    $('.graph-1').on('click',function(){
        hideAll();
        $('#top-employers-data').show();
    })
    
    $('.graph-2').on('click',function(){  
        hideAll();
        $('#population-data').show();
    });

    $('.graph-3').on('click',function(){
        hideAll();
        $('#climate-data').show();
    })

    // top employers function
    $.getJSON('/api/data', function(data){
        // console.log("data", data);
        // doing the for loop outside of the series
        var employerData = [];
        for (var i = 0; i < data.employerData.length; i++) {
            employerData.push([data.employerData[i].employer, data.employerData[i].percentage]);
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
            }],
        });

        // population function
        $('#population-data').highcharts({
                    chart: {
                        type: 'column'
                        // width: '100'
                    },
                    title: {
                        text: 'Historical Population Change'
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: data.populationData.map(function(item){
                                return item.date
                        })
                    },
                    yAxis: [{
                        min: 0,
                        title: {
                            text: 'Population'
                        }
                    },
                    {
                        min: 0,
                        title: {
                            text: 'Percentage Increase'
                        },
                        opposite: true
                    }],
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
                        yAxis: 0,
                        name: 'Population ',
                        data: data.populationData.map(function(item){
                                return item.populationData
                        })
                    },{
                        yAxis: 1,
                        type: 'spline',
                        name: 'Increase % ',
                        data: data.populationData.map(function(item){
                                return item.percentData;
                        })
                        // .map(function(perc){
                        //     return perc * 1000;
                        // })
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
                text: ''
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
                data: data.tempData.map(function(item){
                    return item.min;
                })
            }, {
                name: 'Average High',
                data: data.tempData.map(function(item){
                    return item.max
                })
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