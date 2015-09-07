$(document).ready(function() {
  console.log('Ready to go, RoHo.');

  var searchValue;
  searchValue = 'zappa';
  var searchType;
  searchType = 'album';
  var searchTypes;


  function artistSearch () {
    var artistUrl = 'https://api.spotify.com/v1/search?q=' + searchValue + '&type=' + searchType;
    $.get(artistUrl, function(response) {
      switch (searchType) {
      case 'artist':
        var arr = response.artists.items;
        break;
      case 'album':
        var arr = response.albums.items;
        break;
      case 'track':
        var arr = response.tracks.items;
        break;
      }
      console.log(arr);
      $.each(arr, function(index, value) {
        console.log(value.name);
      });
    });
  }; //END OF FUNCTION ARTIST_SEARCH









  artistSearch();





























}); //END OF DOCUMENT READY


