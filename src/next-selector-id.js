(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxAbstractDomSelector = nx.AbstractDomSelector || require('next-abstract-dom-selector');

  var NxSelectorId = nx.declare('nx.SelectorId', {
    extends: NxAbstractDomSelector,
    methods: {
      exec: function() {
        var el = this.context.getElementById(this.selector);
        return el ? [el] : [];
      },
      toArray: function(inElements) {
        return inElements;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSelectorId;
  }
})();
