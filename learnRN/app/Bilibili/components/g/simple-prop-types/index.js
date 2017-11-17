import PropTypes from 'prop-types';

const
  arr = PropTypes.array,
  bool = PropTypes.bool,
  func = PropTypes.func,
  num = PropTypes.number,
  obj = PropTypes.object,
  str = PropTypes.string,
  sym = PropTypes.symbol,
  arrRq = arr.isRequired,
  boolRq = bool.isRequired,
  funcRq = func.isRequired,
  numRq = num.isRequired,
  objRq = obj.isRequired,
  strRq = str.isRequired,
  symRq = sym.isRequired,
  objOf = (arg) => PropTypes.objectOf(arg),
  objOfRq = (arg) => PropTypes.objectOf(arg).isRequired,
  arrOf = PropTypes.arrayOf,
  arrOfRq = (arg) => PropTypes.arrayOf(arg).isRequired,
  shape = (arg) => PropTypes.shape(arg),
  shapeRq = (arg) => PropTypes.shape(arg).isRequired;

export default {
  arr,
  bool,
  func,
  num,
  obj,
  str,
  sym,
  arrRq,
  boolRq,
  funcRq,
  numRq,
  objRq,
  strRq,
  symRq,
  objOf,
  objOfRq,
  arrOf,
  arrOfRq,
  shape,
  shapeRq,
}