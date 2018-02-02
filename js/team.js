var hidden = [true,true, true];
$(document).ready(function() {
	var h = Math.max($('#dev').height(), $('#stc').height(), $('#stc').height());
	$('.column').height(h);
	$('#hidden_dev').hide();
	$('#hidden_sme').hide();
	//$('#hidden_stc').hide();

	$('#dev_drop').click(
	function(){
		var visible=false;
		var src = ($(this).attr('src') === 'images/DownArrow.png')
            ? visible=true
            : visible=false;
        if(visible)
        {
        	$(this).attr('src', 'images/UpArrow.png');
        	$('#hidden_dev').show();	
        }
        else
        {
        	$(this).attr('src', 'images/DownArrow.png');
        	$('#hidden_dev').hide();	
        }
		}
	);

	$('#hidden_dev').mouseleave(
		function()
		{
			$('#dev_drop').attr('src', 'images/DownArrow.png');
        	$('#hidden_dev').hide();	
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
        	$('#hidden_stc').show();	
        }
        else
        {
        	$(this).attr('src', 'images/DownArrow.png');
        	$('#hidden_stc').hide();	
        }
		}
	);

	$('#hidden_stc').mouseleave(
		function()
		{
			$('#stc_drop').attr('src', 'images/DownArrow.png');
        	$('#hidden_stc').hide();	
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
        	$('#hidden_sme').show();	
        }
        else
        {
        	$(this).attr('src', 'images/DownArrow.png');
        	$('#hidden_sme').hide();	
        }
		}
	);

	$('#hidden_dev').mouseleave(
		function()
		{
			$('#sme_drop').attr('src', 'images/DownArrow.png');
        	$('#hidden_sme').hide();	
		}
	);
});


