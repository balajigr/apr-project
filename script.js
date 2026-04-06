const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx_81gGJ0wDRCikgU4ixREZ93TInFSUS9RhXtwxdUx8jB8Mrd_Jl6LdbrwEx50gTaWWTA/exec";


const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new URLSearchParams({
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
  });

  statusText.textContent = "Submitting...";
  submitBtn.disabled = true;

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      statusText.textContent = "Submitted successfully.";
      form.reset();
    } else {
      statusText.textContent = `Error: ${result.message}`;
    }
  } catch (error) {
    console.error(error);
    statusText.textContent = `Request failed: ${error.message}`;
  } finally {
    submitBtn.disabled = false;
  }
});