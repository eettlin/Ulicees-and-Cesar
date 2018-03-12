'use strict'

class Cell {
  constructor(game, location, occupied,id) {
    this.game = game;
    this.loc = location;
    this.occupied = false;
    this.neighbors = [];
    this.id = id;
  }

  render(){


    //  draw a rectangle at location
    if(this.occupied){
      this.game.context.fillStyle = "#AA0000";
   }else{
     this.game.context.fillStyle = "#AAAAAA";
    }
    this.game.context.strokeStyle="#000000";
    this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
   //write text at location this.loc.x + 6, this.loc.y
    this.game.context.fillStyle = "#000000";
    this.game.context.font = "10px Arial";
    this.game.context.fillText(this.id,this.loc.x+5,this.loc.y+15);

  }


  loadNeighbors(c,r){
    var g = this.game.grid;
    //  get north neighbor
    if(r > 0){
      if(!g[c][r-1].occupied)
      this.neighbors.push(g[c][r-1])
    }

    //  get east neighbor
    if(c < g.length-1){
      if(!g[c+1][r].occupied)
      this.neighbors.push(g[c+1][r])
    }
    //  get south neighbor
    if(r <  g[c].length-1){
      if(!g[c][r+1].occupied)
      this.neighbors.push(g[c][r+1])
    }
    //  get west neighbor
    if(c > 0){
      if(!g[c-1][r].occupied)
      this.neighbors.push(g[c-1][r])
    }

  }
}//  end of class Cell
