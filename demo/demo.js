/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
 $(document).ready(function(){
 $('#toggle-switcher').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'left':'-200px'});
		}else{
			$(this).addClass('open');
<<<<<<< HEAD
			$('#switch-style').animate({'left':'20px'});
=======
			$('#switch-style').animate({'left':'0px'});
>>>>>>> origin/rb4
		}
	});
});
