
// // After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }

// // Search for a specified string.
// function search() {
//   var q = $('#query').val();
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }

// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyC_7WaOg8CheYVL_sFYAqBGyuq8SWBcovg');
}
 
// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML = responseString;
}