
function f5(a, l) {
    let sum = 0;
    for (let num of l) {
      if (num % a[0] === 0 || num % a[1] === 0) {
        sum += num;
      }
    }
    return sum;
  }

  function handleClick() {
    const a_input = document.getElementById('avalue1').value;
    const l_input = document.getElementById('lvalue1').value;

    if (a_input.trim() === '' || l_input.trim() === '') {
      alert("Please fill in both input boxes.");
      return;
    }

    const a = a_input.split(',').map(Number);
    const l = l_input.split(',').map(Number);

    if (a.length !== 2 || a.some(isNaN) || l.some(isNaN)) {
      alert("Please enter valid arrays. 'a' must contain exactly 2 numbers.");
      return;
    }

    const result = f5(a, l);

    alert("The sum of multiples of " + a[0] + " or " + a[1] + " is: " + result);
  }
