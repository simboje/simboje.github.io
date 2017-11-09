
var bodyColorToggle=1

function toggleBackground() {
	if(bodyColorToggle==1)
	{
		document.body.style.backgroundColor = "#5691B9";
		bodyColorToggle=0;
	}
	else
	{
		document.body.style.backgroundColor = "#bd561f";
		bodyColorToggle=1;
	}
}