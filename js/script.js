$(document).ready(function() {
  console.log('Ready to go, RoHo.');

  function search () {
    $.get('https://api.spotify.com/v1/search?q=coldplay&type=artist', function(response) {
      
    }
  }; //END OF FUNCTION SEARCH
}); //END OF DOCUMENT READY