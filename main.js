$(document).ready(function() {

	$('.select ul li').click(function(){

		$('.select ul li').removeClass('selected');

		$(this).addClass('selected');

		$('.cd').removeClass('active');

		var genre = $(this).text();

		if (genre == 'All') {
			$('.cd').addClass('active')
		}  else {
			$('.cd.' + genre).addClass('active');
		}

		

		// switch (genre) {
		// 	case 'Rock':
		// 		$('.cd.Rock').addClass('active');
		// 		break;
				
		// 	case 'Pop':
		// 		$('.cd.Pop').addClass('active');
		// 		break;
				
		// 	case 'Jazz':
		// 		$('.cd.Jazz').addClass('active');
		// 		break;
				
		// 	case 'Metal':
		// 		$('.cd.Metal').addClass('active');
		// 		break;
				
		// 	case 'All':
		// 		$('.cd').addClass('active');
		// 		break;
		
		// 	default:
		// 		$('.cd').addClass('active');
		// 		break;
		// }

	});

	// CHIAMATA AJAX GET CD

	$.ajax(
		{
			url: 'https://flynn.boolean.careers/exercises/api/array/music',
			method: "GET",
			success: function (data) {
				var cd = data.response;
				for (let i = 0; i < cd.length; i++) {
					var source = document.getElementById("entry-template").innerHTML;
	                var template = Handlebars.compile(source);
					var context = cd[i];
					var html = template(context);
					$('.cds-container').append(html)					
				}
			},
			error: function (errori) {
				alert("ERRORE!: " + errori);
			}
		}
	);

});