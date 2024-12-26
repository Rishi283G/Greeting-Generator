document
  .getElementById("greetingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
      const greetingMessage = `
      <h2>Happy New Year, ${name}!</h2>
      <p>${message}</p>
      <p>🎉 Cheers to a fantastic<br> 2025 ahead! 🎇</p>
    `;

      const greetingOutput = document.getElementById("greetingOutput");
      greetingOutput.innerHTML = greetingMessage;
      greetingOutput.style.display = "block";

      // Disable animation when generating the image for download
      greetingOutput.style.animation = "none";

      // Show the download button
      document.getElementById("downloadButton").style.display = "inline-block";
    } else {
      alert("Please enter both name and message!");
    }
  });

// Add download functionality
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const greetingOutput = document.getElementById("greetingOutput");

    html2canvas(greetingOutput).then((canvas) => {
      const link = document.createElement("a");
      link.download = "NewYearGreeting.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const greetingOutput = document.getElementById("greetingOutput");

    html2canvas(greetingOutput).then((canvas) => {
      const link = document.createElement("a");
      link.download = "NewYearGreeting.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });
