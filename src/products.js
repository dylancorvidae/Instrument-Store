import instruments from './data/instruments.js';
import renderInstrument from './renderInstrument.js';

const list = document.getElementById('instruments');

for(let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    const dom = renderInstrument(instrument);
    list.appendChild(dom);
}