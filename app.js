window.onload = () => {
    
    let mines = []
    const $button = $('.grid');
    // const $bomb = document.querySelectorAll('#bomb');
    const bomb = `<i class="fas fa-bomb" id="bomb"></i>`;
    
    const createRandomMine = () => {
        const randomMine = Math.floor(Math.random()*32);
    
        if(mines.indexOf(randomMine) !== -1){
            return createRandomMine();
        }
        
        $('.grid').eq(randomMine).addClass("bomb");
        mines.push(randomMine);
        console.log(mines);
    }

    for (let i = 0; i < 8; i++) {
        createRandomMine();
    }

    

    $button.one('click', event => {
        if(randomMine.hasClass("bomb")) {
            $('.grid').html("bomb");

        }
    
    })


};




// Random mines placed in grid x 8 - function

 // if randomMine is already in mines , return createRandomMine()

// Cells have two states - Open or Closed - Click to open

// If mines clicked, reveal all mines

// Display message "Game Over" when mine is clicked

// Right click to flag mine

// Button to reveal where mines are

// End of Thurs - click to reveal bomb - winner message