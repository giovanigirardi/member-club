import { searchUserById } from "../../services/search-user-by-id";

const form = document.querySelector("form");

if (form) {
  form.onsubmit = async (event) => {
    event.preventDefault();

    const input = document.querySelector("#search-input") as HTMLInputElement;
    const value = input?.value;

    if (!value) {
      alert("Please, inform the user ID.");
      return;
    }

    if (value.replace(/\D/g, "").length !== 12) {
      alert("The user ID must have 12 characters.");
      return;
    }

    const userInfo = await searchUserById(value);

    console.log(userInfo);
  };
}
