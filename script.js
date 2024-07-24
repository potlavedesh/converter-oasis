function convertTemperature() {
    const temperatureInput = document.getElementById("Degree").value;
    const unit = document.getElementById("Type").value;
    let convertedTemperature;
    
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
    
    if (unit === "Celsius") {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
      document.getElementById("result").innerText = `${convertedTemperature.toFixed(2)}°F`;
    } else {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
      document.getElementById("result").innerText = `${convertedTemperature.toFixed(2)}°C`;
    }
  }