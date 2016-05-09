function startGame (cliked_box) {
	
	var X = "X";
	var O = "O";

	var box1 = document.getElementById('one-content').innerHTML;
    var box2 = document.getElementById('two-content').innerHTML;
    var box3 = document.getElementById('three-content').innerHTML;
    var box4 = document.getElementById('four-content').innerHTML;
    var box5 = document.getElementById('five-content').innerHTML;
    var box6 = document.getElementById('six-content').innerHTML;
    var box7 = document.getElementById('seven-content').innerHTML;
    var box8 = document.getElementById('eight-content').innerHTML;
    var box9 = document.getElementById('nine-content').innerHTML;

    var winnerEmpty = document.getElementById('winner').innerHTML;
    var tieEmpty = document.getElementById('tie').innerHTML;


    if(cliked_box == "one"){

        if(box1 != O && box1 != X && click_count % 2 == 0){
            document.getElementById('one-content').innerHTML = X;
            
             }
        
        if(box1 != O && box1 != X && click_count % 2 !=0){
            document.getElementById('one-content').innerHTML = O;
            
        }

        click_count++;
        player_wins();

        
    	
    }

    if(cliked_box == "two"){

    
    	if(box2 != O && box2 != X && click_count % 2 == 0){
    		document.getElementById('two-content').innerHTML = X;
    		
    	}

    	if(box2 != O && box2 != X && click_count % 2 !=0){
    		document.getElementById('two-content').innerHTML = O;
    		
    	}

    	click_count++;
    	player_wins();

    
    }

    if(cliked_box == "three"){

        

    	if(box3 != O && box3 != X && click_count % 2 == 0){
    		document.getElementById('three-content').innerHTML = X;
    		
    	}

    	if(box3 != O && box3 != X && click_count % 2 !=0){
    		document.getElementById('three-content').innerHTML = O;
    		
    	}

    	click_count++;
    	player_wins();

    
    	
    }

    if(cliked_box == "four"){

        

    	if(box4 != O && box4 != X && click_count % 2 == 0){
    		document.getElementById('four-content').innerHTML = X;
    		
    	}

    	if(box4 != O && box4 != X && click_count % 2 !=0){
    		document.getElementById('four-content').innerHTML = O;
    		
    	}
    	
        click_count++;
    	player_wins();

    
    	
    }

    if(cliked_box == "five"){

        

    	if(box5 != O && box5 != X && click_count % 2 == 0){
    		document.getElementById('five-content').innerHTML = X;
    		
    	}
    	
        if(box5 != O && box5 != X && click_count % 2 !=0){
    		document.getElementById('five-content').innerHTML = O;
    		
    	}
    	
        click_count++;
    	player_wins();

    
    	
    }

    if(cliked_box == "six"){


    	if(box6 != O && box6 != X && click_count % 2 == 0){
    		document.getElementById('six-content').innerHTML = X;
    		
    	}

    	if(box6 != O && box6 != X && click_count % 2 !=0){
    		document.getElementById('six-content').innerHTML = O;
    		
    	}
    	
        click_count++;
    	player_wins();

    
    	
    }

    if(cliked_box == "seven"){


    	if(box7 != O && box7 != X && click_count % 2 == 0){
    		document.getElementById('seven-content').innerHTML = X;
    		
    	}

    	if(box7 != O && box7 != X && click_count % 2 !=0){
    		document.getElementById('seven-content').innerHTML = O;
    		
    	}
    	
        click_count++;
    	player_wins();

    
    	
    }

    if(cliked_box == "eight"){


    	if(box8 != O && box8 != X && click_count % 2 == 0){
    		document.getElementById('eight-content').innerHTML = X;
    		
    	}

    	if(box8 != O && box8 != X && click_count % 2 !=0){
    		document.getElementById('eight-content').innerHTML = O;
    		
    	}
    	
        click_count++;
    	player_wins();

    
    	
    }

    if(cliked_box == "nine"){


    	if(box9 != O && box9 != X && click_count % 2 == 0){
    		document.getElementById('nine-content').innerHTML = X;
    		
    	}

    	if(box9 != O && box9 != X && click_count % 2 !=0){
    		document.getElementById('nine-content').innerHTML = O;
    		
    	}
    	
        click_count++;
    	player_wins();

    
    	
    }

}

function resetBoxes () {
	
    document.getElementById('one-content').innerHTML = "";
    document.getElementById('two-content').innerHTML = "";
    document.getElementById('three-content').innerHTML = "";
    document.getElementById('four-content').innerHTML = "";
    document.getElementById('five-content').innerHTML = "";
    document.getElementById('six-content').innerHTML = "";
    document.getElementById('seven-content').innerHTML = "";
    document.getElementById('eight-content').innerHTML = "";
    document.getElementById('nine-content').innerHTML = "";

    document.getElementById('winner').innerHTML = "";
    document.getElementById('show-scores-player1').innerHTML = "";
    document.getElementById('show-scores-player2').innerHTML = "";
    document.getElementById('tie').innerHTML = "";

}

function player_wins () {

    var X = "X";
	  var O = "O";

    var box1 = document.getElementById('one-content').innerHTML;
    var box2 = document.getElementById('two-content').innerHTML;
    var box3 = document.getElementById('three-content').innerHTML;
    var box4 = document.getElementById('four-content').innerHTML;
    var box5 = document.getElementById('five-content').innerHTML;
    var box6 = document.getElementById('six-content').innerHTML;
    var box7 = document.getElementById('seven-content').innerHTML;
    var box8 = document.getElementById('eight-content').innerHTML;
    var box9 = document.getElementById('nine-content').innerHTML;

	//all possible scenarios for player 1 winning the game
    if(box1 == O && box2 == O && box3 == O 
	  || box4 == O && box5 == O && box6 == O 
	  || box7 == O && box8 == O && box9 == O 
	  || box1 == O && box4 == O && box7 == O 
	  || box2 == O && box5 == O && box8 == O 
	  || box3 == O && box6 == O && box9 == O
	  || box1 == O && box5 == O && box9 == O 
	  || box3 == O && box5 == O && box7 == O){

  	document.getElementById('winner').innerHTML = "Player 1 Wins!!!";
  	player1_win_count++;
  	
  }

  //all possible scenarios for player 2 winning the game
  else if(box1 == X && box2 == X && box3 == X 
    || box4 == X && box5 == X && box6 == X 
    || box7 == X && box8 == X && box9 == X 
    || box1 == X && box4 == X && box7 == X 
    || box2 == X && box5 == X && box8 == X 
    || box3 == X && box6 == X && box9 == X
    || box1 == X && box5 == X && box9 == X 
    || box3 == X && box5 == X && box7 == X){

  
    document.getElementById('winner').innerHTML = "Player 2 Wins!!!"; 
    player2_win_count++;
  
  }
  
  //if no one wins and the all the boxes are filled then its a tie
  else if((box1 == X || box1 == O) && (box2 == X || box2 == O) && (box3 == X || box3 == O) && (box4 == X || box4 == O)
   && (box5 == X || box5 == O) && (box6 == X || box6 == O) && (box7 == X || box7 == O) && (box8 == X || box8 == O) 
   && (box9 == X || box9 == O)){

    document.getElementById('tie').innerHTML = "Its a Tie!!!"; 

    }

}


function showScore () {

    document.getElementById('winner').innerHTML = "";

    document.getElementById('tie').innerHTML = "";
	
	document.getElementById('show-scores-player1').innerHTML = "Player 1: Games Won - "+player1_win_count;  

	document.getElementById('show-scores-player2').innerHTML = "Player 2: Games Won - "+player2_win_count;
}