const form = document.getElementById("myForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    setTimeout(function() {
      form.style.display = "none";
      confirmation.style.display = "block";
    }, 100);
  });