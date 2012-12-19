(function() {

  cartodb.createVis = function(el, vizjson, options, callback) {
    if(!el) {
      throw new TypeError("an dom element should be provided");
    }
    el = (typeof el === 'string' ? document.getElementById(el) : el);
    var vis = new cartodb.vis.Vis({ el: el });
    if(vizjson) {
      vis.load(vizjson, options);
      if(callback) {
        vis.done(callback);
      }
    }
    return vis;
  };

})();
