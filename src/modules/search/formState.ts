const inputElement = document.getElementById("search-input") as HTMLInputElement;
const submitButton = document.getElementById("search-submit") as HTMLButtonElement;

inputElement.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  let value = target.value.replace(/\D/g, "");

  if (value.length > 12) {
    value = value.slice(0, 12);
  }

  const formattedValue = value.replace(/(\d{3})(?=\d)/g, "$1-");

  target.value = formattedValue;

  if (value.length === 12) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
