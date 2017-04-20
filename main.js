import foo, { bar } from './foo.js';

var works = foo() === 'foo' && bar() === 'bar';

var main = document.createElement('main');
main.textContent = works ? 'It works!' : 'Not yet :(';

document.body.appendChild(main);
