$(document).ready(function () {
  var GameHandler =  {
    state: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ],

    currentPlayer: 'X',

    render: function(){
      var $board = $("#board");
      $board.empty();
      GameHandler.state.forEach(function(row){
        var renderedRow = $("<div>")
        renderedRow.addClass("row");
        var collumNumber = 0;
        row.forEach(function(cell){
          var rendredCell = $("<div>");
          rendredCell.addClass("cell");
          rendredCell.addClass("col");
          rendredCell.attr("data-collumnNumber", collumNumber);
          collumNumber++;
          rendredCell.text(cell);
          rendredCell.on("click", GameHandler.collumnClicked);
          renderedRow.append(rendredCell);
        });
        $board.append(renderedRow);
      });
    },
    collumnClicked: function(event){
      var collumnNumber = $(event.target).attr("data-collumnNumber");
      GameHandler.updateState(collumnNumber);
      GameHandler.checkWinner();
      GameHandler.render();
    },

    updateState: function(collumnNumber){
      for(var i = 5; i >= 0; i--){
        if(GameHandler.state[i][collumnNumber] === null){
          GameHandler.state[i][collumnNumber] = GameHandler.currentPlayer;
          GameHandler.updateCurrentPlayer();
          break;
        }
      }
    },

    updateCurrentPlayer: function(){
      if(GameHandler.currentPlayer === "X"){
        GameHandler.currentPlayer = "O"
      }else{
        GameHandler.currentPlayer = "X"
      }
    },

    checkWinner: function(){
      var xMoves = [];
      var oMoves = [];
      for(var i=0; i <= 5; i++){
        for(var j=0; j <= 6; j++){
          if(GameHandler.state[i][j] === "X"){
            xMoves.push([i,j])
          } else if (GameHandler.state[i][j] === "O"){
            oMoves.push([i,j])
          }
        }
      }
    
      if(GameHandler.checkSequence(xMoves)){

      } else if(GameHandler.checkSequence(oMoves)){
        
      }
    },

    checkSequence: function(moves){
      var horizontalSequence = 0;
      var verticalSequence = 0;
      var diagonalSequence = 0;
      
      var lastMove = moves[0];
      moves.slice(1).forEach(function(currentMove){
        if (lastMove[0] === currentMove[0] && lastMove[1] === currentMove[1] + 1){
          horizontalSequence++;
        }
      });
    }
  };

  GameHandler.render();
});