<input type="number" id="weight" placeholder="Enter baggage weight">
<button onclick="check()">Check</button>

<br><br>

<input type="number" id="removed" placeholder="Remove weight" style="display:none;">
<button id="remB" onclick="removeWeight()" style="display:none;">Remove</button>

<script>
let maxWeight = 15;

let check = () => {

    let weight =
        parseFloat(
            document.getElementById('weight').value
        );

    if (isNaN(weight)) {
        alert("Please enter a valid weight");
        return;
    }

    if (weight > maxWeight) {

        alert("Overweight baggage!");

        document.getElementById('removed').style.display = 'block';

        document.getElementById('remB').style.display = 'block';

    }
    else {

        alert("Weight is OK");

    }
}

let removeWeight = () => {

    let weight =
        parseFloat(
            document.getElementById('weight').value
        );

    let removed =
        parseFloat(
            document.getElementById('removed').value
        );

    let newWeight = weight - removed;

    document.getElementById('weight').value = newWeight;

    if (newWeight <= maxWeight) {

        alert("Now OK to proceed");

    }
    else {

        alert("Still overweight");

    }
}
</script>
