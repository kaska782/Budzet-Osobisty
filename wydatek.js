window.onload = function() 
{
	var title = document.getElementById("title").innerHTML;
	if(title === "Dodawanie wydatku") setCurrentDate();
	if(title === "Bilans finansowy") 
	{
		selectPeriod(1);
		addingIncomes();
	}
}

function setCurrentDate()
{
	var dateOnPage = document.getElementById("data");
	var today = new Date();

	var day = today.getDate().toString();
	day = (day.length === 1) ? '0' + day : day;
	
	var month = today.getMonth() + 1;
	month = (month.toString().length === 1) ? '0' + month : month;
	
	var year = today.getFullYear();

	dateOnPage.value = year + "-" + month + "-" + day ;
}

function getDaysNumberOfMonth(month, year)
{
	var daysNumber;
	switch(month) 
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			daysNumber = 31;
			break;
	
		case 4:
		case 6:
		case 9:
		case 11:
			daysNumber = 30;
			break;
	
		case 2: {
			if((year%4 == 0) && (year%100 != 0) || (year%400 == 0))
				daysNumber = 29;
			else
				daysNumber = 28;
			break;
		}
	}
	return daysNumber;
}

function selectPeriod(option)
{
	var today = new Date();
	var day = today.getDate().toString();
	day = (day.length === 1) ? '0' + day : day;
	var month = today.getMonth() + 1;
	month = (month.toString().length === 1) ? '0' + month : month;
	var year = today.getFullYear();

	var sentence;	
	switch(option)
	{
		case 1: //current month
			sentence = "Za okres od 01."+month+"."+year+" do "+getDaysNumberOfMonth(parseInt(month),parseInt(year))+"."+month+"."+year;
			document.getElementById("selectPeriod").style.display = "none";
			break;
		case 2: //previous month
			month = parseInt(month) - 1;
			month = (month.toString().length === 1) ? '0' + month : month;
			sentence = "Za okres od 01."+month+"."+year+" do "+getDaysNumberOfMonth(parseInt(month),parseInt(year))+"."+month+"."+year;
			document.getElementById("selectPeriod").style.display = "none";
			break;
		case 3: //current year
			sentence = "Za okres od 01.01."+year+" do 31.12."+year;
			document.getElementById("selectPeriod").style.display = "none";
			break;		
		case 4: //nonstandard
			sentence = "Wybierz przedział czasowy";	
			document.getElementById("selectPeriod").style.display = "block";
			break
	}
	document.getElementById("period").innerHTML = sentence;
}

//Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
	var data = google.visualization.arrayToDataTable([
	['Kategoria', 'Kwota'],
	['Jedzenie', 8],
	['Mieszkanie', 2],
	['Transport', 4],
	['Telekomunikacja', 2],
	['Opieka zdrowotna', 8],
	['Ubrania', 8],
	['Higiena', 8],
	['Dzieci', 8],
	['Rozrywka', 8],
	['Wycieczka', 8],
	['Książka', 8],
	['Oszczędności', 8],
	['Na emeryturę', 8],
	['Spłata długów', 8],
	['Darowizna', 8],
	['Inne wydatki', 8]
	]);
	// Optional; add a title and set the width and height of the chart
	var options = {
		'title':'Wykres finansowy wydatków',
		'width': 700, 
		'height': 300,
		is3D : true
		};
	//Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(data, options);
}

function addingIncomes()
{
	 var sum;
	 var income1 = parseFloat(document.getElementById("salary").innerHTML);
	 var income2 = parseFloat(document.getElementById("bankInterest").innerHTML);
	 var income3 = parseFloat(document.getElementById("allegro").innerHTML);
	 var income4 = parseFloat(document.getElementById("other").innerHTML);
	 sum = income1+income2+income3+income4;
	 document.getElementById("sumOfIncomes").innerHTML = sum;
}
