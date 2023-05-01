import './style.css'
import battleLogo from '/battleship.svg'
// import { setupCounter } from '../counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${battleLogo}" class="logo" alt="Vite logo" />
  </div>
  sdsd
`

setupCounter(document.querySelector('#counter'))