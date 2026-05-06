let listEuler1 = (a, b, l) => {

    let sum = 0;

    for (let x of l) {

        if (x % a === 0 || x % b === 0) {
            sum += x;
        }
    }

    return sum;
}

let listEuler2 = (a, l) => {

    let sum = 0;

    for (let x of l) {

        for (let m of a) {

            if (x % m === 0) {

                sum += x;
                break;
            }
        }
    }

    return sum;
}

let listEuler3 = (a, l) => {

    return l
        .filter(x => a.some(m => x % m === 0))
        .reduce((acc, val) => acc + val, 0);
}

let eulerlist = () => {

    let a =
        parseInt(
            document.getElementById('a1').value
        );

    let b =
        parseInt(
            document.getElementById('b1').value
        );

    let l =
        document.getElementById('l').value
            .split(" ")
            .map(x => parseInt(x));

    alert(listEuler1(a, b, l));
}

let euler2Lists = () => {

    let a =
        document.getElementById('aList').value
            .split(" ")
            .map(x => parseInt(x));

    let l =
        document.getElementById('mList').value
            .split(" ")
            .map(x => parseInt(x));

    alert(listEuler2(a, l));
}

let euler2Lists1 = () => {

    let a =
        document.getElementById('aList').value
            .split(" ")
            .map(x => parseInt(x));

    let l =
        document.getElementById('mList').value
            .split(" ")
            .map(x => parseInt(x));

    alert(listEuler3(a, l));
}
