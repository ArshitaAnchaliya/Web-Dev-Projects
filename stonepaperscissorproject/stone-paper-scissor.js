
let score = (JSON.parse(localStorage.getItem('score')));

if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        tie: 0
    }
}

document.querySelector('.scoreboard').innerHTML = 'Wins:' + score.wins + ',' + 'Losses:' + score.losses + ',' + 'Ties:' + score.tie;

function generateamove() {
    const randomNum = Math.random();
    let computermove = '';
    if (randomNum >= 0 && randomNum < 1 / 3) {
        computermove = 'Stone'
    }

    else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        computermove = 'Paper'
    }

    else if (randomNum >= 2 / 3 && randomNum < 1) {
        computermove = 'Scissor'
    }

    return computermove;
}

function usermove(userselectedmove) {
    const computermove = generateamove();
    let result = '';
    if (userselectedmove === 'Stone') {
        if (computermove === 'Stone') {
            result = 'Tie.';
        }

        if (computermove === 'Paper') {
            result = 'You loose.';
        }

        if (computermove === 'Scissor') {
            result = 'You win.';
        }
    }

    else if (userselectedmove === 'Paper') {
        if (computermove === 'Stone') {
            result = 'You win.';
        }

        else if (computermove === 'Paper') {
            result = 'Tie.';
        }

        else if (computermove === 'Scissor') {
            result = 'You loose.';
        }
    }

    else if (userselectedmove === 'Scissor') {
        if (computermove === 'Stone') {
            result = 'You loose.';
        }

        else if (computermove === 'Paper') {
            result = 'You win.';
        }

        else if (computermove === 'Scissor') {
            result = 'Tie.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    }

    else if (result === 'You loose.') {
        score.losses += 1;
    }

    else if (result === 'Tie.') {
        score.tie += 1;
    }


    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-playerpick').innerHTML =
     `You
  <img src="images/${userselectedmove}-emoji.png">
 
  <img src="images/${computermove}-emoji.png" >
  computer`;

    document.querySelector('.scoreboard').innerHTML = 'Wins:' + score.wins + ',' + 'Losses:' + score.losses + ',' + 'Ties:' + score.tie;


    /*alert( 'you picked' + ' ' + userselectedmove + ',' + 'computer picked' + ' ' + computermove +'.'+result
    +'\n wins:'+ score.wins+ ',' +'losses:'+ score.losses+ ',' +'Ties:'+ score.tie);*/
}

