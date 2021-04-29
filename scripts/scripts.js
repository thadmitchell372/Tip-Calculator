// Submit all inputs + select via "Calculate Tip" button
window.onload = () => {
  document.querySelector("#calculate").onclick = tipCalc;
};

// Calculate the Tip amount and the Total Bill amount
function tipCalc() {
  var noTipBill = parseInt(document.querySelector("#bill-amount").value);

  var serviceQuality = Number(document.querySelector("#service-quality").value);

  var parties = parseInt(document.querySelector("#split-parties").value);

  if (noTipBill === "" && serviceQuality === "Select" && parties === "0") {
    alert("Please enter a value greater than 0 into all fields");
    return;
  }

  console.log(typeof noTipBill);
  console.log(typeof serviceQuality);
  console.log(typeof parties);
  console.log(noTipBill);
  console.log(serviceQuality);
  console.log(parties);

  // calculate tip
  let tip = noTipBill * serviceQuality;
  let total = (noTipBill + tip) / parties;
  console.log(tip);
  console.log(total);

  document.getElementById("Tip").innerHTML = "The total tip cost is:" + tip;
}
