import Component from 'can-component';

export default Component.extend({
    tag: 'my-component',
    ViewModel: {
        map: {
            serialize: false,
        }
    },
    view: `
        {{#for(id of map.layerIds)}}
            {{map._layers[id].id}}<hr />
        {{/for}}
    `

});