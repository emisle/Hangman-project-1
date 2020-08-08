window.onload = function() {
    let words = [
      'a',
      'ability',
      'able',
      'about',
      'above',
      'accept',
      'according',
      'account',
      'across',
      'act',
      'action',
      'activity',
      'actually',
      'add',
      'address',
      'administration'
    ]
  
    let previousGuesses = []
    
    let selectedWord = start(words)
    let guessedWord = ""
    for(var i = 0; i < selectedWord.length; i++) {
      guessedWord += "?"
    }
  
    const el = document.getElementById("submitButton");
  
    el.addEventListener("click",function() { 
      let guessedLetter = document.getElementById('inputGuess').value
      let letterIndexes = guessIsInWord(selectedWord, guessedLetter); 
      if(letterIndexes === -1) {
        console.log('not there ; )')
      }
      else {
        console.log(letterIndexes)
        let newWord = ''
        console.log('selected word -' + selectedWord)
        for(var i = 0; i < selectedWord.length; i++) {
          // in the word
          if(letterIndexes.indexOf(i) !== -1) {
            newWord += selectedWord[i]
          }
          // already guessed right
          else if(isLetter(guessedWord[i])) {
            newWord += guessedWord[i]
          }
          else {
            newWord += '?'
          }
         }
        guessedWord = newWord
        console.log('guessed word ' + guessedWord)
        addWordToLetterRow(guessedWord)    
      }
  
      }, false);
  }
  
  function guessIsInWord(word, guess){
    let indexes = []
    for(var i = 0; i < word.length; i++) {
      if(word[i] === guess) {
        indexes.push(i)
      }
    }
    if(indexes.length === 0) {return -1;}
    else {return indexes}
  }
  
  function start(words) {
    document.getElementById("letterRow").innerHTML = "";
    let index = getRandomInt(0, words.length - 1)
    let selectedWord = words[index]
    let guessedWord = ""
    for(var i = 0; i < selectedWord.length; i++) {
      guessedWord += "?"
    }
    addWordToLetterRow(guessedWord)
    return selectedWord
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  
  function addWordToLetterRow(word) {
    document.getElementById("letterRow").innerHTML = ''
    for(var i = 0; i < word.length; i++) {
      var node = document.createElement("td");
      var textnode = null;
      if(word[i]==='?') {
         textnode = document.createTextNode("__");
      }
      else {
        textnode = document.createTextNode(word[i]);
      }
      node.appendChild(textnode);
      document.getElementById("letterRow").appendChild(node);
    }
  }  