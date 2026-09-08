import {Game} from './gameplay.js';

const panels={home:document.querySelector('#home'),settings:document.querySelector('#settings'),support:document.querySelector('#support'),game:document.querySelector('#game')};
let game=null;
function show(name){Object.values(panels).forEach(p=>p.classList.remove('active'));panels[name].classList.add('active');if(name==='game'&&!game)game=new Game(document.querySelector('#gameCanvas'))}
document.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',()=>{const action=btn.dataset.action;if(action==='play')show('game');else if(action==='settings')show('settings');else if(action==='support')show('support');else show('home')}));
document.querySelectorAll('[data-setting]').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('on');btn.textContent=btn.classList.contains('on')?'ON':'OFF'}));
show('home');
