$(document).ready(function(){
	$('.form_dkinfo .button-panel button').click(function(){
		var par=$(this).parents('.form_dkinfo');
		var phone=par.find('input').val(),fr=par.find('.result');
		fr.removeClass('error').addClass('load').text();
		$.ajax({
			url: '/discount/',
			type:'POST',
			data: 'phone='+phone,
			success: function(data){
				var res=jQuery.parseJSON(data);
				fr.removeClass('load').html(res.text);
				if(res.result!=1)fr.addClass('error');
			}
		});
	});
});