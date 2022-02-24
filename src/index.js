
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let a = matrix.length;
        if (a == 0) {
            return [];
        }

        if (a == 1) {
            let b = matrix[0];
            return b;

        } else if (a == 2) {
            let one = matrix[0];
            let two = matrix[1].reverse();
            let h = one.concat(two);
            return h;

        } else if (a == 3) {
            let g = matrix[0];
            let p = matrix[1].reverse();
            let s = g.concat(p);
            let u = matrix[2];
            let o = s.concat(u);
            return o;

        } else if (a == 4) {
            let w = matrix[0];
            let e = matrix[1].reverse();
            let t = w.concat(e);
            let j = matrix[2];
            let l = t.concat(j);
            let v = matrix[3].reverse();
            let k = l.concat(v);
            return k; 
        }

};
