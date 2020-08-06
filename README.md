# Hangman-project-1

## Live web link
* http://127.0.0.1:5501/index.html

## Whimsical wireframe image
* ![](https://user-images.githubusercontent.com/68576904/89580271-ed7d8700-d7e9-11ea-909e-0dd9c19f4146.png)


## Objectives:
* set a user profile with name and optional picture in top corner
* board set up at start of new game containing:
  *  blank spaces for the word to be guessed
  *  a box that fills up with the guessed letters from the user, red for failed letters and green for successful letters
  *  a box with submit button for player to enter the guessed letters
  *  a hangman graphic to slowly be filled with body parts when guesses are fails
  *  Title of hangman at top of page
* Allow user to choose the graphic "person" to be hung from list of options at start of game. 
* Alert at end of game notifying if player won or lost. If win, release confetti and winning audio sounds. If loss, alert to try again with loser audio sounds.
* Ideal Extras:
    * Easy, Medium, Hard level options at start of game for user to choose from which offeres different lengths of "winning" words
    * background music to keep user entertained and engaged
    * final word to have click option to read definition
    * timer to keep track of how long user takes to guess the correct word

## Technologies Used:
* HTML
* CSS
* JavaScript
* Bootstrap
* Whimsical wireframe


## User Stories:
* As a user(AAU), I would like cool graphics with the hanging person.
* AAU, I would like engaging sound effects and colors.
* AAU, I would like my high score to be saved while playing and in my user profile for next time.
* AAU, I want to have different level options for difficulty. 
* AAU, I want my number of guesses kept track of on the page, along with how many guesses are remaining.

## Features List:
* letters turn red or green depending if they are successful or failed guesses and get listed in the "already guessed container"
* large letters show up in the appropriate empty spaces when guessed correctly
* body parts automatically show up for each wrong guess
* mute button to turn off background music if desired

## Psuedo Code:
* Arrays to hold user choices
* Click event for button to submit guesses
* Color button click event handler to save users guesses
* Click event for buttons, begin game and restart game
