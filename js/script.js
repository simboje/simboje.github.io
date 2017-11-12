
var bodyColorToggle=1
var firstRowColor=1
var secondRowColor=1

function toggleBackgroundColor() {
	if(bodyColorToggle==1)
	{
		document.body.style.cssText = "background-color: black !important;";
		bodyColorToggle=0;
	}
	else
	{
		document.body.style.cssText = "background-color: #bd561f !important;";
		bodyColorToggle=1;
	}
}

function toggleFirstRowColor() {
	if(firstRowColor==1)
	{
		document.getElementById("firstRow").style.backgroundColor = "#bd561f";
		firstRowColor=0;
	}
	else
	{
		document.getElementById("firstRow").style.backgroundColor = "black";
		firstRowColor=1;
	}
}

function toggleSecondRowColor() {
	if(secondRowColor==1)
	{
		document.getElementById("secondRow").style.backgroundColor = "#bd561f";
		secondRowColor=0;
	}
	else
	{
		document.getElementById("secondRow").style.backgroundColor = "black";
		secondRowColor=1;
	}
}