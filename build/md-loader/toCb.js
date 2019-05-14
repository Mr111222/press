module.exports = function(source, map) {
  let s = source.replace(/el-/g, 'cb-').replace(/El-/g, 'Cb-');
  return s;
};
