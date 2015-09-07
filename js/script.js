$(document).ready(function() {
  console.log('Ready to go, RoHo.');

  var searchOptionArtist;
  var searchOptionAlbum;
  var searchOptionTrack;

  function artistSearch () {
    $.get('https://api.spotify.com/v1/search?q=coldplay&type=artist', function(response) {
      var theArtists = response.artists.items;
      console.log(theArtists);
      $.each(theArtists, function(index, value) {
        console.log(value.name);
      });
      // debugger
    });
  }; //END OF FUNCTION ARTIST_SEARCH

  search();





























}); //END OF DOCUMENT READY


