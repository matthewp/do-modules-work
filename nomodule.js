(function(){
  // Safari doesn't support nomodule yet so check for main
  if(!document.querySelector('main')) {
    var main = document.createElement('main');
    main.textContent = 'Not yet :(';
    document.body.appendChild(main);
  }
})();
