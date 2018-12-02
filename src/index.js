import stache from 'can-stache';
import './my-component/my-component';

// Remove in production!
import('can-debug').then((debug) => {
    debug.default();
});

export default function render(el, data = {}){
    el.appendChild(stache('<my-component map:from="map" />')(data));
}