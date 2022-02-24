
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let a = matrix[1];
    let b = a.reverse();
    let c = matrix[0];

    let d = c.concat(b);

    let f = matrix[2];

    let h = d.concat(f);
  return h;
}
