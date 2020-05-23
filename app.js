window.onload = () => {
    
    let mines = []
    let clicked = []
    const bomb = `<i class="fas fa-bomb" id="bomb"></i>`;
    const flag = `<i class="far fa-flag"></i>`;

    for (let i = 0; i < 100; i++) {

        const $newButton = $('<button class="grid"></button>');
            $('#container').append($newButton);
    }
    
    const createRandomMine = () => {
        const randomMine = Math.floor(Math.random()*100);
    
        if(mines.indexOf(randomMine) !== -1) {
            return createRandomMine();
        }
        
        $('.grid').eq(randomMine).addClass("bomb");
        mines.push(randomMine);
        console.log(mines);
    }

    for (let i = 0; i < 10; i++) {
        createRandomMine();
    }
    
    $('.grid').one('click', () => {

        if(event.target.classList.contains("bomb")) {
            $('.bomb').html(bomb);
            $('.grid').off('click');
        } else {
            clicked.push($(event.target).index());
            $(event.target).addClass('green');
            console.log(clicked);
        }
    })

    var handleRightClick = function (id) {
        $grid.html( FLAG )
    }
    // $('grid').on('contextmenu', () => {
    //     // add prevent event default
    //    if (event.target.which == 3) {
    //     $('.grid').html(flag); 
    //    } 
    // })
        
    // $('grid').mousedown(placeFlag()) {
    // event.which == 3
    // $('.grid').html(flag);
    // }
};


// Random mines placed in grid x 8 - function

 // if randomMine is already in mines , return createRandomMine()

// Cells have two states - Open or Closed - Click to open

// If mines clicked, reveal all mines

// Display message "Game Over" when mine is clicked

// Right click to flag mine

// Button to reveal where mines are

// End of Thurs - click to reveal bomb - winner message