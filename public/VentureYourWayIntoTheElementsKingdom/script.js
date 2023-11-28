const story = {
    start: {
      text: "Welcome to the game",
      choices: ["Its time to conquer all the kingdoms..!!"],
      consequences: ["Fire"],
      image: ""
    },
    Fire: {
      text: " Entered into Fire Kingdom",
      choices: ["Start learning your skill"],
      consequences: ["strikeAtTheHeart"],
      image: "./images/fire.png"
    },
    strikeAtTheHeart: {
      text: "lets put your skills with a test with an opponent, Choose the correct attack to deliver to the attack or else you will loose...",
      choices: ["A","B","C"],
      consequences: ["A","B","C"],
      image: "./images/attack .png"
    },
    A: {
      text: "Its time to choose the best of one ",
      choices: ["Protect the Fire Kingdom","Learn a new skill "],
      consequences: ["ProtectthefireKingdom","newskill"],
      image: ""
    },
    ProtectthefireKingdom: {
      text: "You have protected the Fire kingdom and You completed the First level.",
      choices: ["Restart the Game","Take a step back"],
      consequences: ["start","A"],
      image: ""
    },
    newskill: {
      text: "Move and Complete the next kingdom.",
      choices: ["Water"],
      consequences: ["Water"],
      image: ""
    },
    B: {
        text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it. ",
        choices: ["Learn the skill again"],
        consequences: ["Fire"],
        image: "dragon_heartstrike.jpg"
    },
    Water: {
        text: "you have entered the water kingdom",
        choices: ["Start learning Your Skill"],
        consequences: ["strikeAtTheHeart1"],
        image: "./images/water.png"
      },
      strikeAtTheHeart1: {
        text: "lets put your skills with a test with an opponent, Choose the correct attack to deliver to the attack or else you will loose...",
        choices: ["A","B"],
        consequences: ["A1","B1"],
        image: "./images/waterattack.png"
      },
      A1: {
        text: "Its time to choose the best of one ",
        choices: ["Protect the Water Kingdom","Learn a new skill"],
        consequences: ["ProtectthewaterKingdom","attack1"],
        image: ""
      },
      ProtectthewaterKingdom: {
        text: "You have protected the Water kingdom and You completed the Second level.",
        choices: ["Restart the Game","Take a step back"],
        consequences: ["start","A1"],
        image: ""
      },
      // ... more stages of the story
      attack1: {
        text: "Move and Complete the next kingdom.",
        choices: ["Air"],
        consequences: ["Air"],
        image: ""
      },
      B1: {
          text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it",
          choices: ["Learn the skill again"],
          consequences: ["Fire"],
          image: ""
      },
      Air: {
        text: " Entered into Air Kingdom",
        choices: ["Start learning your skill"],
        consequences: ["strikeAtTheHeart2"],
        image: "./images/air.png"
      },
      strikeAtTheHeart2: {
        text: "lets put your skills with a test with an opponent, Choose the correct attack to deliver to the attack or else you will loose...",
        choices: ["A","B"],
        consequences: ["A2","B2"],
        image: "./images/air attack.png"
      },
      A2: {
        text: "Its time to choose the best of one ",
        choices: ["Protect the air Kingdom","Learn a new skill"],
        consequences: ["ProtecttheairKingdom","attack2"],
        image: ""
      },
      ProtecttheairKingdom: {
        text: "You have protected the air kingdom and You completed the Third level.",
        choices: ["Restart the Game","Take a step back"],
        consequences: ["start","A2"],
        image: ""
      },
      // ... more stages of the story
      attack2: {
        text: "Move and Complete the next kingdom.",
        choices: ["Sun"],
        consequences: ["Sun"],
        image: ""
      },
      B2: {
          text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it ",
          choices: ["Learn the skill again"],
          consequences: ["Fire"],
          image: ""
      },
      C: {
        text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it",
        choices: ["Learn the skill again"],
        consequences: ["Fire"],
        image: ""
      },
      Sun: {
        text: " Entered into Sun Kingdom",
        choices: ["Start learning your skill"],
        consequences: ["strikeAtTheHeart3"],
        image: "./images/sun.png"
      },
      strikeAtTheHeart3: {
        text: "lets put your skills with a test with an opponent, Choose the correct attack to deliver to the attack or else you will loose...",
        choices: ["A","B","C"],
        consequences: ["A3","B3","C1"],
        image: "./images/sun attack.png"
      },
      A3: {
        text: "Its time to choose the best of one ",
        choices: ["Protect the sun Kingdom","Learn a new skill"],
        consequences: ["ProtectthesunKingdom","attack3"],
        image: ""
      },
      ProtectthesunKingdom: {
        text: "You have protected the sun kingdom and You completed the Fourth level.",
        choices: ["Restart the Game","Take a step back"],
        consequences: ["start","A3"],
        image: ""
      },
      // ... more stages of the story
      attack3: {
        text: "Move and Complete the next kingdom.",
        choices: ["Moon"],
        consequences: ["Moon"],
        image: ""
      },
      B3: {
          text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it",
          choices: ["Learn the skill again"],
          consequences: ["Fire"],
          image: ""
      },
      C1: {
        text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it ",
        choices: ["Learn the skill again"],
        consequences: ["Fire"],
        image: ""
      },
      Moon: {
        text: " Entered into Moon Kingdom",
        choices: ["Start learning your skill"],
        consequences: ["strikeAtTheHeart4"],
        image: "./images/moon.png"
      },
      strikeAtTheHeart4: {
        text: "lets put your skills with a test with an opponent, Choose the correct attack to deliver to the attack or else you will loose...",
        choices: ["A","B"],
        consequences: ["A4","B4"],
        image: "./images/darkness.png"
      },
      A4: {
        text: "Its time to choose the best of one ",
        choices: ["Protect the Moon Kingdom","Learn a new skill"],
        consequences: ["ProtectthemoonKingdom","attack4"],
        image: ""
      },
      ProtectthemoonKingdom: {
        text: "You have protected the Moon kingdom and You completed the Fifth level.",
        choices: ["Restart the Game","Take a step back"],
        consequences: ["start","A4"],
        image: ""
      },
      attack4: {
        text: "Move and Complete the next kingdom.",
        choices: ["Thunder"],
        consequences: ["Thunder"],
        image: ""
      },
      B4: {
          text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it ",
          choices: ["Learn the skill again"],
          consequences: ["Fire"],
          image: ""
      },
      Thunder: {
        text: " Entered into Thunder Kingdom",
        choices: ["Start learning your skill"],
        consequences: ["strikeAtTheHeart5"],
        image: "./images/thunder.png"
      },
      strikeAtTheHeart5: {
        text: "lets put your skills with a test with an opponent, Choose the correct attack to deliver to the attack or else you will loose...",
        choices: ["A","B"],
        consequences: ["A5","B5"],
        image: "./images/thunder attack.png"
      },
      A5: {
        text: "Its time to choose the best of one ",
        choices: ["Protect the Thunder Kingdom","Learn a new skill"],
        consequences: ["ProtectthethunderKingdom","attack5"],
        image: ""
      },
      ProtectthethunderKingdom: {
        text: "You have protected the Thunder kingdom and You completed the Sixth level.",
        choices: ["Restart the Game","Take a step back"],
        consequences: ["start","A5"],
        image: ""
      },
      attack5: {
        text: "Move and Complete the next kingdom.",
        choices: ["Earth"],
        consequences: ["Earth"],
        image: ""
      },
      B4: {
          text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it ",
          choices: ["Learn the skill again"],
          consequences: ["Fire"],
          image: ""
      },
      Earth: {
        text: " Entered into Earth Kingdom",
        choices: ["Start learning your skill"],
        consequences: ["strikeAtTheHeart6"],
        image: "./images/earth.png"
      },
      strikeAtTheHeart6: {
        text: "lets put your skills with a test with an opponent, Choose the correct attack to deliver to the attack or else you will loose...",
        choices: ["A","B"],
        consequences: ["A6","B6"],
        image: "./images/earth attack.png"
      },
      A6: {
        text: "Its time to choose the best of one ",
        choices: ["Protect the Earth Kingdom","Learn a new skill"],
        consequences: ["ProtectthethunderKingdom","attack6"],
        image: ""
      },
      ProtecttheearthKingdom: {
        text: "You have protected the Earth kingdom and You completed the Seventh level.",
        choices: ["Restart the Game","Take a step back"],
        consequences: ["start","A6"],
        image: ""
      },
      attack6: {
        text: "Move and Complete the next kingdom.",
        choices: ["Heaven"],
        consequences: ["Heaven"],
        image: ""
      },
      B6: {
          text: "Sorry you didn't learn enough skill of Fire. Take a step back and look into it ",
          choices: ["Learn the skill again"],
          consequences: ["Fire"],
          image: ""
      },
      Heaven: {
        text: " Entered into Heaven Kingdom",
        choices: ["Start learning your skill"],
        consequences: ["strikeAtTheHeart7"],
        image: "./images/heaven.png"
      },
      strikeAtTheHeart7: {
        text: "lets put your skills with a test with an opponent, Choose the correct attack to deliver to the attack or else you will loose...",
        choices: ["A","B"],
        consequences: ["A7"],
        image: "./images/heaven attack.png"
      },
      A7: {
        text: "Its time to choose the best of one ",
        choices: ["Protect the Heaven Kingdom"],
        consequences: ["ProtecttheHeavenKingdom"],
        image: ""
      },
      ProtecttheHeavenKingdom: {
        text: "Congratulations and you won the game",
        choices: ["Do you wanna restart the game again..!!"],
        consequences: ["start"],
        image: ""
      },
    
    // ... more stages of the story
  };
  
  
  let currentStage = 'start';
  
  function startGame() {
    currentStage = 'start';
    updatePage();
  }
  
  function updatePage() {
    const stage = story[currentStage];
    document.getElementById('story-text').innerText = stage.text;
  
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
  
    stage.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.innerText = choice;
      button.addEventListener('click', () => makeChoice(index));
      choicesContainer.appendChild(button);
    });
  
    const image = document.getElementById('story-image');
    image.src = stage.image;
  }
  
  function makeChoice(index) {
    const stage = story[currentStage];
    const nextStage = stage.consequences[index];
    currentStage = nextStage;
    updatePage();
  }
  
  // Start the game
  startGame();
  