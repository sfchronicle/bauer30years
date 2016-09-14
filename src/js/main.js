require("./lib/twitter"); //Do not delete

function activate() {
  var window_top = document.body.scrollTop;
  var div_top = document.getElementById('stick-here').getBoundingClientRect().top + window_top;
//   var timeline = document.getElementById('ticker');
  var div_bottom = document.getElementById('2016').getBoundingClientRect().bottom + window_top - 30;
// //  var timeline_ph = document.getElementById('timeline-placeholder');
//
//   if ((window_top > div_top) && (window_top < div_bottom)) {
//       timeline.style.display = "block";
//       timeline.classList.add('sticky');
//       // timeline_ph.style.display = 'block'; // puts in a placeholder for where sticky used to be for smooth scrolling
//   } else {
//       timeline.classList.remove('sticky');
//       timeline.style.display = "none";
//       // timeline_ph.style.display = 'none'; // removes placeholder
//   }
//
  for (var i = 1986; i < 2017; i++ ) {
  	var a = document.getElementById(i);
  	var at = document.getElementById(i);
//   	// var ay = document.getElementById(years[i]);
//
  var ed_top = a.getBoundingClientRect().top + window_top - 60;
	var ede_top = a.getBoundingClientRect().bottom + window_top - 60;
//
// 	var r = document.getElementById('t-5');
//     var u = document.getElementById('t-9');
//     var v = document.getElementById('t-8');
//     var w = document.getElementById('t-7');
//
    if (window_top > ed_top && window_top < ede_top) {
	        at.classList.add('active');
          a.classList.add('active');
	        // ay.classList.add('active');
    	}
  	else {
          at.classList.remove('active');
          a.classList.remove('active');
          // ay.classList.remove('active');
  	}
//
  }
//
}

window.onscroll = function() {activate()};
