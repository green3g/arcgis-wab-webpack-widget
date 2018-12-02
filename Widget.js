define(['dojo/_base/declare',
  'jimu/BaseWidget',
  './dist/app/main'
], function(declare, BaseWidget, App) {
  var clazz = declare([BaseWidget], {
    postCreate: function(){
      App.default(this.domNode, this);
    }
  });
  return clazz;
});