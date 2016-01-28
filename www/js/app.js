var _app = {
    
    pager: false,
    initialize: function() {
		    this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {

	    _app.pager = new cPager({
  			start: 'home',
  			handler: 'pageBtn',
  			container: 'page',
  			startTask: 'initialize',
        tasks: cPagerTask
  		});

      window.addEventListener('orientationchange', _app.doOnOrientationChange);

    },
    doOnOrientationChange: function (){

  		switch(window.orientation) {
  			case -90:
  			case 90:
  				setTimeout(function(){
  					var ScreenHeight = screen.height;
  					document.body.style.height = '100%';
  					window.innerHeight = ScreenHeight;
  				},1);

  				break;
  			default:
  				var ScreenHeight = screen.height;
  				document.body.style.height = "100%";
  				window.innerHeight = ScreenHeight;

  				break;
  		}
	  }

};
