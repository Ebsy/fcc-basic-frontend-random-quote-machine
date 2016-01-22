var quoteData = [{
  "name": "luke",
  "quotes": ["I won't fail you. I'm not afraid.", "I'll never join you!"]
}, {
  "name": "yoda",
  "quotes": ["Hard to see, the Dark Side is", "Fear is the path to the dark side…"]
}, {
  "name": "han",
  "quotes": ["Never tell me the odds!", "Laugh it up, fuzzball!"]
}, {
  "name": "leia",
  "quotes": ["Help me Obi-wan Kenobi..."]
}, {
  "name": "chewbacca",
  "quotes": ["Uhrrrrrr Ahhhhhrrrrr Aaaaaaargh"]
}, {
  "name": "vader",
  "quotes": ["The Force is strong with this one."]
}]

var twitterParams = {
  text: 'Test test test',
  url: 'http://codepen.io/Ebsy/pen/pgWpBo'
}

$(document).ready(function() {

  get_random_quote();
  checkWidth();


  $("#go").click(function() {
    console.log("clicked");
    get_random_quote();

  });




});

$(window).resize(function() {
  checkWidth();
  console.log("yep")
});

function checkWidth() {
  if ($(window).width() < 768) {
    if ($("#resize").hasClass('arrow_box')) {
      $("#resize").removeClass('arrow_box')
      $("#resize").addClass('arrow_box_mobile')
    }
  } else {
    if ($("#resize").hasClass('arrow_box_mobile')) {
      $("#resize").removeClass('arrow_box_mobile')
      $("#resize").addClass('arrow_box')
    }
  }
}

function get_random_quote() {
  var number = Math.floor((Math.random() * quoteData.length - 1) + 1)
  var quote = quoteData[number];

  var quoteNum = Math.floor((Math.random() * quote.quotes.length - 1) + 1)
  var quoteText = quote.quotes[quoteNum]

  $(".row").fadeOut("fast", function() {
    $(".portrait").attr("src", "http://rpgvienna.com/fcc/quote-generator/images/" + quote.name + ".jpg");
    $("#quotetext").html(quoteText)

    $(".row").fadeIn();
    twitterParams.text = '"' + quoteText + '"';
    var params = $.param(twitterParams)
    var twiturl = "https://twitter.com/intent/tweet?" + params
    console.log(twiturl)
    $('#tweetThis').prop('href', twiturl)
  });


  //console.log(quote.name) console.log(quoteText)
}