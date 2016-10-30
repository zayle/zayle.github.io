$(function() {
	$('.progressbar').each(function(){
		var t = $(this);
		var bar = t.find('.bar').first();
		var label = t.find('.label').first();
		var total = parseInt(t.css('width'))-4;
		bar.animate({width:.2*total}, 2500);
		label.append('<div class="perc"></div>');

		function perc() {
			console.debug(total)
			var length = t.find('.bar').css('width'),
				perc = Math.round((100*parseInt(length))/total),
				labelpos = (parseInt(length)-2);

			label.css('left', labelpos);
			t.find('.perc').text(perc+'%');
		}
		perc();
		setInterval(perc, 0);
	});
});
