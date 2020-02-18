window.onload = () => {
    
    let tiles = ["blank", "mine"];
    console.log(tiles)
    const numButton = 16;
    const mineCount = 4;

    let grid( numButton, mineCount) {
        
        for (i = 0; i < 16; i++) {
        let across = Math.round(Math.random() * (this.grid.length -1));
        let down = Math.round(Math.random() * (this.grid[0].length -1));
    }
    }

};


// Random mines placed in grid x 4 - function - PUSH

// Randomly generate either blank or mine and place in grid

// Start with either buttons as mines or blank

// Cells have two states - Open or Closed - Click to open


// If mines clicked, reveal all mines

// Display message "Game Over" when mine is clicked

// Right click to flag mine

// Button to reveal where mines are

// End of Thurs - click to reveal bomb - winner message