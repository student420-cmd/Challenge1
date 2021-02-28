
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
		}
	
		}
	


var dataPolar = {
	labels:
	['O²','Food','H²O'],
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
	})
}

window.onload = start;