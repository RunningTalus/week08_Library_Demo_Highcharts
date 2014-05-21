$(function () {
    $('#top-employers-data').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Top Employeers in Jefferson City, Missouri'
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
        series: [{
            type: 'pie',
            name: 'Top Employeers',
            data: [
                ['State of Missouri',   67.8],
                ['Scholastic',       5.5],
                ['Capital Regional Medical Center',    5.4],
                ['St. Mary\'s Health Center',     4.4],
                ['Jefferson City Public School District',   4.1],
                ['Wal-Mart', 2.9],
                ['Central Bank', 2.8],
                ['ABB Inc.', 2.8],
                ['Jefferson City Medical Group', 2.1],
                ['RR Donnelley', 1.9]
            ]
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




});