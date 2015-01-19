import {h} from 'virtual-dom';
import _ from 'lodash';

var elements = {};

`
  a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption
  cite code col colgroup data datalist dd del details dfn div dl dt em embed fieldset figcaption
  figure footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd keygen label
  legend li link main map mark math menu menuitem meta meter nav noscript object ol optgroup option
  output p param pre progress q rp rt ruby s samp script section select small source span strong
  style sub summary sup svg table tbody td template textarea tfoot th thead time title tr track
  u ul var video wbr
`
.split(/\s+/)
.forEach(function (selector) {
  elements[selector] = function (properties, children) {
    return h(selector, properties, children);
  };
});

elements.el = h;

export default elements;
