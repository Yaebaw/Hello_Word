
function f4(a, b, l) {
    let sum = 0;
    for (let num of l) {
      if (num % a === 0 || num % b === 0) {
        sum += num;
      }
    }
    return sum;

    
  }

  function handleClicks() {
    const aValue = document.getElementById('aa').value;
    const bValue = document.getElementById('bb').value;
    const l_input = document.getElementById('ll').value;
  
    if (aValue === '' || bValue === '' || l_input.trim() === '') {
      alert("Please fill in all the fields correctly.");
      return;
    }
  
    const a = parseInt(aValue);
    const b = parseInt(bValue);
  
    const l = l_input.split(',').map(Number);
  
    const result = f4(a, b, l);
  
    alert("The sum of multiples of " + a + " or " + b + " is: " + result);
  }
  