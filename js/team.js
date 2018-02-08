$(document).ready(function() {
	var h = Math.max($('#dev').height(), $('#stc').height() , $('#sme').height());
	$('.description').height(h);

	var h = Math.max($('#dev_head').height(), $('#stc_head').height() , $('#sme_head').height());
	$('h1').height(h);
	
	$('#hidden_dev').slideUp();
	$('#hidden_sme').slideUp();
	$('#hidden_stc').slideUp();
	
	$(window).resize(function(){
		console.log("got here");
		$('#dev').height("auto");
		$('#stc').height("auto");
		$('#sme').height("auto");
		
		
		$('#dev_head').height("auto");
		$('#stc_head').height("auto");
		$('#sme_head').height("auto");
		var h = Math.max($('#dev').height(), $('#stc').height() , $('#sme').height());
		$('.description').height(h);

		var h = Math.max($('#dev_head').height(), $('#stc_head').height() , $('#sme_head').height());
		$('h1').height(h);
	})
	
	$('#dev_drop').click(
		function(){
			
			var visible=false;
			var src = ($(this).attr('src') === 'images/DownArrow.png')
				? visible=true
				: visible=false;
			if(visible)
			{
				$(this).attr('src', 'images/UpArrow.png');
				//$("#dev").height(h + $('#hidden_dev').height());
				$('#hidden_dev').slideDown(1000);	
			}
			else
			{
				$(this).attr('src', 'images/DownArrow.png');
				//$("#dev").height(h);
				$('#hidden_dev').slideUp(1000);	
			}
			
		}
	);

	

	$('#stc_drop').click(
	function(){
		var visible=false;
		var src = ($(this).attr('src') === 'images/DownArrow.png')
            ? visible=true
            : visible=false;
        if(visible)
        {
        	$(this).attr('src', 'images/UpArrow.png');
			//$("#stc").height(h + $('#hidden_stc').height());
        	$('#hidden_stc').slideDown(1000);	
        }
        else
        {
        	$(this).attr('src', 'images/DownArrow.png');
			//$("#stc").height(h);
        	$('#hidden_stc').slideUp(1000);	
        }
		}
	);

	


	$('#sme_drop').click(
	function(){
		var visible=false;
		var src = ($(this).attr('src') === 'images/DownArrow.png')
            ? visible=true
            : visible=false;
        if(visible)
        {
        	$(this).attr('src', 'images/UpArrow.png');
        	$('#hidden_sme').slideDown(1000);	
        }
        else
        {
        	$(this).attr('src', 'images/DownArrow.png');
        	$('#hidden_sme').slideUp(1000);	
        }
		}
	);

	
});


