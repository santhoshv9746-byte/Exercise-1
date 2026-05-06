<input type="number" id="weight" placeholder="Enter baggage weight">
<button onclick="check()">Check</button>

<br><br>

<input type="number" id="removed" placeholder="Remove weight" style="display:none;">
<button id="remB" onclick="removeWeight()" style="display:none;">Remove</button>

<script>
let maxWeight = 15;

let check = () => {
  let weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(weight)) {
    alert("Please enter a valid weight");
    return;
  }

  if (weight > maxWeight) {
    alert("Overweight! Limit is 15kg");

    // Show remove options
    document.getElementById('removed').style.display = 'block';
    document.getElementById('remB').style.display = 'block';
  } else {
    alert("Weight is OK. You can proceed.");

    // Hide remove options
    document.getElementById('removed').style.display = 'none';
    document.getElementById('remB').style.display = 'none';
  }
};

let removeWeight = () => {
  let weight = parseFloat(document.getElementById('weight').value);
  let removed = parseFloat(document.getElementById('removed').value);

  if (isNaN(removed) || removed <= 0) {
    alert("Enter valid weight to remove");
    return;
  }

  let newWeight = weight - removed;

  document.getElementById('weight').value = newWeight;

  if (newWeight <= maxWeight) {
    alert("Now within limit! You can proceed.");

    // Hide remove options
    document.getElementById('removed').style.display = 'none';
    document.getElementById('remB').style.display = 'none';
  } else {
    alert("Still overweight! Current weight: " + newWeight + "kg");
  }
};
</script>
