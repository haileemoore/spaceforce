
(function(){
	var omnitagResults = /*OMNITAG*/[]/*OMNITAG*/;

	var insertAds = function insertAds() {
		if (window.AylTag) {
			window.AylTag.Insert(omnitagResults);
		}
		document.removeEventListener('ayl:tag_loaded', insertAds);
	};

	if (!window.AylTag) {
		// Listen to load
		document.addEventListener('ayl:tag_loaded', insertAds);

		// Load script if not already loading
		if (!window.AylTagLoading) {
			window.AylTagLoading = true;

			var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.crossOrigin = "anonymous"; sc.async = "true";
			sc.src = 'https://fo-static-usa02.omnitagjs.com/ot_multi.js';
			sc.className = 'ayl-injected-element';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);

			sc.addEventListener('load', function() {
				var evt  = document.createEvent('Event');
				evt.initEvent('ayl:tag_loaded', true, true);
				document.dispatchEvent(evt);
				window.AylTagLoading = false;
			});
		}
	} else {
		insertAds();
	}
})();
