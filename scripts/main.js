// JavaScript Document
		var myChart = document.getElementById('myChart').getContext('2d');
		var Chart = new Chart(myChart, {
			type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data:{
				labels:['0','20','40','60','80','100','120','140','140','160','180','200','220','240','260','280','300','320','340','360','380','400','420','440','460','480','500','520'],
				datasets:[{
					label:'Altitude',
					data:[0,1244,5377,11617,19672,31412,44726,57396,67893,77485,85662,92481,98004,102301,105321,107449,108619,109789,110959,112129,113299,114469,115639,116809,117979,119149,120319],
					borderColor: [ 'rgba(150,150,255,1)'],
					
				}]
			},
			options:{}
			
		});