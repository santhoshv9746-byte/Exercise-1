
<input type="number" id="n" placeholder="Enter n">
<button onclick="euler1()">Euler Q1 (n = 1000)</button>

<br><br>

<input type="number" id="a" placeholder="Enter a">
<input type="number" id="b" placeholder="Enter b">
<input type="number" id="limit" placeholder="Enter n">
<button onclick="eulerCustom()">Custom</button>

<script>
// Project Euler Q1: sum of multiples of 3 or 5 below 1000
let euler1 = () => {

    let sum = 0;

    for (let i = 1; i < 1000; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    alert(sum);
}

let eulerCustom = () => {

    let a =
        parseInt(
            document.getElementById('a').value
        );

    let b =
        parseInt(
            document.getElementById('b').value
        );

    let n =
        parseInt(
            document.getElementById('n').value
        );

    let sum = 0;

    for (let i = 1; i < n; i++) {

        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }

    alert(sum);
}
</script>
