function populateDiv() {
  const a = parseInt(document.getElementById("first_Number").value);
  const b = parseInt(document.getElementById("second_Number").value);
  const sum = document.getElementById("finalsum");
  sum.innerHTML = `Total sum : ${a} + ${b}  = ${a + b}`;
}

// function debouncePopulateDiv() {
//   const timeOut = setTimeout(function () {
//     populateDiv();
//   }, 100);
// }

// how to clear previous timeout and start new
let timeOut;
function debouncePopulateDiv() {
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    populateDiv();
  }, 100);
}

// function populateDiv() {
//   const a = document.getElementById("first_Number").value;
//   const b = document.getElementById("second_Number").value;

//   sending req to server and  get reponse to the sum

//   const res = fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);
//   res.then(function (response) {
//     response.text().then(function (ans) {
//       document.getElementById("finalsum").innerHTML = ans;
//     });
//   });
// }

// clearner way to write function
// async function populateDiv() {
//     const a = document.getElementById("first_Number").value;
//       const b = document.getElementById("second_Number").value;

//       const response= await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);
//       const ans=await response.text();
//       document.getElementById("finalsum").innerHTML=ans;
// }
