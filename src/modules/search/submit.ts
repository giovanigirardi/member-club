const form = document.querySelector("form");

if (form) {
  form.onsubmit = (event) => {
    event.preventDefault();

    const input = document.querySelector("#search-input") as HTMLInputElement;
    const value = input?.value;
    console.log(value);
  };
}
