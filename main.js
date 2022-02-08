
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ===  'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
      console.log('Choose between: paper, rock, or scissors');
    }
  };
  
  
  const getComputerChoice = () => {
    num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0: 
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  };
  
  
  const determineWinner = (userChoice, computerChoice) => {
    // console.log(userChoice, computerChoice);
      if (userChoice === computerChoice) {
      return 'Tie';
    } 
     if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    }
    
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    }
    if (userChoice === 'bomb') {
      return 'User win';
    }
  }
  // console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));
  
  
//   const playGame = (mychoice) => {
//     userChoice = getUserChoice(mychoice);
    
//     console.log(determineWinner(userChoice, computerChoice));
//   }
  
// returns array with possible choice of user
  let elements = document.getElementsByClassName("userChoice");


  const myFunction = (choice) => {
    const mychoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();
    document.getElementById('computerChoice').innerHTML = computerChoice;
    document.getElementById('result').innerHTML = determineWinner(mychoice, computerChoice);
  }

  for(let input of elements) {
    input.addEventListener('click', e => {
      myFunction(e.target.id)
    })
  }


    // document.getElementById("rock").addEventListener("click", function() {
    //     const mychoice = getUserChoice(this.id);
    //     const computerChoice = getComputerChoice();
    //     document.getElementById('computerChoice').innerHTML = computerChoice;
    //     document.getElementById('result').innerHTML = determineWinner(getUserChoice(mychoice), computerChoice);

    // }, false);

    // document.getElementById("paper").addEventListener("click", function() {
    //     const mychoice = getUserChoice(this.id);
    //     const computerChoice = getComputerChoice();
    //     document.getElementById('computerChoice').innerHTML = computerChoice;
    //     document.getElementById('result').innerHTML = determineWinner(getUserChoice(mychoice), computerChoice);

    // }, false);

    // document.getElementById("scissors").addEventListener("click", function() {
    //     const mychoice = getUserChoice(this.id);
    //     const computerChoice = getComputerChoice();
    //     document.getElementById('computerChoice').innerHTML = computerChoice;
    //     document.getElementById('result').innerHTML = determineWinner(getUserChoice(mychoice), computerChoice);

    // }, false);





    