module.exports = function(source, map) {
  let s = source.replace(/el-/g, 'cb-').replace(/El-/g, 'Cb-').replace(/```javascript/g, '```html');
  return s;
};
