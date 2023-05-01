import './style.css'
import battleLogo from '/battleship.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="/start" onclick="route()">
      <img src="${battleLogo}" class="logo" alt="Vite logo" />
    </a>
  </div>
`

setupCounter(document.querySelector('#counter'))
