$(document).ready(function() {
	const amenityId = []
	$("input:checkbox").change( function () {
		if (!$(this).is(':checked')) { 
			amenityId.push(this.attr('data-id'));
		}
		else {
			let index = amenityId.indexOf(this.attr('data-id'));
			if (index !== -1) {
				amenityId.splice(index, 1);
			}
		}
		let amenityText = amenityId.join(', ');
		$('#amenities h4').text('Amenities: ' + amenityText);
	});
});

