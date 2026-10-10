

const planRadios = document.querySelectorAll('input[name="plan"]');

planRadios.forEach(function (radio) {
  radio.addEventListener("click", function () {
    if (this.checked && this.dataset.wasChecked === "true") {
      this.checked = false;
      this.dataset.wasChecked = "false";
    } else {
      planRadios.forEach(function (plan) {
        plan.dataset.wasChecked = "false";
      });

      this.dataset.wasChecked = "true";
    }
  });
});

const getStarted = document.getElementById("button");
const message = document.getElementById("message");

getStarted.addEventListener("click", function () {
  const selectedPlan = document.querySelector(
    'input[name="plan"]:checked'
  );

  if (!selectedPlan) {
    message.textContent = "Please select a plan before we proceed!!";
  } else if (selectedPlan.value === "starter") {
    message.textContent =
      "Congratulations!! Your free plan has been activated.";
  } else if (selectedPlan.value === "pro") {
    message.textContent =
      "Congratulations!! Your pro plan has been activated.";
  } else if (selectedPlan.value === "business") {
    message.textContent =
      "Congratulations!! Your Enterprise plan has been activated.";
  }
});







// const getStarted = document.getElementById("button");
// const message = document.getElementById("message");

// getStarted.addEventListener("click", function() {
//     const selectedPlan = document.querySelector(
//     'input[name= "plan"]:checked'
//   );

//   if(!selectedPlan){
//     message.textContent("Please select a plan before we proceed!!")
//   } else if(
//     selectedPlan.value=== "starter"
//   ){
//     message.textContent("Congratulations!! Your free plan has been activated ")
//   }else if(
//     selectedPlan.value=== "pro"
//   ){
//     message.textContent("Congratulations!! Your pro plan has been activated ")
//   }else if (
//     selectedPlan.value=== "business"
//   ){
//     message.textContent("Congratulations!! Your Enterprise plan has been activated")
//   }
// }
// )


