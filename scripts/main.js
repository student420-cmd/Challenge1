
var optionsLine = { 
	responsive: true,
	legend:{
		display:false,
		fontColor:'#000'
	},
	scales:{
		yAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-Din',
				fontSize:14
			}
		}],
		xAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-DIN',
				fontSize:14
			}
		}]
	}
};

var dataLine = {
	labels: ['0','20','40','60','80','100','120','140','140','160','180','200','220','240','260','280','300','320','340','360','380','400','420','440','460','480','500'],
	datasets:[
		{
			label:'Distance Traveled',
			fillColor: 'rgba(255,255,255,1)',
			strokeColor: 'rgba(255,255,255,1)',
			pointColor: 'rgba(255,255,255,1)',
			pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
			backgroundColor:'#000',
			borderColor:'#fff',
			radius:3,
			pointHoverBackgroundColor:'black',
			pointHoverRadius:10,
			pointHoverBorderWidth:3,
			fontColor:'white',
			scaleFontColor: "#FFFFFF",
			pointBackgroundColor:'white',
			data:[0,1244,5377,11617,19672,31412,44726,57396,67893,77485,85662,92481,98004,102301,105321,107449,108619,109789,110959,112129,113299,114469,115639,116809,117979,119149,120319]
		}
	]
};

var optionsPolar = {
	responsive: true,
	legend:{
		labels:{
			fontColor:'white',
			fontFamily:'D-DIN',
			fontSize:14
		}
		},
	scale:{
		gridLines:{
			color:'white',
			
		},
		ticks:{
			fontColor:'black',
			
		}
	}
		}
var dataPolar = {
	labels:
	['OXYGEN','FOOD','WATER'],
	datasets:[
		{
			label:'Oxygen',
			borderAlign:'center',
			backgroundColor: ['rgba(0,152,245,1)','rgba(13,245,61,1)','rgba(245,44,44,1)'],
			borderColor: ['rgba(0,152,245,1)','rgba(13,245,61,1)','rgba(245,44,44,1)'],
			data:[5,6,7],
			
		}
	]
}
var optionsLine2 = {
	responsive:true,
	legend: {
		display:false
	},
	scales:{
		yAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-Din',
				fontSize:14
			}
		}],
		xAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-DIN',
				fontSize:14
			}
		}]
	}
}

var dataLine2 = {
	labels:['0','20','40','60','80','100','120','140','140','160','180','200','220','240','260','280','300','320','340','360','380','400','420','440','460','480','500'],
	datasets:[
		{
			label:'m/s²',
			fillColor: 'rgba(255,255,255,1)',
			strokeColor: 'rgba(255,255,255,1)',
			pointColor: 'rgba(255,255,255,1)',
			pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
			backgroundColor:'#000',
			borderColor:'#fff',
			radius:3,
			pointHoverBackgroundColor:'black',
			pointHoverRadius:10,
			pointHoverBorderWidth:3,
			fontColor:'white',
			scaleFontColor: "#FFFFFF",
			pointBackgroundColor:'white',
			data:[0,3.11,10.3325,15.6,20.1375,29.35,33.285,31.675,26.2425,23.98,20.4425,17.0475,13.8075,10.7425,7.55,5.32,2.925,1,0,0,0,0,0,0,0,0,0]
		}
	]
}
var optionsLine3 = {
	responsive:true,
	legend:{
		display:false
	},
		scales:{
		yAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-Din',
				fontSize:14
			}
		}],
		xAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-DIN',
				fontSize:14
			}
		}]
	}
}

var dataLine3 = {
	labels:
	['1','2','3','4','5','6','7','8'],
	datasets:[
		{
			fillColor: 'rgba(255,255,255,1)',
			strokeColor: 'rgba(255,255,255,1)',
			pointColor: 'rgba(255,255,255,1)',
			pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
			backgroundColor:'#000',
			borderColor:'#fff',
			radius:3,
			pointHoverBackgroundColor:'black',
			pointHoverRadius:10,
			pointHoverBorderWidth:3,
			fontColor:'white',
			scaleFontColor: "#FFFFFF",
			pointBackgroundColor:'white',
			data:[
			100,90,85,82,75,63,54,43,31,20,11,4
			]
		}
	]
}
var optionsLine4 = {
	responsive:true,
	legend:{
		display:false
	},
	scales:{
		yAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-Din',
				fontSize:14
			}
		}],
		xAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-DIN',
				fontSize:14
			}
		}]
	}
}
var dataLine4 = {
	labels:['0','20','40','60','80','100','120','140','140','160','180','200','220','240','260','280','300','320','340','360','380','400','420','440','460','480','500'],
	datasets:[{
		fillColor: 'rgba(255,255,255,1)',
			strokeColor: 'rgba(255,255,255,1)',
			pointColor: 'rgba(255,255,255,1)',
			pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
			backgroundColor:'#000',
			borderColor:'#fff',
			radius:3,
			pointHoverBackgroundColor:'black',
			pointHoverRadius:10,
			pointHoverBorderWidth:3,
			fontColor:'white',
			scaleFontColor: "#FFFFFF",
			pointBackgroundColor:'white',
			data:[
62.2,268.85,580.85,983.6,1570.6,2236.3,2869.8,3394.65,3874.25,4283.1,4624.05,4900.2,5115.05,5266.05,5372.45,5430.95,5489.45,5547.95,5547.95,5547.95,5547.95,5547.95,5547.95,5547.95,5547.95,5547.95,5547.95		]
		}
	]
}

var optionsLine5 = {
	responsive:true,
	legend:{
		display:false
	},
	scales:{
		yAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-Din',
				fontSize:14
			}
		}],
		xAxes:[{
			ticks:{
				fontColor:'white',
				fontFamily:'D-DIN',
				fontSize:14
			}
		}]
	}
}
var dataLine5 = {
	labels:['1*10⁷','2*10⁷','3*10⁷','4*10⁷','5*10⁷','6*10⁷','7*10⁷','8*10⁷','9*10⁷','10*10⁷','11*10⁷','12*10⁷'],
	datasets:[
		{
			fillColor: 'rgba(255,255,255,1)',
			strokeColor: 'rgba(255,255,255,1)',
			pointColor: 'rgba(255,255,255,1)',
			pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
			backgroundColor:'#000',
			borderColor:'#fff',
			radius:3,
			pointHoverBackgroundColor:'black',
			pointHoverRadius:10,
			pointHoverBorderWidth:3,
			fontColor:'white',
			scaleFontColor: "#FFFFFF",
			pointBackgroundColor:'white',
			data:[33.38535742,66.77071484,100.1560723,133.5414297,166.9267871,200.3121445,233.697502,267.0828594,300.4682168,333.8535742,367.2389316,400.6242891			
			],
			
				
			}
		]
	
}
function start(){
	var ctx = document.getElementById("distanceChart").getContext("2d");
	var LineChart = new Chart(ctx, {
		type:'line',
		data: dataLine,
		options: optionsLine
	});
	
	var ctx2 = document.getElementById('supplyChart').getContext('2d');
	var PolarChart = new Chart(ctx2, {
		type:'polarArea',
		data: dataPolar,
		options: optionsPolar
	});
	var ctx3 = document.getElementById('accelerationChart').getContext('2d');
	var Line2Chart = new Chart(ctx3, {
		type:'line',
		data: dataLine2,
		options: optionsLine2
	});
	var ctx4 = 
		document.getElementById('fuelChart').getContext('2d');
	var Line3Chart = new Chart(ctx4, {
		type:'line',
		data:dataLine3,
		options: optionsLine3
	});
	var ctx5 = document.getElementById('speedChart').getContext('2d');
	var Line4Chart = new Chart(ctx5, {
		type:'line',
		data: dataLine4,
		options: optionsLine4
	});
	var ctx6 = 
		document.getElementById('timedelayChart').getContext('2d');
	var Line5Chart = new Chart(ctx6, {
		type:'line',
		data: dataLine5,
		options:optionsLine5
	});
}

window.onload = start;