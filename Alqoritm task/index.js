function getData(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      let charValue = charCode - 64; 
      if (sum + charValue > 100) {
        break;
      }
      sum += charValue;
    }
    return sum;
  }
  
        function showSum() {
          let input = document.getElementById("input").value;
          let output = document.getElementById("output");
          output.innerText = getData(input);
        }