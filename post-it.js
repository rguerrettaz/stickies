var Board = function(selector) {
  // Your board related code goes here
    
  // Use $elem to access the DOM element for this board
  var $elem = $( selector );
  
  function initialize() {
    // What needs to happen when this object is created?
    $elem.click(function(e){
      var post_it = new PostIt();
      $elem.append(post_it.text);
      $('.post-it').draggable();
      console.log(e.clientX);
      console.log(e.clientY);
      $('.post-it:last').css({"left": e.clientX, "top": e.clientY})
    });
  
  };

  initialize();
};


 
var PostIt = function() {
  // Your post-it related code goes here
  this.text = '<div class="post-it"><div class="header"><a href="#">X</a></div><textarea class="content"></textarea></div>';
  

};
var $counter = 0; 
$(function() {
  // This code will run when the DOM has finished loading
  new Board('#board');
  $('#new_board').click(function(){
      $('#board_list').append("<li><button class='board-"+ $counter+"'>board_"+$counter+"</button></li>");
      $counter++;
    // new Board('#board');
  })
});

