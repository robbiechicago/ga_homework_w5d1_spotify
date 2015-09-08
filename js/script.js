$(document).ready(function() {
  console.log('Ready to go, RoHo.');

  var searchBox = $('#search-box');
  var searchSelector = $('#search-selector');
  var searchButton = $('#search-button');

  searchSelector.on('change', search);
  searchButton.on('click', search);

  var searchValue;
  var searchType;
  var searchTypes;

  function search () {
    searchValue = searchBox.val();
    searchType = searchSelector.val();
    debugger
    var url = 'https://api.spotify.com/v1/search?q=' + searchValue + '&type=' + searchType;
    $.get(url, function(response) {
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
  }; //END OF FUNCTION SEARCH































}); //END OF DOCUMENT READY


