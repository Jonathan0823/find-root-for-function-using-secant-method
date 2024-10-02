function f(x) {
    return Math.pow(x, 3) - 20;
}

function secantMethod(x0, x1, tol, maxIter) {
    let x2;
    let iter = 0;

    console.log("Iteration\t x0\t\t x1\t\t x2\t\t f(x2)");
    do {
        x2 = x1 - f(x1) * (x1 - x0) / (f(x1) - f(x0));
        console.log(`${iter + 1}\t\t ${x0.toFixed(6)}\t ${x1.toFixed(6)}\t ${x2.toFixed(6)}\t ${f(x2).toFixed(6)}`);
        x0 = x1;
        x1 = x2;
        iter++;
    } while (Math.abs(f(x2)) > tol && iter < maxIter);

    return x2;
}

const x0 = 1;
const x1 = 4;
const tol = 1e-6;
const maxIter = 7;

const root = secantMethod(x0, x1, tol, maxIter);
console.log(`\nApproximate root after ${maxIter} iterations: ${root}`);