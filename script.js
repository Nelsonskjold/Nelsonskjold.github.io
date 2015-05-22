function pointsCalc() {
	var servPoint = parseFloat($("#numServ").val());
	var runPoint = parseFloat($('#numRun').val() * 0.75);
	var busPoint = parseFloat($('#numBus').val());

	if (busPoint >= 3) {
		busPoint = 0.40;
	} else {
		busPoint = busPoint * 0.50;
	}

	var points = servPoint + runPoint + busPoint;

	$('#totalPoints').html(points);
	tipsCalc(points);
}

function tipsCalc(x) {
	var totalCash = parseFloat($('#cash').val());
	var totalCC = 0;
	var points = x;

	for (var i = 0; i <= 5; i++ ) {
		totalCC += $('#ccTips' + i).val() * 1.00; 
	}

	var bCash = Math.round(totalCash * 0.05);
	var bCC = (totalCC * 0.05).toFixed(2);

	var cashPoint = (totalCash - bCash) / points;
	var ccPoint = (totalCC - bCC) / points;

	$('#barCash').html(bCash);
	$('#barCC').html(bCC);

	$('#halfBarCash').html(Math.round(bCash / 2));
	$('#halfBarCC').html((bCC / 2).toFixed(2));

	$('#servCash').html(Math.round(cashPoint));
	$('#servCC').html(ccPoint.toFixed(2));

	$('#runCash').html(Math.round(cashPoint * 0.75));
	$('#runCC').html((ccPoint * 0.75).toFixed(2));

	$('#busCash').html(Math.round(cashPoint * 0.50));
	$('#busCC').html((ccPoint * 0.50).toFixed(2));

	$('#busserCash').html(Math.round(cashPoint * 0.40));
	$('#busserCC').html((ccPoint * 0.40).toFixed(2));

	$('#runHalfCash').html(Math.round(cashPoint * 0.38));
	$('#runHalfCC').html((ccPoint * 0.38).toFixed(2));

	$('#busHalfCash').html(Math.round(cashPoint * 0.25));
	$('#busHalfCC').html((ccPoint * 0.25).toFixed(2));
}


$('#calc').click(function() {
	pointsCalc();
});

$('#reset').click(function() {
	$('#numServ').val('');
	$('#numRun').val('');
	$('#numBus').val('');
	$('#cash').val('');

	for (var i = 0; i <= 5; i++) {
		$('#ccTips' + i).val('');
	};
});
