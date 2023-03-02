function recursiveAnimateTitle(string){
    let firstLetter = string[0];
    let title = document.querySelector('title');
    title.innerHTML += firstLetter;
    if (string.length > 1) {
      setTimeout(function() {
        recursiveAnimateTitle(string.substring(1));
      }, 100);
    }
  }

  function AnimateTitle(string) {
    document.querySelector('title').innerHTML = "";
    recursiveAnimateTitle(string);
  }

  AnimateTitle("Gates 'n' Fences");
window.onscroll = function() {myFunction()};