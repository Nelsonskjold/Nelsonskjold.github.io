function pointsCalc() {
	var servPoint = document.getElementById("numServ").value * 1.0;
	var runPoint = (document.getElementById("numRun").value) * 0.75;
	var busPoint = document.getElementById("numBus").value;

	if (busPoint >= 3) {
		busPoint = busPoint * 0.40;
		busCut = 0.40;
	} else {
		busPoint = busPoint * 0.50;
		busCut = 0.50;
	}

	var points = servPoint + runPoint + busPoint;

	totalPoints.innerHTML = points.toFixed(2);
	tipsCalc(points, busCut);

}

function tipsCalc(x, bCut) {
	var totalCash = document.getElementById("cash").value;
	var totalCC = 0;
	var points = x;
	var busCut = bCut;

	for (var i = 0; i <= 5; i++ ) {
		 totalCC += document.getElementById("ccTips" + i).value * 1.00;
	}

	var bCash = Math.round(totalCash * 0.05);
	var bCC = (totalCC * 0.05).toFixed(2);

	var cashPoint = (totalCash - bCash) / points;
	var ccPoint = (totalCC - bCC) / points;
	
	barCash.innerHTML = bCash;
	barCC.innerHTML = bCC;

	halfBarCash.innerHTML = Math.round(bCash / 2);
	halfBarCC.innerHTML = (bCC / 2).toFixed(2);

	servCash.innerHTML = Math.round(cashPoint);
	servCc.innerHTML = ccPoint.toFixed(2);

	runCash.innerHTML = Math.round(cashPoint * 0.75);
	runCC.innerHTML = (ccPoint * 0.75).toFixed(2);

	busCash.innerHTML = Math.round(cashPoint * busCut);
	busCC.innerHTML = (ccPoint * busCut).toFixed(2);

	runHalfCash.innerHTML = Math.round(cashPoint * 0.38);
	runHalfCC.innerHTML = (ccPoint * 0.38).toFixed(2);

	busHalfCash.innerHTML = Math.round(cashPoint * 0.25);
	busHalfCC.innerHTML = (ccPoint * 0.25).toFixed(2);

}
