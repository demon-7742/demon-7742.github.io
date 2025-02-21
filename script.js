document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Purchase Button Click Event
  document.getElementById("purchase-btn").addEventListener("click", function () {
    alert("Redirecting to Purchase Page...");
    window.location.href = "https://pluginshop.link/DemonPlugins";
  });
});
