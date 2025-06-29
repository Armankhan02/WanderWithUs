document.addEventListener("DOMContentLoaded", function () {
  const selectedPackage = localStorage.getItem("selectedPackage");
  document.getElementById("package").value = selectedPackage || "";

  const form = document.getElementById("bookingForm");
  if (!form) {
    console.error("❌ bookingForm not found in HTML");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      package: document.getElementById('package').value,
    };

    fetch('http://localhost:3000/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("confirmationMessage", data.message || "Booking successful!");
        localStorage.setItem("bookingDetails", JSON.stringify(bookingData));
        window.location.href = data.redirect || "thankyou.html";
      } else {
        alert(data.message || "Booking failed. Please try again.");
      }
    })
    .catch(err => {
      console.error("Booking error:", err);
      alert("Something went wrong with the booking request.");
    });
  });
});
