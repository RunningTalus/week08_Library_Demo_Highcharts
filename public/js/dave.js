$(document).on('ready', function () {

	$.getJSON('/js/dave.json', function (result) {

		result = _.sortBy(result, function (el){
			return el.data;
		});
		
		var allCities = result.map(function (location) {
			return location.name;
		});	
		
		var allSalaries = result.map(function (salary) {
			return salary.data;
		});



		var highData = {
				chart: {
					type: 'bar',

				},
				title: {
					text: 'Software Developer I Median Salaries',

				},
				subtitle: {
					text: 'Source: Salary.com 5/21/2014'
				},
				xAxis: [{
			    categories: allCities,
                reversed: false,
                labels: {
                  step: 1
                }
            	}], 

				yAxis:{
					min: 34000, 
					title: {
						text:'Median Salary ($USD)', 
						// align: 'center',
					},
					labels: {
						enabled: true,
						overflow: 'justify'
					}
				},
				tooltip:{
					enabled: true
				},
				plotOptions: {
					bar: {
						groupPadding: 1,
						pointWidth: 7,
					}
				},
				legend: {
					enabled: false,
					layout: 'horizontal',
					align: 'tooltip',
					verticalAlign: 'bottom',
					x: -40,
					y: 100,
					floating: false,
					borderWidth: 1,
					backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor || '#FFFFFF'),
					shadow: true
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Salary',
					data: allSalaries
				}]
			};

			$('#container').highcharts(highData);
	});
});