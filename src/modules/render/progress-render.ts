const progressContainer = document.getElementById("progress");

export function renderProgress(user: User) {
  if (!progressContainer) {
    return;
  }

  const { loyaltyCard } = user;

  clearProgress();

  const remainingCutsTitle = document.createElement("h1");
  remainingCutsTitle.id = "remaining-cuts";
  remainingCutsTitle.textContent = String(loyaltyCard.cutsRemaining);

  const remainingCutsText = document.createElement("span");
  remainingCutsText.textContent = "cortes restantes";

  const remainingCuts = document.createElement("div");
  remainingCuts.classList.add("flex", "align-baseline", "gap-1", "remaining-cuts");
  remainingCuts.appendChild(remainingCutsTitle);
  remainingCuts.appendChild(remainingCutsText);

  const progressBarFill = document.createElement("div");
  progressBarFill.classList.add("progress-bar-fill");
  progressBarFill.style.width = `${(loyaltyCard.totalCuts / loyaltyCard.cutsNeeded) * 100}%`;

  const progressBarContainer = document.createElement("div");
  progressBarContainer.classList.add("progress-bar-container");
  progressBarContainer.appendChild(progressBarFill);

  const cutsCount = document.createElement("span");
  cutsCount.classList.add("text-xs");
  cutsCount.textContent = `${loyaltyCard.totalCuts} de ${loyaltyCard.cutsNeeded}`;

  const progressBarOuterContainer = document.createElement("div");
  progressBarOuterContainer.classList.add("flex", "align-center", "gap-3");
  progressBarOuterContainer.appendChild(progressBarContainer);
  progressBarOuterContainer.appendChild(cutsCount);

  const progressLeftContent = document.createElement("div");
  progressLeftContent.classList.add("flex", "flex-1", "flex-col", "progress-left-content");
  progressLeftContent.appendChild(remainingCuts);
  progressLeftContent.appendChild(progressBarOuterContainer);

  const giftPinImage = document.createElement("img");
  giftPinImage.src = "src/assets/images/pin-gift.png";
  giftPinImage.alt = "Gift pin";

  const giftPinContainer = document.createElement("div");
  giftPinContainer.classList.add("flex", "align-center", "justify-center", "gift-pin-container");
  giftPinContainer.appendChild(giftPinImage);

  progressContainer.appendChild(progressLeftContent);
  progressContainer.appendChild(giftPinContainer);
  progressContainer.classList.add("content-container");
}

export function clearProgress() {
  if (!progressContainer) return;

  progressContainer.innerHTML = "";
  progressContainer.classList.remove("content-container");
}
