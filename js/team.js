var hidden = [true,true, true];
$(document).ready(function() {
	var h = Math.max($('#dev').height() - $('#hidden_dev').height(), $('#stc').height() - $('#hidden_sme').height(), $('#stc').height() - $('#hidden_stc').height());
	
	$('.column').height(h);
	$('#hidden_dev').hide();
	$('#hidden_sme').hide();
	$('#hidden_stc').hide();

	$('#dev_drop').click(
	function(){
		var visible=false;
		var src = ($(this).attr('src') === 'images/DownArrow.png')
            ? visible=true
            : visible=false;
        if(visible)
        {
        	$(this).attr('src', 'images/UpArrow.png');
			$("#dev").height(h + $('#hidden_dev').height());
        	$('#hidden_dev').show();	
        }
        else
        {
        	$(this).attr('src', 'images/DownArrow.png');
			$("#dev").height(h);
        	$('#hidden_dev').hide();	
        }
		}
	);

	$('#hidden_dev').mouseleave(
		function()
		{
			$('#dev_drop').attr('src', 'images/DownArrow.png');
        	$("#dev").height(h);
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
			$("#stc").height(h + $('#hidden_stc').height());
        	$('#hidden_stc').show();	
        }
        else
        {
        	$(this).attr('src', 'images/DownArrow.png');
			$("#stc").height(h);
        	$('#hidden_stc').hide();	
        }
		}
	);

	$('#hidden_stc').mouseleave(
		function()
		{
			$('#stc_drop').attr('src', 'images/DownArrow.png');
			$("#stc").height(h);
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
			$("#sme").height(h + $('#hidden_sme').height());
        	$('#hidden_sme').show();	
        }
        else
        {
        	$(this).attr('src', 'images/DownArrow.png');
			$("#sme").height(h);
        	$('#hidden_sme').hide();	
        }
		}
	);

	$('#hidden_sme').mouseleave(
		function()
		{
			$('#sme_drop').attr('src', 'images/DownArrow.png');
			$("#sme").height(h);
        	$('#hidden_sme').hide();	
		}
	);
});


