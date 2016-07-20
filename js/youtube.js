'use strict';

function onClientLoad() {
    var apiKey = 'AIzaSyDmLX1uacxe4XXRji-nRYYHHiPdsgk-AMk';
    gapi.client.setApiKey(apiKey);
    gapi.client.load('youtube', 'v3');
};

function requestYT(q) {
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        order: 'viewCount',
        type: 'video',
        q: q,
        order: "viewCount",
        videoDimension: '3d',
        videoDefinition: 'high'
    });
    request.execute(function(response) {        
        for (var i = 0; i <= response.items.length; i++) {
            var videoId = response.items[i].id.videoId;
            var title = response.items[i].snippet.title;
            var description = response.items[i].snippet.description;
            var channelTitle = response.items[i].snippet.channelTitle;
            var publishedAt = response.items[i].snippet.publishedAt;           
            document.getElementById('response').innerHTML += "<div class='row'><div class='video col-xs-6'><iframe width='500' height='300' src='https://www.youtube.com/embed/"+ videoId +"' frameborder='0' allowfullscreen></iframe></div><div class='col-xs-6 videoDesc'> <ul style='list-style-type:none'><li> <strong>Title: </strong>"+ title +"</li><li><strong>Description: </strong>"+ description +"</li><li><strong>Channel Title: </strong>"+ channelTitle +"</li><li><strong> Published Date: </strong>"+ publishedAt +"</li></ul></div></div><hr>";                
        };
    });
};

function clickSearch(){
    $("img#3dlogo").attr("src", 'img/3d-white.png')
    var query = $("#search").val();
    $( "#response" ).empty();
    requestYT(query);
    $(".row.searchInit").removeClass("searchInit");
    $(".box.col-xs-12").css({"background-color": "#e62117", "color": "white", 'padding-bottom': '3%', 'padding-top': '2%'});
    $('.ytbtn').css({'color': '#333', 'background-color': '#e6e6e6', 'border-color':'#8c8c8c'});
    $('blockquote').addClass('displaynone');
    $("top-video, videofooter").removeClass("displaynone");
};

$("input").keypress(function(event){
    if ( event.which == 13 ) {
        clickSearch();
    }
});




