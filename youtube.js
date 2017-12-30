$(function() {
    $("body").onlineAlarmKur({
        method: "youtube"
    });
    var onlineAlarmKur = $('body').data('plugin_onlineAlarmKur'),
        $searchInput = $("#alarm-input-youtube"),
        strLength = $searchInput.val().length;
    $searchInput.focus();
    $searchInput[0].setSelectionRange(strLength, strLength);
    onlineAlarmKur.getYoutubeVideo($searchInput.data('random-video'));
    $searchInput.keyup(function() {
        onlineAlarmKur.getYoutubeVideo();
    });
    $('#start').on('click', function() {
        onlineAlarmKur.startAlarm();
    });
    $('#stop').on('click', function() {
        onlineAlarmKur.stopAlarm();
    });
    $('#snooze').on('click', function() {
        onlineAlarmKur.snoozeAlarm();
    });
});


// var onSubmit = function() {
//     var query = $('#search').val();
//     $.ajax({
//             url: "https://www.googleapis.com/youtube/v3/search",
//             data: {
//                 part: 'snippet',
//                 q: query,
//                 maxResults: 1,
//                 order: 'viewCount',
//                 key: 'AIzaSyC_7WaOg8CheYVL_sFYAqBGyuq8SWBcovg'
//             }
//         })
//         .done(function(res) {
//             console.log(res.items[0].snippet.title)
//         })
//         .fail(function(err) {
//             console.log(err)
//         });
//     return false;
// };