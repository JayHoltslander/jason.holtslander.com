// Dribble shot fetcher - http://github.com/tylergaw/jribbble

$.jribbble.getShotsByPlayerId('j_holtslander', function(playerShots) {
  var html = [];

  $.each(playerShots.shots, function(i, shot) {
    html.push('<li class="dribble_shot col-md-3 col-sm-6">');
    html.push('<a href="' + shot.url + '">');
    html.push('<img class="img-responsive img-thumbnail scaling raised" src="' + shot.image_teaser_url + '" ');
    html.push('alt="' + shot.title + '"></a></li>');
  }); 

  $('#shotsByPlayerId').html(html.join(''));
}, {
  page: 1,
  per_page: 8
});