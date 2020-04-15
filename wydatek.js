window.onload = function() 
{
	var title = document.getElementById("title").innerHTML;
	if(title === "Dodawanie wydatku") setCurrentDate();
	if(title === "Bilans finansowy") 
	{
		selectPeriod(1);
		addingIncomes();
		addingExpenses();
		createPieChart();
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

function drawChart() 
{
	var expense1 = parseFloat(document.getElementById("eat").innerHTML);
	var expense2 = parseFloat(document.getElementById("accommodation").innerHTML);
	var expense3 = parseFloat(document.getElementById("transport").innerHTML);
	var expense4 = parseFloat(document.getElementById("telecommunication").innerHTML);
	var expense5 = parseFloat(document.getElementById("healthcare").innerHTML);
	var expense6 = parseFloat(document.getElementById("clothes").innerHTML);
	var expense7 = parseFloat(document.getElementById("hygiene").innerHTML);
	var expense8 = parseFloat(document.getElementById("kids").innerHTML);
	var expense9 = parseFloat(document.getElementById("entertainment").innerHTML);
	var expense10 = parseFloat(document.getElementById("trip").innerHTML);
	var expense11 = parseFloat(document.getElementById("training").innerHTML);
	var expense12 = parseFloat(document.getElementById("books").innerHTML);
	var expense13 = parseFloat(document.getElementById("savings").innerHTML);
	var expense14 = parseFloat(document.getElementById("pension").innerHTML);
	var expense15 = parseFloat(document.getElementById("debts").innerHTML);
	var expense16 = parseFloat(document.getElementById("donation").innerHTML);
	var expense17 = parseFloat(document.getElementById("otherExpenses").innerHTML);
	// Draw the chart and set the chart values
	var data = google.visualization.arrayToDataTable([
	['Kategoria', 'Kwota'],
	['Jedzenie', expense1],
	['Mieszkanie', expense2],
	['Transport', expense3],
	['Telekomunikacja', expense4],
	['Opieka zdrowotna', expense5],
	['Ubrania', expense6],
	['Higiena', expense7],
	['Dzieci', expense8],
	['Rozrywka', expense9],
	['Wycieczka', expense10],
	['Szkolenia', expense11],
	['Książka', expense12],
	['Oszczędności', expense13],
	['Na emeryturę', expense14],
	['Spłata długów', expense15],
	['Darowizna', expense16],
	['Inne wydatki', expense17]
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

function createPieChart()
{
	//Load google charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
}

function addingIncomes()
{
	 var sum;
	 var income1 = parseFloat(document.getElementById("salary").innerHTML);
	 var income2 = parseFloat(document.getElementById("bankInterest").innerHTML);
	 var income3 = parseFloat(document.getElementById("allegro").innerHTML);
	 var income4 = parseFloat(document.getElementById("otherIncome").innerHTML);
	 sum = income1+income2+income3+income4;
	 document.getElementById("sumOfIncomes").innerHTML = sum;
}

function addingExpenses()
{
	 var sum;
	 var expense1 = parseFloat(document.getElementById("eat").innerHTML);
	 var expense2 = parseFloat(document.getElementById("accommodation").innerHTML);
	 var expense3 = parseFloat(document.getElementById("transport").innerHTML);
	 var expense4 = parseFloat(document.getElementById("telecommunication").innerHTML);
	 var expense5 = parseFloat(document.getElementById("healthcare").innerHTML);
	 var expense6 = parseFloat(document.getElementById("clothes").innerHTML);
	 var expense7 = parseFloat(document.getElementById("hygiene").innerHTML);
	 var expense8 = parseFloat(document.getElementById("kids").innerHTML);
	 var expense9 = parseFloat(document.getElementById("entertainment").innerHTML);
	 var expense10 = parseFloat(document.getElementById("trip").innerHTML);
	 var expense11 = parseFloat(document.getElementById("training").innerHTML);
	 var expense12 = parseFloat(document.getElementById("books").innerHTML);
	 var expense13 = parseFloat(document.getElementById("savings").innerHTML);
	 var expense14 = parseFloat(document.getElementById("pension").innerHTML);
	 var expense15 = parseFloat(document.getElementById("debts").innerHTML);
	 var expense16 = parseFloat(document.getElementById("donation").innerHTML);
	 var expense17 = parseFloat(document.getElementById("otherExpenses").innerHTML);
	 sum = expense1+expense2+expense3+expense4+expense5+expense6+expense7+expense8+expense9+expense10+expense11+expense12+expense13+expense14+expense15+expense16+expense17;
	 document.getElementById("sumOfExpenses").innerHTML = sum;
}