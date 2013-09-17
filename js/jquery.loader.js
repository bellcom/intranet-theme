jQuery(window).bind('load', function() {
	jQuery('.foreground').toggle('slow');
});

jQuery(function() {
	jQuery('.view-portfolio .views-field-field-portfolio-image a').hide();
});
jQuery(window).bind('load', function() {
	 var i = 1;
	 var imgs = jQuery('.view-portfolio .views-field-field-portfolio-image a').length;
	 var int = setInterval(function() {
		 //console.log(i); check to make sure interval properly stops
		 if(i >= imgs) clearInterval(int);
		 jQuery('.view-portfolio .views-field-field-portfolio-image a:hidden').eq(0).fadeIn(300);
		 i++;
	 }, 300);
});


jQuery(function() {
	jQuery('.kwicks').hide();
});
jQuery(window).bind('load', function() {
	 var i = 1;
	 var imgs = jQuery('.kwicks').length;
	 var int = setInterval(function() {
		 //console.log(i); check to make sure interval properly stops
		 if(i >= imgs) clearInterval(int);
		 jQuery('.kwicks:hidden').eq(0).fadeIn(400);
		 i++;
	 }, 300);
});