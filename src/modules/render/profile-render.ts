const profileContainer = document.getElementById("profile");

export function renderProfile(user: User) {
  if (!profileContainer) return;

  clearProfile();

  const profileImage = document.createElement("img");
  profileImage.src = user.profilePicture;
  profileImage.alt = "Profile Picture";

  const profilePicContainer = document.createElement("div");
  profilePicContainer.classList.add("profile-pic-container");
  profilePicContainer.appendChild(profileImage);

  const profileNameLabel = document.createElement("h1");
  profileNameLabel.classList.add("title-sm");
  profileNameLabel.textContent = user.name;

  const clientSinceLabel = document.createElement("span");
  clientSinceLabel.classList.add("text-xs");
  clientSinceLabel.textContent = `Cliente desde ${user.clientSince}`;

  const profileInfoContainer = document.createElement("div");
  profileInfoContainer.classList.add("flex", "flex-col", "gap-1");

  profileInfoContainer.appendChild(profileNameLabel);
  profileInfoContainer.appendChild(clientSinceLabel);

  profileContainer?.appendChild(profilePicContainer);
  profileContainer?.appendChild(profileInfoContainer);
  profileContainer?.classList.add("content-container");
}

function clearProfile() {
  if (!profileContainer) return;

  profileContainer.innerHTML = "";
  profileContainer.classList.remove("content-container");
}
