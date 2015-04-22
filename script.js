function tipsCalc() {
			var Points = document.getElementById("Points").value
			var Cash = document.getElementById("Cash").value
			var CcTips = document.getElementById("CcTips").value
			
			var BCash = Cash * 0.05
			var BCC = CcTips * 0.05

			var CashPoint = (Cash - BCash) / Points
			var CcPoint = (CcTips - BCC) / Points

			BarCC.innerHTML = BCC.toFixed(2)
			BarCash.innerHTML = BCash.toFixed(2)

			ServCC.innerHTML = CcPoint.toFixed(2)
			ServCash.innerHTML = CashPoint.toFixed(2)

			RunCC.innerHTML = (CcPoint * 0.75).toFixed(2)
			RunCash.innerHTML = (CashPoint * 0.75).toFixed(2)

			BusCC.innerHTML = (CcPoint * 0.5).toFixed(2)
			BusCash.innerHTML = (CashPoint * 0.5).toFixed(2)

			BussersCC.innerHTML = (CcPoint * 0.4).toFixed(2)
			BussersCash.innerHTML = (CashPoint * 0.4).toFixed(2)

			RunHalfCC.innerHTML = (CcPoint * 0.35).toFixed(2)
			RunHalfCash.innerHTML = (CashPoint * 0.35).toFixed(2)

			BusHalfCC.innerHTML = (CcPoint * 0.25).toFixed(2)
			BusHalfCash.innerHTML = (CashPoint * 0.25).toFixed(2)

		}
