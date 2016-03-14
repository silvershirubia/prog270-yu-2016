$(document).ready(function() {
    $('table').addClass('table table-striped table-hover');
    
    $('#getPresidents').click(getPresidents);
    
    function getPresidents(){
		$.getJSON('/cgi-bin/get-presidents.py', function(presidents){
			presidents.forEach(function(president){
				$('#bar').append('<li>' + president[1] + ' ' + president[2] + '</li>');
				});
			})
	}

/*
changeSize();
    $(window).bind('resize', function(){
	changeSize();
}).trigger('resize');
*/

});//end ready

/*
function changeSize() {
  if($(window).width() < 300){
	$(".MTcontent").css("width", "100%");
$(".MTimg").css("width", "100%");
    });

  }  
};
*/
