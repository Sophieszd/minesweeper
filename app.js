window.onload = () => {
    
    // let tiles = ["empty", "mine"];
    // let randomMine = "X";
    let mines = []
    
    // const $allButtons = document.querySelectorAll('.grid');
    // const $mineCount = 4;
   

    // let grid(allButton, mineCount) {

    const createRandomMine = () => {
        const randomMine = Math.floor(Math.random()*16);
        // if randomMine is already in mines , return createRandomMine()
        // if(randomMine.includes(mines));
        // return createRandomMine;
        console.log(mines)
        $('.grid').eq(randomMine).text("X");
        console.log(randomMine)
        mines.push(randomMine)
        console.log(mines)
    }

    for (let i = 0; i < 4; i++) {
        createRandomMine();
    }


};




// Random mines placed in grid x 4 - function

// Randomly generate either blank or mine and place in grid

// Cells have two states - Open or Closed - Click to open

// If mines clicked, reveal all mines

// Display message "Game Over" when mine is clicked

// Right click to flag mine

// Button to reveal where mines are

// End of Thurs - click to reveal bomb - winner message