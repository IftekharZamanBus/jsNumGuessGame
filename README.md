# jsNumGuessGame

## Overview
This project is a JavaScript based game which incorporates HTML and CSS to make a number guessing game. This web page is designed to make a fun game where a number is selected from 1-100 and the player has to guess the number, once the player submits their number it will give feedback such as, "Awesome job, you got it!", "Your guess is too high!", and "Your guess is too low!"

### Technology Stack

- **HTML**

- **CSS**

- **JavaScript**

### Functionality (JavaScript)
This project incorporates several JavaScript functions, below are the few out of the many key functions: 

- **window.onload - It restarts the webpage whenever you submit a number to show one of three messages as I said in the Overview section.**

- **playGame() - Whenever you submit a number into the field it will return your number guess into the console, save the guess into storage, display your result, and then display the history following it into the console.**

- **initGame() - Whenever your restart, in the code it initalizes a new game and resets all the values and content on the page.**

- **resetResultContent() - Resets all the results list's display.**

- **saveGuessHistory() - Saves the users guess entered from the input into the console.**

- **displayHistory() - Displays all of the history into HTML.**

- **getRandomNumber() - Returns random number between 1 and 100.**

- **getDialog() - Retrieves the dialog based on if the guess is wrong or correct.**

- **showYouWon() - Displays the message "Awesome job, you got it!" if you get the number correrct.**

- **showNumberAbove() - Displays the message "Your guess is too high!" if your guess is higher than the number between 1 - 100**

- **showNumberBelow() - Displays the message "Your guess is too low!" if your guess is lower than the number between 1 - 100**

### Styling and Layout
This is the styling and layout of the project and everything I used to make it look how I wanted it to look. 

- **CSS - In the CSS we made a banner that had the color #ffd23f, a font size of 90px, and the font-family being sans-serif. In the number guessing, results, and history container, we made it have a max-width of 400px and a margin of 0 auto. For just the history section we made it have a margin-top of 1rem.**

- **Boostrap - We used Bootstrap here and there in the index.html file to make it look a little more presentable.**

### Project Structure
This is all the files I used and why I used them.

- **index.html - In the index.html file this consists of all of the base DocType elements aswell as all of the words that are displayed without submitting anything and this connects itself, style.css, and script.js together. There is also a link in the head that connects to the bootstrap servers and then at the bottom we use a script tag to connect it to the CSS.**

- **style.css - In the style.css file it consists of very little and it mostly is made up of containers and margins to make the display look presentable.**

- **script.js - In the script.js file it consists of many functions such as, window.onload(), playGame(), initGame(), resetResultContent(), saveGuessHistory(), displayHistory(), getRandomNumber(), displayResult(), getDialog(), showYouWon(), showNumberAbove(), and showNumberBelow().**

### Getting Started
To deploy this project on your local machine or incorporate it into your own application, follow these steps: 

1. Clone the repository to your local machine using the following command: 

    **git clone https://github.com/IftekharZamanBus/jsNumGuessGame.git**

2. Open the project folder in your desired code editor.

3. Open the index.html file into your web browser to view the jsNumGuessGame App.

### Visit My Website

**https://incredible-cassata-baf995.netlify.app**