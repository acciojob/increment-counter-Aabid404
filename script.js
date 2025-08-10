 const counterElement = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    incrementBtn.addEventListener("click", function() {
      // Get current value as number
      let currentValue = parseInt(counterElement.textContent);

      // Show alert with un-incremented value
      alert(currentValue);

      // Increment and update
      counterElement.textContent = currentValue + 1;
    });