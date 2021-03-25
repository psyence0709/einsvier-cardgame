var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

     function onYouTubeIframeAPIReady() {
         player = new YT.Player('yt_player', {
             videoId: 'CcY4C0krUE4',
             playerVars: {
                 playsinline: 1,
                 loop: 1,
                 listType: 'playlist',
                 playlist: 'CcY4C0krUE4', 
                 rel: 0,
                 controls: 0,
                 showinfo: 0
             },

             events: {
                 'onReady': onPlayerReady,
                 'onStateChange': onPlayerStateChange
             }
         });
     }

     function onPlayerReady(event) {
         event.target.mute();
         event.target.playVideo();
     }
     var done = false;

     function onPlayerStateChange(event) {
         var ytStatus = event.target.getPlayerState();
         if (ytStatus == YT.PlayerState.ENDED) {
             event.target.mute();
             event.target.playVideo();
         }
     }

     var $WIN = $(window);
 
     function screen_fit () {
         const WIN_H = $WIN.height();
         const WIN_W = $WIN.width();
         const screen_switch = 0.5625;
         const screen_ratio = WIN_H / WIN_W;
         const ratio_H = WIN_H / screen_switch;
         const ratio_W = WIN_W * screen_switch;

         if (screen_ratio > screen_switch) {
             $("#yt_player").css({
                 height: "100%",
                 width: ratio_H,
                 "margin-top": "0",
                 "margin-left": -ratio_H / 2,
                 left: "50%",
                 top: "0"
             });
         } else {
             $("#yt_player").css({
                 width: "100%",
                 height: ratio_W,
                 "margin-top": -ratio_W / 2,
                 "margin-left": "0",
                 top: "50%",
                 left: "0"
             });
         }
     }

     $WIN.on("resize", function () {
        screen_fit();
     });

     $(function () {
         screen_fit ();
     });

     
var total = 18;
var speed = 100;
var returnSec = 1000;
var ev = [];
var index;
var first = true;
var card1;
var card2;
var pair = 0;
var t = false;


$(function () {
	$('.clearText').hide();
    $('.restart').hide();
});


function cardClose(i,n){
    $("#card li:eq("+i+")").stop().animate({ left: "25"}, speed);
    $("#card li:eq("+i+") img").stop().animate({ width: "0",height: "100%"}, speed,
    function(){
        n(i);
    });
}

function omoteOpen(){
    $("#card li:eq("+index+") img").attr("src","img/card"+ev[index]+".png");
    $("#card li:eq("+index+") img").stop().animate({ width: "100%",height: "100%"}, speed);
    $("#card li:eq("+index+")").stop().animate({ left: "0"}, speed);
}

function uraOpen(j){
    $("#card li:eq("+j+") img").attr("src","img/card.png");
    $("#card li:eq("+j+") img").stop().animate({ width: "100%",height: "100%"}, speed);
    $("#card li:eq("+j+")").stop().animate({ left: "0"}, speed);
}

function cardlock(){
    $("#card li:eq("+index+")").addClass("lock");
}

function alllock(){
    $("#card li").addClass("lock");
}

function unlock(){
    $("#card li").removeClass("lock");
}

function comparison() {
    if(card1==card2){
        $("#card li:eq("+index+")").addClass("off");
        $("#card li:eq("+index1+")").addClass("off");

        setTimeout(function(){
        $("#card li:eq("+index+")").css('visibility','hidden');
        $("#card li:eq("+index1+")").css('visibility','hidden');
}, returnSec);


pair++;
setTimeout(function() {
if (pair==total/2) {
    
var canvas = document.body.appendChild( document.createElement( 'canvas' ) ),
context = canvas.getContext( '2d' );
context.globalCompositeOperation = 'lighter';
canvas.width = 1300;
canvas.height = 800;
draw();

var textStrip = ['Eins:Vier 30th Anniversary', '.', '―', '.', 'five sights','|'];

var stripCount = 10, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();

for (var i = 0; i < stripCount; i++) {
    stripX[i] = Math.floor(Math.random()*1300);
    stripY[i] = -100;
    dY[i] = Math.floor(Math.random()*7)+3;
    stripFontSize[i] = Math.floor(Math.random()*36)+2;
}

var theColors = ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)'];

var elem, context, timer;

function drawStrip(x, y) {
    for (var k = 0; k <= 20; k++) {
        var randChar = textStrip[Math.floor(Math.random()*textStrip.length)];
        if (context.fillText) {
            switch (k) {
            case 0:
                context.fillStyle = theColors[0]; break;
            case 1:
                context.fillStyle = theColors[1]; break;
            case 3:
                context.fillStyle = theColors[2]; break;
            case 7:
                context.fillStyle = theColors[3]; break;
            case 13:
                context.fillStyle = theColors[4]; break;
            case 17:
                context.fillStyle = theColors[5]; break;
            }
            context.fillText(randChar, x, y);
        }
        y -= stripFontSize[k];
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.shadowOffsetX = context.shadowOffsetY = 0;
    context.shadowBlur = 10;
    context.shadowColor = '#fbd2fc';
    
    for (var j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j]+'px MatrixCode';
        context.textBaseline = 'top';
        context.textAlign = 'right';
        
        if (stripY[j] > 1400) {
            stripX[j] = Math.floor(Math.random()*canvas.width);
            stripY[j] = -100;
            dY[j] = Math.floor(Math.random()*7)+3;
            stripFontSize[j] = Math.floor(Math.random()*36)+2;
            drawStrip(stripX[j], stripY[j]);
        } else drawStrip(stripX[j], stripY[j]);
        
        stripY[j] += dY[j];
    }
  setTimeout(draw, 60);

  setTimeout(() => {
    canvas.remove();
    }, 10500);
}

    $("#timer").css('transision: 1.0s'),
    $('p').text('Thank you for playing!'),
    $(function () {
        $('p').hide().each(function(i){
        $(this).delay(i * 500).fadeIn(5000,function(){
            $(this).delay(5000).fadeOut('slow')
            
        })
        })
    },returnSec)
  }
},returnSec);

} else {
    setTimeout(function(){
    cardClose(index,uraOpen);
    cardClose(index1,uraOpen);
    }, returnSec);
}
first = true;
card2 = 0;
setTimeout(function(){
    unlock();
    }, returnSec+speed*2);
}

$(function(){
    for(i=1; i<=total/2; i++) {
    ev.push(i,i);
}

ev.sort(function() {
    return Math.random() - Math.random();
});

for(i=1; i<=total; i++) {
    $("#card").append("<li><img src='img/card.png'></li>");
}

$("#card li").click(function(){
    index = $("#card li").index(this);
    cardlock();
    cardClose(index,omoteOpen);

if(first == true){
    index1 = index;
    card1= ev[index];
    first = false;

} else {
    alllock();
    card2 = ev[index];
    comparison();
}

});

$(function(){
  var time = 0;
  var setI;
  var min;
  var sec;

  function startTimer() {
    time += 1;
    min = Math.floor( time / 60 );
    sec = time % 60;
    min = ('' + min).slice(-2);
    sec = ('0' + sec).slice(-2);
    $('#timer').html(min + ":" + sec);
    if (pair==total/2) {
      clearInterval(setI);
    }
  }
  

    $("#card li").on("click",function(){
      if(t) return;
      t = true;
      startInterval();
    });
  
    function startInterval() {
    setI = setInterval(startTimer, returnSec);
    }
  });
});

$("a").hover(
      function() {
           $(this).fadeTo(100,0.6);
      },
      function() {
           $(this).fadeTo(100,1);
});
 