var warCtrl = angular.module('warCtrl', []);
warCtrl.controller('warCtrl',['$scope', function($scope) {

  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/1028206/${getRandomNum()}')`;
    $('.randomize-bg-image').css("background-image", url);
  })();

  function convert_value_to_string(value) {
    if (value > 10) {
      switch (value) {
        case 11:
        return 'Jack';
        break;
        case 12:
        return 'Queen';
        break;
        case 13:
        return 'King';
        break;
      }
    }
    return value.toString();
  }
  var deck = [];
  var suits = ['heart', 'diamond', 'spade', 'club'];
  for (var i = 0; i<suits.length; i++) {
    var suit = suits[i];
    for (var j = 0; j<13; j++) {
      deck.push({number: j+1, suit: suit});
    }
  }
  var shuffle = function(array) {
    var copy = [];
    var n = array.length;
    var i;
    while (n) { i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    return copy;
  };
  deck = shuffle(deck);
  var cards_player_1 = [];
  var cards_player_2 = [];
  //divide out the cards into the two arrays
  var deal = function() {
    for (var i = 0; i < deck.length; i++) {
      if (i % 2 !== 0) {
        cards_player_2.push(deck[i]);
      }   	else {
        cards_player_1.push(deck[i]);
      }
    }
  };

  deal();
  //create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
  var war = function(card1, card2) {
    if 	(card1.number > card2.number) {
      $('.result').addClass('fa-thumbs-o-down');
      $('.result-text').html("Sorry... You Lose");
      return card1;
    }	else if	(card1.number < card2.number) {
      $('.result').addClass('fa-thumbs-o-up');
      $('.result-text').html("Jolly Good, You Win!!!");
      return card2;
    }
    else {
      return false;
    }
  };

  var tie = function(p1card, p2card){
    var tie1 = cards_player_1.splice(0,3);
    var tie2 = cards_player_2.splice(0,3);
    var tie1card = cards_player_1.shift();
    var tie2card = cards_player_2.shift();
    var tieWinner = war(tie1card, tie2card);
    if (tieWinner === tie1card){
      cards_player_1.push(p1card,p2card, tie1card,tie2card);
      for(var i = 0; i < tie1.length; i++){
        cards_player_1.push(tie1[i]);
        cards_player_1.push(tie2[i]);
      }
      $('.result-text').html("Ouch... You Lose DOUBLE!!!");
    }
    else if (tieWinner === tie2card){
      cards_player_2.push(p1card,p2card, tie1card,tie2card);
      for(var i = 0; i < tie1.length; i++){
        cards_player_2.push(tie2[i]);
        cards_player_2.push(tie1[i]);
      }
      $('.result-text').html("Wowzers... You Win DOUBLE!!!");
    }
  };
  //create a play function
  //compare the cards
  //give the winner both cards (at end of deck)
  var play = function() {
    $('#card-id-player1').removeClass('back heart club diamond spade v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13');
    $('#card-id-player2').removeClass('back heart club diamond spade v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13');
    var p1card = cards_player_1.shift();
    var p2card = cards_player_2.shift();
    var result = war(p1card, p2card);
    if (result === p1card){
      cards_player_1.push(p1card, p2card);
    } else if (result === p2card){
      cards_player_2.push(p1card, p2card);
    } else {
      tie(p1card,p2card);
    }
    //this function (defined below) will continue to the next turn
    advance();
  };

  var advance = function() {
    //take the top two cards and display them
    if (cards_player_1.length) {
      var card_1 = cards_player_1[0];
      var card_2 = cards_player_2[0];
      var opp = cards_player_1.length;
      var you = cards_player_2.length;
      $("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
      $("#opp-card-count").html(cards_player_1.length);
      $("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
      $("#my-card-count").html(cards_player_2.length);
      var player_1_c_name = cards_player_1[0].suit;
      var player_1_c_number = cards_player_1[0].number.toString();
      var final_player_1_c_number = "v"+player_1_c_number;
      var player_2_c_name = cards_player_2[0].suit;
      var player_2_c_number = cards_player_2[0].number.toString();
      var final_player_2_c_number = "v"+player_2_c_number;
      $('#card-id-player1').addClass(player_1_c_name);
      $('#card-id-player1').addClass(final_player_1_c_number);
      $('#card-id-player2').addClass(player_2_c_name);
      $('#card-id-player2').addClass(final_player_2_c_number);
      if (you < opp) {
        $('#my-card-count').addClass('text-warning');
        $('#my-card-count').removeClass('text-success');
      } else {
        $('#my-card-count').addClass('text-success');
        $('#my-card-count').removeClass('text-warning');
      }
      if (you > opp) {
        $('#opp-card-count').addClass('text-warning');
        $('#opp-card-count').removeClass('text-success');
      } else {
        $('#opp-card-count').addClass('text-success');
        $('#opp-card-count').removeClass('text-warning');
      }
    }
  };

  advance();

  $("#play-ball").click(function() {
    if ($('#myModal1').length > 0) {
      $('.result').removeClass('fa-thumbs-o-down fa-thumbs-o-down');
      play();
    }
  });
  $('[data-toggle=modal]').on('click', function (e) {
    var $target = $($(this).data('target'));
    $target.data('triggered',true);
    setTimeout(function() {
      if ($target.data('triggered')) {
        $target.modal('show').data('triggered',false);
      }
    }, 700);
    return false;
  });
}]);
