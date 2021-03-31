<html>
	<canvas id="Canvas" style="color:rgb(0,255,0);"width="800" height="400" style="border:1px solid rgb(0,0,0,255)"> </canvas>
	</br> <p id="Size"> </p>
	<script>

	//A lovley random generator supplied by the mozilla devolpment page, no credit for macking this part of the snake game
	function getRandomInt(max) 
	{
  		return Math.floor( Math.random() * Math.floor(max) );
	}
	//This is the tile class, the thing that the snake will be moving over
	function Tile(Xcord=0,Ycord=0,size=25,Life=0,state="dead",CanvasId="Canvas")
	{
		//Programers note: theoreticaly you could get away without using state, becuse Life could be  
		//Used to keep track of the state, however it would be more intuitive to use the strings for states
		//So for now we will use the strings, in the future, if the game is laggy, we will try using the Life

		//This is the counter used to kill the tile,
		//It counts down every game iteration and the current number
		//Of food eaten is what sets the health of future squares, thus incrementing the snake leangth
		this.Life = Life;

		//Xcord of tile (duh)
		this.Xcord = Xcord;
		//Ycord of tile (also duh)
		this.Ycord = Ycord;
		//This is the dimension of the square, becuse all game tiles are squares
		this.size = size;
		//The current state of the game tile, stored for convinence
		this.state = state;

		//The canvas that the game will run on, REEEEEAAAAALLLLY need to figure out how to make it a static var
		this.Ctx = document.getElementById(CanvasId).getContext("2d");

		this.draw = function ()
		{
			this.Ctx.clearRect
			(
				this.Xcord,this.Ycord,
				this.Size,this.Size
			);
			if (this.state == "dead") { this.Ctx.fillStyle="#000000";}
			else if (this.state == "alive") {this.Ctx.fillStyle="#0000FF";}
			else if (this.state == "food") {this.Ctx.fillStyle="#00FF00";}
			else if (this.state == "hot") {this.Ctx.fillStyle="#FF0000";}
			this.Ctx.clearRect(this.Xcord,this.Ycord,this.size,this.size);
			this.Ctx.fillRect(this.Xcord,this.Ycord,this.size,this.size);
			//Ctx.fillStyle="#FF0000";
			//Ctx.fillRect(0,0,25,25);
		}

		this.update = function ()
		{
			if (this.Life > 0)
			{
				this.Life--;
				//prompt("x:" + this.Xcord +"y:" + this.Ycord + " Life:" + this.Life);
				return 1;
			}
			if (this.Life <= 0) 
			{
				//prompt("x:" + this.Xcord +"y:" + this.Ycord + " died");
				this.state = "dead";
				this.draw();
				return 0;
			}
		}
	}

	function Gboard(Xdim=2,Ydim=2,space=2,rez=15)
	{
		//The dimensions of the gameboard in tiles
		this.Xdim=Xdim;
		this.Ydim=Ydim;
		//The space inbetween the tiles, in border format, calculated so that it can be writen as i * Calcspace instead of
		// (space + 1) * i and not do the same calculation over and over again in the for loop
		this.Calcspace = space + rez;
		//The array that the tiles will be stored in
		this.Tspace = [];
		//A temporary array that is used to calculate the previous array
		var TempSpace = [];

		//Data about the players location, possibly make a player object ltr?

		this.head = [getRandomInt((this.Ydim - 1)) + 1, getRandomInt((this.Xdim - 1)) + 1]; //The players current pos, initialized as a random value
		this.moveDir = 6;//The direction that the player is moving (corrinsponds to the umoria numpad so 8 is up 2 is down and so on)
		this.Score = 2;//The number of food eatan, also the length of the snake

		this.Snake = [];
		//This is where we are going to store the currently alive tiles for easy update access, that way we are not updating all of the tiles,
		//and instead only updating the living ones that are part of the "snake"
		//The last tile reference in the array will always be the last tile placed there

		//This is the array where the powerups/Food are stored so the game knows which tiles to delete
		this.Interest = [];

		//The flag for if the player died
		this.Lost = true;

		//The speed time it takes the snake to move 1 square in miliseconds
		this.SpeedTime = 50;
		//The number of turns that the player should be feeling the spicy speed
		this.Heat = 0;
		//The score multiple affected by the spicy food
		this.T_Heat = 1;

		this.Update_Snake = function Update_Snake() 
		{
			for (i = 0;i < this.Snake.length; i ++) 
			{
				if (this.Snake[i].update() == 0)
				{
					this.Snake.shift();
				}
			}
		}
		this.Kill_Snake = function Kill_Snake()
		{
			for (i = 0;i < this.Snake.length; i ++) 
                        {
				this.Snake[i].Life = 0;
				this.Snake[i].update();
                        }
			this.Snake = [];

		}

		//rez is the size of the square so that the spaceing of the square is there length
		for (var i = 0; i < Ydim; i++)
		{
			for (var i2 = 0; i2 < Xdim; i2++)
			{
				TempSpace.push(( new Tile((this.Calcspace * i2), (i * this.Calcspace), rez) ));
			}
			this.Tspace.push(TempSpace);
			TempSpace = [];
			//an unfortionet side effect of setting up the cords this way is that the declaration of the 
			//Tile is arr[YCORD][XCORD] DO NOT LET THIS CONFUSE U
		}
		this.Render_all = function Render_all()
		{
			for (var i = 0; i < this.Ydim; i++)
			{
				for (var i2 = 0; i2 < this.Xdim; i2++)
				{
					this.Tspace[i][i2].draw();
				}
			}

		}
		this.Gen_Cords = function Gen_Cords() 
		{
			do 
                        {
                                Xcord = getRandomInt(this.Xdim);
                                Ycord = getRandomInt(this.Ydim);
                        }
                        while (this.Tspace[Ycord][Xcord].state != "dead")
			return [Ycord,Xcord];

		}

		this.Make_Food = function Make_Food() 
		{
			Cords = this.Gen_Cords();

			if (getRandomInt(101) <= 25) 
			{
				this.Tspace[Cords[0]][Cords[1]].state = "hot";
				this.Interest[0] = this.Tspace[Cords[0]][Cords[1]];
				this.Tspace[Cords[0]][Cords[1]].draw();
				Cords = this.Gen_Cords();
				this.Tspace[Cords[0]][Cords[1]].state = "food";
				this.Interest[1] = this.Tspace[Cords[0]][Cords[1]];
				this.Tspace[Cords[0]][Cords[1]].draw();
			}
			else
			{
				this.Tspace[Cords[0]][Cords[1]].state = "food";
				this.Interest[0] = this.Tspace[Cords[0]][Cords[1]];
				this.Interest[1] = this.Tspace[Cords[0]][Cords[1]];
				this.Tspace[Cords[0]][Cords[1]].draw();
			}

		}

	}
	function Game_Over()
	{
		alert("Game Over! \n Score:" + board.Score); 
		board.Lost=true;
		board.Kill_Snake();
		board.head = [getRandomInt((board.Ydim - 1)) + 1, getRandomInt((board.Xdim - 1)) + 1];
		board.Tspace[board.head[0]][board.head[1]].state = "alive";
       		board.Tspace[board.head[0]][board.head[1]].draw();
	        board.Snake.push(board.Tspace[board.head[0]][board.head[1]]);
		board.Heat = 0;
		board.T_Heat = 1;
		board.SpeedTime = 50;

	}

	function Act_Move(board,Pos)
	{ 	//creates the desired outcome of a move to a given location

		//Check if you eat yourself or run off of the map
		if (Pos[0] > (board.Ydim - 1) || (Pos[1] > board.Xdim - 1) || (Pos[0] < 0) || (Pos[1] < 0))
		{
			Game_Over();
		}
		else if ((board.Tspace[Pos[0]][Pos[1]].state == "alive"))
		{
			Game_Over();
			return 0;
		}
		//Check if you eat food that is hot or normal
		else if (board.Tspace[Pos[0]][Pos[1]].state == "food" || board.Tspace[Pos[0]][Pos[1]].state == "hot")
		{

			board.Score += (4 * board.T_Heat);

			if (board.Tspace[Pos[0]][Pos[1]].state == "hot") 
			{
				board.SpeedTime *= .666;
				board.SpeedTime = Math.floor(board.SpeedTime);
				board.Heat += 200;
				board.T_Heat += 1;
			}

			board.Tspace[Pos[0]][Pos[1]].state = "alive";
                        board.Tspace[Pos[0]][Pos[1]].draw();
                        board.Tspace[Pos[0]][Pos[1]].Life = board.Score;
			board.Snake.push(board.Tspace[Pos[0]][Pos[1]]);
			for (i = 0; i < 2; i ++)
			{
				if (board.Interest[i].state != "alive") 
				{
					board.Interest[i].state = "dead";
					board.Interest[i].draw();
				}
			}
			board.head = Pos;
			board.Make_Food();
			return 1;
		}
		//Steped on to a tile that does not have a snake part on it, spawn a snake part
		else if (board.Tspace[Pos[0]][Pos[1]].state == "dead")
		{
			board.Tspace[Pos[0]][Pos[1]].state = "alive";
			board.Tspace[Pos[0]][Pos[1]].draw();
			board.Tspace[Pos[0]][Pos[1]].Life = board.Score;
			board.Snake.push(board.Tspace[Pos[0]][Pos[1]]);
			board.head = Pos;
			return 1;
		}

	}

	function Move_Arith(board)
	{	Wanted_Move = [0,0];
		//does the arithmatic to determin the wanted movement for the player
		if (board.moveDir == 4)
		{	//Want to go left
			Wanted_Move[1] = board.head[1] - 1;
			Wanted_Move[0] = board.head[0];
		}
		else if (board.moveDir == 2) 
		{	//Want to go down
			Wanted_Move[1] = board.head[1];
			Wanted_Move[0] = board.head[0] + 1;
		}
		else if (board.moveDir == 6)
		{	//Want to go right
			Wanted_Move[1] = board.head[1] + 1;
			//prompt("Inside 6: " + Wanted_Move[1]);
			Wanted_Move[0] = board.head[0];
		}
		else if (board.moveDir == 8)
		{	//Want to go up
			Wanted_Move[1] = board.head[1];
			Wanted_Move[0] = board.head[0] - 1;
		}
		//prompt("Before Act_Move: " + Wanted_Move[0]);
		Act_Move(board,Wanted_Move);
	}

	function MoveUpdate(board)
	{	//The function that will iterate the movement procces
		if (board.Lost==false)
		{

				board.Update_Snake();
				var timer = setTimeout("MoveUpdate(board)",board.SpeedTime);
				if (board.Heat != 1)
				{
					board.Heat --;
				}
				else if (board.Heat == 1)
				{
					board.Heat--;
					board.SpeedTime = 50;
					board.T_Heat = 1;
				}
				Move_Arith(board);
		}
		else
		{
			clearTimeout(timer);
		}
	}
//function Run_Game() {
	//Find the surface and the game will be played on
	var Canvas = document.getElementById('Canvas');
	Canvas.width = window.innerWidth;
	Canvas.height = window.innerHeight;
	//Create and render the gameboard, while spawning the first food object
	var board = new Gboard(Math.floor(window.innerWidth / (17)) - 1 , Math.floor(window.innerHeight / (17)) - 1);
	board.Render_all();
	board.Make_Food();
	board.Tspace[board.head[0]][board.head[1]].state = "alive";
	board.Tspace[board.head[0]][board.head[1]].draw();
	board.Snake.push(board.Tspace[board.head[0]][board.head[1]]);
	//Set the event that trigers when the control keys are hit
	document.onkeydown = function(event) 
	{
	//	test = document.getElementById('test');
	//	test.innerHTML = event.keyCode;
		//prompt("KeyPress! " + event.keyCode);
		//change the movement direction of the snake on user input
		switch(event.keyCode) 
		{
			case 100:
				board.moveDir=4;
				break;
			case 65:
				board.moveDir=4;
				break;
			case 98:
				board.moveDir=2;
				break;
			case 83:
				board.moveDir=2;
				break;
			case 102:
				board.moveDir=6;
				break;
			case 68:
				board.moveDir=6;
				break;
			case 104:
				board.moveDir=8;
				break;
			case 87:
				board.moveDir=8;
				break;
			case 40:
				board.moveDir=2;
				break;
			case 37:
				board.moveDir=4;
				break;
			case 39:
				board.moveDir=6;
				break;
			case 38:
				board.moveDir=8;
				break;

		}
		if (board.Lost == true)
		{
			//Start the movement of the snake if given keypress when the player has lost
			board.Score = 2;
			board.Lost = false;
			MoveUpdate(board);
		}
	}
//}
	//Run_Game();
	</script>
</html>

