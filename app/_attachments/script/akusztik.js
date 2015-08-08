var akusztik = (function() {
    var BaseURL = "http://mr2old.radio.hu/";

    var UrlPrefix;
    var Position;
    var Data;

    var loadFromObject = function(data) {
        UrlPrefix = data.UrlPrefix.Value;
        Data = data;

        if ( UrlPrefix.indexOf("http://stream001.radio.hu") == -1) {
            $("#jquery_jplayer_1").jPlayer("setMedia", {
                title: Data.Performer.Value,
                mp3: UrlPrefix
            });
        }

        $("#playlist").html("<ol></ol>");

        for (var i = Data.Cue.length - 1; i >= 0; i--) {
            $("#playlist ol").after("<li><a onclick='akusztik.play("+i+")'>" + Data.Cue[i].Name +"</a></li>");
        };
    }

    var play = function(index) {
        Position = Data.Cue[index].Position;
        if ( UrlPrefix.indexOf("http://stream001.radio.hu") != -1) {
            getAuthorizationCode(UrlPrefix);
        } else {
            $("#jquery_jplayer_1").jPlayer("play", Position);
        }
    }

    var loadFromUrl = function(url) {
        $.get( url, loadFromObject);
    }

    var getAuthorizationCode = function(url) {
        $.getScript(url + "-" + Position + ".mp3.js?hashid=" + 0);
    }

    var setAuthcode = function(authcode) {
            console.log("Got authorization " + authcode);
            var fullURL = UrlPrefix + "-"+Position+".mp3?ssdcode=" + authcode;
            console.log("URL " + fullURL);
            $("#jquery_jplayer_1").jPlayer("setMedia", {
                title: Data.Performer.Value,
                mp3: fullURL
            });

            $("#jquery_jplayer_1").jPlayer("play");
    }

    return {
        play: play,
        loadFromUrl: loadFromUrl,
        setAuthcode: setAuthcode
    };
})();

// Needed by akusztik play
function jsCallback(x,authcode) {
    akusztik.setAuthcode(authcode);
}

$(document).ready(function(){
    //akusztik.loadArtist("110329_akusztik_kesh");
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            akusztik.loadFromUrl("Szeder.json");
        },
        swfPath: "../../dist/jplayer",
        supplied: "mp3",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });
});
