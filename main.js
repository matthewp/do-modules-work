import foo, { bar } from './foo.js';

var works = foo() === 'foo' && bar() === 'bar';

var main = document.createElement('main');

main.textContent = works ? 'It does!' : 'Nope :(';

document.body.appendChild(main);
document.body.classList.add(works ? 'yep' : 'nope');
