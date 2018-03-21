import PropTypes from 'prop-types';


const
    arr   = PropTypes.array,
    bool  = PropTypes.bool,
    func  = PropTypes.func,
    num   = PropTypes.number,
    obj   = PropTypes.object,
    str   = PropTypes.string,
    sym   = PropTypes.symbol,
    any   = PropTypes.any,
    el    = PropTypes.element,
    node  = PropTypes.node,
    types = {
    arr, bool,  func,   num,    obj,
    str, sym,   any,    el,     node,
    arrRq:  arr.isRequired,
    boolRq: bool.isRequired,
    funcRq: func.isRequired,
    numRq:  num.isRequired,
    objRq:  obj.isRequired,
    strRq:  str.isRequired,
    symRq:  sym.isRequired,
    anyRq:  any.isRequired,
    elRq:   el.isRequired,
    node:   node.isRequired,
    objOf:      PropTypes.objectOf(arg),
    objOfRq:    (arg) => PropTypes.objectOf(arg).isRequired,
    arrOf:      PropTypes.arrayOf,
    arrOfRq:    (arg) => PropTypes.arrayOf(arg).isRequired,
    shape:      PropTypes.shape(arg),
    shapeRq:    (arg) => PropTypes.shape(arg).isRequired,
    instanceOf: PropTypes.instanceOf(arg),
    oneOf:      PropTypes.oneOf(arg),
    oneOfType:  PropTypes.oneOfType(arg),
  };

export default (callback) => callback({...types})