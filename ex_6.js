
function f6(a, l) {
    let sum = 0;
    for (let num of l) {
      for (let factor of a) {
        if (num % factor === 0) {
          sum += num;
          break; // No need to check other factors once matched
        }
      }
    }
    return sum;
  }

  function handleClick() {
    const a_input = document.getElementById('avalue2').value;
    const l_input = document.getElementById('lvalue2').value;

    if (a_input.trim() === '' || l_input.trim() === '') {
      alert("Please fill in both input boxes.");
      return;
    }

    const a = a_input.split(',').map(Number);
    const l = l_input.split(',').map(Number);

    if (a.some(isNaN) || l.some(isNaN)) {
      alert("Please enter valid comma-separated numbers.");
      return;
    }

    const result = f6(a, l);

    alert("The sum of all multiples of " + a.join(", ") + " in the list is: " + result);
  }
