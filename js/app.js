
// File: style.css
// GUI Assignment: HW5 - Scrabble Representation
// Aaron Roche
// aaron_roche@student.uml.edu

var ScrabbleTiles = [];
ScrabbleTiles["A"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg" };
ScrabbleTiles["B"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg" };
ScrabbleTiles["C"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg" };
ScrabbleTiles["D"] = { "value": 2, "original-distribution": 4, "number-remaining": 4, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg" };
ScrabbleTiles["E"] = { "value": 1, "original-distribution": 12, "number-remaining": 12, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg" };
ScrabbleTiles["F"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg" };
ScrabbleTiles["G"] = { "value": 2, "original-distribution": 3, "number-remaining": 3, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg" };
ScrabbleTiles["H"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg" };
ScrabbleTiles["I"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg" };
ScrabbleTiles["J"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg" };
ScrabbleTiles["K"] = { "value": 5, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg" };
ScrabbleTiles["L"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg" };
ScrabbleTiles["M"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg" };
ScrabbleTiles["N"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg" };
ScrabbleTiles["O"] = { "value": 1, "original-distribution": 8, "number-remaining": 8, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg" };
ScrabbleTiles["P"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg" };
ScrabbleTiles["Q"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg" };
ScrabbleTiles["R"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg" };
ScrabbleTiles["S"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg" };
ScrabbleTiles["T"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg" };
ScrabbleTiles["U"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg" };
ScrabbleTiles["V"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg" };
ScrabbleTiles["W"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg" };
ScrabbleTiles["X"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg" };
ScrabbleTiles["Y"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg" };
ScrabbleTiles["Z"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg" };
ScrabbleTiles["_"] = { "value": 0, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg" };

// Variables to track drop positions, scores, and tile counts
var dropAtLastPos = 60;
var dropAtLastPos2 = 0;
var dropAtLastPos3 = 60;
var dropAtLastPos4 = 0;
var pointsForWord = 0;
var roundScore = 0;
var doublepointsForWord = 0;
var tilesRemaining = 100;
var droppedTiles = 0;
var lastDragged = 60;
var lastDragged2 = 60;

// Create a div element for draggable tiles
var dragDiv = document.createElement('div');

// Initialize the game by calling the start function
start();

// Function to initialize the game
function start() {
    var count = 0;

    // Set attributes for the draggable div
    dragDiv.id = 'draggable';   
    dragDiv.class = "ui-widget-content"

    // Generate initial set of 7 random tiles for the player
    while (count < 7) {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_"
        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
        if (ScrabbleTiles[randomLetter]["number-remaining"] > 0) {

            var img = document.createElement('img');
            img.id = "tile" + count;

            img.src = ScrabbleTiles[randomLetter]["image"];

            dragDiv.appendChild(img);
            document.body.appendChild(dragDiv);

            // Assign tiles to window variables and decrement the remaining count
            switch (count) {
                case 0:
                    window.tile0 = ScrabbleTiles[randomLetter];
                case 1:
                    window.tile1 = ScrabbleTiles[randomLetter];
                case 2:
                    window.tile2 = ScrabbleTiles[randomLetter];
                case 3:
                    window.tile3 = ScrabbleTiles[randomLetter];
                case 4:
                    window.tile4 = ScrabbleTiles[randomLetter];
                case 5:
                    window.tile5 = ScrabbleTiles[randomLetter];
                case 6:
                    window.tile6 = ScrabbleTiles[randomLetter];
            }
            count++;
            
            ScrabbleTiles[randomLetter]["number-remaining"]--;
        }
    }
    tilesRemaining = tilesRemaining - 7;
}

// Set up draggable behavior for tiles and droppable behavior for board positions
$(function () {
    $("#draggable > img").draggable({
        revert: function () {
            // Check conditions for reverting the tile to its original position
            var boardPosition = document.getElementById("droppable").getBoundingClientRect().left;
            var boardPosition2 = document.getElementById("droppable").getBoundingClientRect().top;
            var tilePosition = ($(this)).position().left;
            var tilePositionTop = ($(this)).position().top - boardPosition2;
            var currentDrop = tilePosition - boardPosition;

            if (dropAtLastPos < currentDrop || currentDrop < dropAtLastPos2 || tilePositionTop != -49 || $(this).attr("class").includes("dropped") ) {
                return true;
            }
            else {
                $(this).addClass( "dropped" )
                dropAtLastPos = dropAtLastPos + 60;
                dropAtLastPos2 = dropAtLastPos2 + 60;
                lastDragged = currentDrop;
                return false;
            }
        }
    });

    // Set up droppable behavior for board positions
    $(".drop").droppable({
        hoverClass: 'active',
        drop: function (event, ui) {
            // Move the dropped tile to the board position and update relevant counters
            $(this).find(".drop")
            ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
            droppedTiles++;
            var tileid = $(ui.draggable).attr("id");
            getPositionScore(tileid, $(this));
        }
    });
})

// Function to calculate score based on the position of the dropped tile
function getPositionScore(tileid) {
    var boardPosition = document.getElementById("droppable").getBoundingClientRect().left;
    var tile = document.getElementById(tileid);
    var tilePosition = tile.getBoundingClientRect().left;
    var currentDrop = tilePosition - boardPosition;

    // Check if the dropped tile is in a valid position and calculate points accordingly
    if (dropAtLastPos3 >= currentDrop && currentDrop >= dropAtLastPos4 && !($('#'+tileid).attr("class").includes("dropped"))) {
        dropAtLastPos3 = dropAtLastPos3 + 60;
        dropAtLastPos4 = dropAtLastPos4 + 60;
        switch (tileid) {
            case "tile0":
                pointsForWord = pointsForWord + window.tile0["value"];
                break;
            case "tile1":
                pointsForWord = pointsForWord + window.tile1["value"];
                break;
            case "tile2":
                doublepointsForWord = 1;
                pointsForWord = pointsForWord + window.tile2["value"];
                break;
            case "tile3":
                pointsForWord = pointsForWord + window.tile3["value"];
                break;
            case "tile4":
                pointsForWord = pointsForWord + window.tile4["value"];
                break;
            case "tile5":
                pointsForWord = pointsForWord + window.tile5["value"];
                break;
            case "tile6":
                pointsForWord = pointsForWord + (2 * window.tile6["value"]);
                break;
        }
    }
}

// Function to enable draggable behavior for a specific tile
function callDrag(img) {
    $('#' + img).draggable({
        revert: function () {
            var boardPosition = document.getElementById("droppable").getBoundingClientRect().left;
            var boardPosition2 = document.getElementById("droppable").getBoundingClientRect().top;
            var tilePosition = ($(this)).position().left;
            var tilePositionTop = ($(this)).position().top - boardPosition2;
            var currentDrop = tilePosition - boardPosition;

            if (dropAtLastPos < currentDrop || currentDrop < dropAtLastPos2 || tilePositionTop != -49 || $(this).attr("class").includes("dropped")) {
                return true;
            }
            else {
                $(this).addClass("dropped")
                dropAtLastPos = dropAtLastPos + 60;
                dropAtLastPos2 = dropAtLastPos2 + 60;
                lastDragged = currentDrop;
                return false;
            }
        }
    })
}

// Function to handle the start of a new word
function nextWord() {
    // Remove dropped tiles from the board
    $(".dropped").remove();

    // Reset drop positions and check for double points
    dropAtLastPos = 60;
    dropAtLastPos2 = 0;
    dropAtLastPos3 = 60;
    dropAtLastPos4 = 0;

    if (doublepointsForWord == 1) {
        pointsForWord = pointsForWord * 2;
    }

    doublepointsForWord = 0;
    roundScore = roundScore + pointsForWord;
    pointsForWord = 0;

    // Identify the number of tiles needed and loop through existing tiles
    var neededTiles = 7 - $("#draggable >img").length;
    var loopCount = 0;
    var loopPlus1 = 1;

    while (loopCount < $("#draggable >img").length) {
        var tempTile = $('#draggable> img:nth-child(' + loopPlus1 + ')');
        switch (loopCount) {
            case 0:
                var letter = $(tempTile).attr("src").slice(-5, -4);
                window.tile0 = ScrabbleTiles[letter];
            case 1:
                var letter = $(tempTile).attr("src").slice(-5, -4)
                window.tile1 = ScrabbleTiles[letter];
            case 2:
                var letter = $(tempTile).attr("src").slice(-5, -4)
                window.tile2 = ScrabbleTiles[letter];
            case 3:
                var letter = $(tempTile).attr("src").slice(-5, -4)
                window.tile3 = ScrabbleTiles[letter];
            case 4:
                var letter = $(tempTile).attr("src").slice(-5, -4)
                window.tile4 = ScrabbleTiles[letter];
            case 5:
                var letter = $(tempTile).attr("src").slice(-5, -4)
                window.tile5 = ScrabbleTiles[letter];
            case 6:
                var letter = $(tempTile).attr("src").slice(-5, -4)
                window.tile6 = ScrabbleTiles[letter];
        }

        $(tempTile).attr("id", "tile" + loopCount);
        loopCount++;
        loopPlus1++;
    }

    // Generate and append new tiles to meet the required count
    var countTiles = 7 - neededTiles;
    var seven = 7;

    if (tilesRemaining < neededTiles) {
        seven = countTiles + tilesRemaining;
    }

    while (countTiles < seven) {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_"
        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
        if (ScrabbleTiles[randomLetter]["number-remaining"] > 0) {
            var img = $('<img>');
            img.attr('id', "tile" + countTiles);
            img.attr('src', ScrabbleTiles[randomLetter]["image"]);
            img.appendTo('#draggable');
            callDrag(img.attr('id'));
            document.body.appendChild(dragDiv);
            switch (countTiles) {
                case 0:
                    window.tile0 = ScrabbleTiles[randomLetter];
                case 1:
                    window.tile1 = ScrabbleTiles[randomLetter];
                case 2:
                    window.tile2 = ScrabbleTiles[randomLetter];
                case 3:
                    window.tile3 = ScrabbleTiles[randomLetter];
                case 4:
                    window.tile4 = ScrabbleTiles[randomLetter];
                case 5:
                    window.tile5 = ScrabbleTiles[randomLetter];
                case 6:
                    window.tile6 = ScrabbleTiles[randomLetter];
            }
            countTiles++;
            ScrabbleTiles[randomLetter]["number-remaining"]--;
        }
    }

    // Update the tilesRemaining count
    if (tilesRemaining < neededTiles) {
        tilesRemaining = tilesRemaining - tilesRemaining;
    } else {
        tilesRemaining = tilesRemaining - neededTiles;
    }
}

// Event handler for the "Next Word" button
$("#NextWord").click(function () {
    // Check if there are remaining tiles
    if (tilesRemaining == 0) {
        $('#message').text("There are no remaining tiles. Click Start Over to begin a new game.");
    } else {
        nextWord();
    }

    // Update UI elements
    $('#roundScore').text(roundScore);
    $('#remaining').text(tilesRemaining);
    droppedTiles = 0;
});

// Event handler for the "Start Over" button
$("#StartOver").click(function () {
    // Reload the page to start a new game
    location.reload();
});