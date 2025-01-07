const time = document.getElementById('time');

const date = new Date();


let hours = date.getHours();

let minute = date.getMinutes();

time.textContent=`${hours} : ${minute}`;

const day = document.getElementById('day');

let daynow = date.getDay();

switch(daynow){
    case 1:
        day.textContent = 'Monday,';
    case 2:
        day.textContent = 'Tuesday,';
    case 3:
        day.textContent = 'Wednesday,';
    case 4:
        day.textContent = 'Thursday,';
    case 5:
        day.textContent = 'Friday,';
    case 6:
        day.textContent = 'Saturday,';
    case 0:
        day.textContent = `Sunday,`;
}
const container = document.getElementById('slay');
const play = document.getElementById('play');

play.onclick = function(){
    container.setAttribute("id", "container");
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const buttons = document.getElementsByTagName('button');


let currentplayer = 1;
let currentsymbol = 1;


btn1.onclick=function(){
 
   
    if( currentsymbol === 1){
      if(btn1.textContent===''){
        btn1.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        
        
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
       }
    }
    else if( currentsymbol === 2){
      if(btn1.textContent===''){
        if(btn1.textContent===''){
            btn1.textContent = 'O';
            checkWin();
            }
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
      }
    }
}
btn2.onclick=function(){
   
  if(btn2.textContent===''){
    if( currentsymbol === 1){
        btn2.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
    else if( currentsymbol === 2){
        btn2.textContent = 'O';
        checkWin();
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
   }
}

btn3.onclick=function(){
    
  if(btn3.textContent===''){
    if( currentsymbol === 1){
        btn3.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
    else if( currentsymbol === 2){
        btn3.textContent = 'O';
        checkWin();
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
   }
}
btn4.onclick=function(){
   
   if(btn4.textContent===''){
    if( currentsymbol === 1){
        btn4.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
    else if( currentsymbol === 2){
        btn4.textContent = 'O';
        checkWin();
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
   }
}
btn5.onclick=function(){
   
   if(btn5.textContent===''){
    if( currentsymbol === 1){
        btn5.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
    else if( currentsymbol === 2){
        btn5.textContent = 'O';
        checkWin();
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
   }
}
btn6.onclick=function(){
  
   if(btn6.textContent===''){
    if( currentsymbol === 1){
        btn6.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
    else if( currentsymbol === 2){
        btn6.textContent = 'O';
        checkWin();
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
   }
}
btn7.onclick=function(){
   
   if(btn7.textContent===''){
    if( currentsymbol === 1){
        btn7.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
    else if( currentsymbol === 2){
        btn7.textContent = 'O';
        checkWin();
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
   }
}
btn8.onclick=function(){
    
   if(btn8.textContent===''){
   
    if( currentsymbol === 1){
        btn8.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
    else if( currentsymbol === 2){
        btn8.textContent = 'O';
        checkWin();
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
   }
}

btn9.onclick=function(){
    
   if(btn9.textContent===''){
  
    if( currentsymbol === 1){
        btn9.textContent = 'X';
        checkWin();
        currentsymbol = 2;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
    else if( currentsymbol === 2){
        btn9.textContent = 'O';
        checkWin();
        currentsymbol = 1;
        if( currentplayer === 1){
            currentplayer = 2;
        }
        else if(currentplayer === 2){
            currentplayer = 1;
        }
    }
   }
}
btn1.addEventListener(click, btn1());
btn2.addEventListener(click, btn2());
btn3.addEventListener(click, btn3());
btn4.addEventListener(click, btn4());
btn5.addEventListener(click, btn5());
btn6.addEventListener(click, btn6());
btn7.addEventListener(click, btn7());
btn8.addEventListener(click, btn8());
btn9.addEventListener(click, btn9());


function checkWin() {
    // Check for win condition (horizontal, vertical, or diagonal)
    if (btn1.textContent === 'O' && btn2.textContent === 'O' && btn3.textContent === 'O' ||
        btn4.textContent === 'O' && btn5.textContent === 'O' && btn6.textContent === 'O' ||
        btn7.textContent === 'O' && btn8.textContent === 'O' && btn9.textContent === 'O' ||
        btn1.textContent === 'O' && btn4.textContent === 'O' && btn7.textContent === 'O' ||
        btn2.textContent === 'O' && btn5.textContent === 'O' && btn8.textContent === 'O' ||
        btn3.textContent === 'O' && btn6.textContent === 'O' && btn9.textContent === 'O' ||
        btn1.textContent === 'O' && btn5.textContent === 'O' && btn9.textContent === 'O' ||
        btn3.textContent === 'O' && btn5.textContent === 'O' && btn7.textContent === 'O') {
            window.alert(`Player ${currentplayer} wins!`);
            location.reload();
    } 
    else if (btn1.textContent === 'X' && btn2.textContent === 'X' && btn3.textContent === 'X' ||
        btn4.textContent === 'X' && btn5.textContent === 'X' && btn6.textContent === 'X' ||
        btn7.textContent === 'X' && btn8.textContent === 'X' && btn9.textContent === 'X' ||
        btn1.textContent === 'X' && btn4.textContent === 'X' && btn7.textContent === 'X' ||
        btn2.textContent === 'X' && btn5.textContent === 'X' && btn8.textContent === 'X' ||
        btn3.textContent === 'X' && btn6.textContent === 'X' && btn9.textContent === 'X' ||
        btn1.textContent === 'X' && btn5.textContent === 'X' && btn9.textContent === 'X' ||
        btn3.textContent === 'X' && btn5.textContent === 'X' && btn7.textContent === 'X') {
            window.alert(`Player ${currentplayer} wins!`);
            location.reload();
    }
}
  

function talks(answer){
 const talk1 = document.getElementById('talk1');
 const talk2 = document.getElementById('talk2');
 const talkcat1 = document.getElementById('talkcat1');

    if(answer === 'a'){
        
        talkcat1.src = 'talkcat2.png';
        talk1.textContent="im k";
        talk1.setAttribute("onclick", "talks('c')");

       
    }
    else if(answer === 'b'){
        talkcat1.src = 'talkcat3.png';
    }
    else if(answer === 'c'){
        talkcat1.src = 'talkcat4.png';
        talk1.textContent="let's play";
        talk1.setAttribute("onclick", "talks('d')");
    }
    else if(answer === 'd'){
        talk1.setAttribute("onclick", "talks('e')");
let max = 5;
let min = 2;

let attempt = 0;
let guess;
let answer;
let running = true;

while(running){
  guess = window.prompt(`Guess the number between ${min} - ${max}: `);
  guess = Number(guess);
  answer = Math.floor(Math.random()*(max - min) +1)+min;
  if(isNaN(guess)){
    window.alert('bro its not number');
  }
  else if(guess > max || guess < min){
    window.alert('tf follow the rules');
  }
  else{
    attempt++;
    if(guess > answer){
      window.alert('too high');
    }
    else if(guess < answer){
      window.alert('too low');
    }
    else{
      running = false;
      alert(`congratulations the answer is ${answer} and your attempt is ${attempt}`);
      talk1.textContent='Thanks !'; 
    }
  }
}

    }
    else if(answer == 'e'){
      talk1.textContent="lts'watch";
      talk1.setAttribute("onclick", "talks('f')");
      
    }
    else if(answer == 'f'){
      
      
      talk2.style.top='140px';

      const search = document.createElement('input');
      search.setAttribute('id', 'talk1');
     
      search.style.top='190px';

      talk1.parentNode.replaceChild(search, talk1);

      
      talk2.textContent='submit here';
      talk2.removeAttribute('onclick');
     talk2.onclick=function(){
      const searchvalue = search.value;
      window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchvalue)}`;
      talk1.textContent='its youtube i am not an movie theater bruh';
      }
    }
    }
    
}




