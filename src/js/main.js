require("./lib/twitter"); //Do not delete

function activate() {
  var window_top = document.body.scrollTop;
  var div_top = document.getElementById('stick-here').getBoundingClientRect().top + window_top;
//   var timeline = document.getElementById('ticker');
  var div_bottom = document.getElementById('2016').getBoundingClientRect().bottom + window_top - 30;

  for (var i = 1986; i < 2017; i++ ) {
  	var a = document.getElementById(i);
  	var at = document.getElementById(i);
    if (screen.width > 480) {
      if (i == 2016) {
        var ed_top = a.getBoundingClientRect().top + window_top-100;
      	var ede_top = a.getBoundingClientRect().bottom + window_top-200;
      } else {
        var ed_top = a.getBoundingClientRect().top + window_top - 100;
      	var ede_top = a.getBoundingClientRect().bottom + window_top - 100;
      }
    } else {
      if (i == 2016) {
        var ed_top = a.getBoundingClientRect().top + window_top-20;
        var ede_top = a.getBoundingClientRect().bottom + window_top-200;
      } else {
        var ed_top = a.getBoundingClientRect().top + window_top-20;
        var ede_top = a.getBoundingClientRect().bottom + window_top - 100;
      }
    }

    if (window_top > ed_top && window_top < ede_top) {
	        at.classList.add('active');
          a.classList.add('active');
    	}
  	else {
          at.classList.remove('active');
          a.classList.remove('active');
  	}
  }
}

window.onscroll = function() {activate()};
