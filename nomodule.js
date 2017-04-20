(function(){
  // Safari doesn't support nomodule yet so check for main
  if(!document.querySelector('main')) {
    var main = document.createElement('main');
    main.textContent = 'Nope :(';
    document.body.appendChild(main);
    document.body.classList.add('nope');
  }
})();
