let count = 0; // initial value

    const countDisplay = document.getElementById("count");
    const incrementBtn = document.getElementById("incrementBtn");

    incrementBtn.addEventListener("click", function() {
      count++;
      countDisplay.textContent = count;
    });