// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function noError (){
  let fix = document.querySelector('#modal')
  //console.log(fix.innerHTML)
   setTimeout (() => fix.className = 'hidden', 2000)
   fix.className ='hidden' // was added to pass the test 
  
  //fix.setAttribute ('hidden','')
}
noError()

function heartIsRed (){ // makes the heart red 
  let heart = document.querySelectorAll('.like')
  heart.className = "activated-heart"
  console.log (heart)
}
heartIsRed()






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



mimicServerCall()

.catch(function (error) { // checks for an error from the sever 
  alert("Sever has No connection");
  console.log(error.message);
});