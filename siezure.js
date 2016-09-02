var colors = ["#FFE90A", "#30FF91", "#A9F4F9", "#DDA9F9", "#FF00E0", "#FF6CB1"];
	function kraken() {
			var rand = colors[Math.floor(Math.random() * colors.length)];
			document.body.style.backgroundColor= rand;
			window.setTimeout(kraken,100);
					}	
