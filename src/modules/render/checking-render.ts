const checkingContainer = document.getElementById("checking");

export function renderChecking(user: User) {
  if (!checkingContainer) return;

  const { loyaltyCard } = user;

  clearChecking();

  const checkingTitle = document.createElement("h2");
  checkingTitle.classList.add("subtitle-sm");
  checkingTitle.textContent = "Cartão Fidelidade";

  const checkingInfo = document.createElement("span");
  checkingInfo.textContent = "Ao fazer cortes de cabelo, o décimo sai de graça!";
  checkingInfo.classList.add("text-sm");

  const checkingTextContainer = document.createElement("div");
  checkingTextContainer.classList.add("flex", "flex-col", "gap-1");
  checkingTextContainer.appendChild(checkingTitle);
  checkingTextContainer.appendChild(checkingInfo);

  const idLabel = document.createElement("span");
  idLabel.textContent = `ID: ${user.id}`;

  const idContainer = document.createElement("div");
  idContainer.classList.add("id-container", "flex", "align-center", "justify-center");
  idContainer.appendChild(idLabel);

  const checkingContainerContent = document.createElement("div");
  checkingContainerContent.classList.add("flex", "align-start", "justify-between", "gap-2");
  checkingContainerContent.appendChild(checkingTextContainer);
  checkingContainerContent.appendChild(idContainer);

  const checkingGrid = document.createElement("div");
  checkingGrid.classList.add("checking-grid");

  for (let i = 0; i < loyaltyCard.cutsNeeded; i++) {
    const checkContainer = document.createElement("div");
    checkContainer.classList.add("flex", "align-center", "justify-center");

    if (i < loyaltyCard.totalCuts && i !== loyaltyCard.cutsNeeded - 1) {
      const checkImage = document.createElement("img");
      checkImage.src = "src/assets/images/pin-check.png";
      checkImage.alt = "Check";

      checkContainer.appendChild(checkImage);
    }

    if (i === loyaltyCard.cutsNeeded - 1) {
      const giftImage = document.createElement("svg");
      giftImage.setAttribute("width", "24");
      giftImage.setAttribute("height", "24");
      giftImage.setAttribute("viewBox", "0 0 32 32");

      const path = document.createElement("path");
      path.setAttribute(
        "d",
        "M27 9.00004H22.615C22.6637 8.95879 22.7137 8.91879 22.7612 8.87504C23.1409 8.53776 23.4468 8.12577 23.66 7.66485C23.8731 7.20393 23.9889 6.70398 24 6.19629C24.0164 5.64088 23.9191 5.08798 23.7142 4.57152C23.5092 4.05506 23.2008 3.58596 22.8079 3.19299C22.4151 2.80003 21.9461 2.49151 21.4297 2.28636C20.9133 2.08122 20.3604 1.98378 19.805 2.00004C19.2971 2.01098 18.7969 2.12664 18.3358 2.33979C17.8746 2.55295 17.4624 2.859 17.125 3.23879C16.6581 3.7799 16.2785 4.39059 16 5.04879C15.7215 4.39059 15.3419 3.7799 14.875 3.23879C14.5376 2.859 14.1254 2.55295 13.6642 2.33979C13.2031 2.12664 12.7029 2.01098 12.195 2.00004C11.6396 1.98378 11.0867 2.08122 10.5703 2.28636C10.0539 2.49151 9.58491 2.80003 9.19206 3.19299C8.79922 3.58596 8.49083 4.05506 8.28584 4.57152C8.08085 5.08798 7.98358 5.64088 8 6.19629C8.01111 6.70398 8.12686 7.20393 8.34001 7.66485C8.55315 8.12577 8.85911 8.53776 9.23875 8.87504C9.28625 8.91629 9.33625 8.95629 9.385 9.00004H5C4.46957 9.00004 3.96086 9.21075 3.58579 9.58582C3.21071 9.9609 3 10.4696 3 11V15C3 15.5305 3.21071 16.0392 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17V25C5 25.5305 5.21071 26.0392 5.58579 26.4142C5.96086 26.7893 6.46957 27 7 27H14.5C14.6326 27 14.7598 26.9474 14.8536 26.8536C14.9473 26.7598 15 26.6326 15 26.5V15H5V11H15V15H17V11H27V15H17V26.5C17 26.6326 17.0527 26.7598 17.1464 26.8536C17.2402 26.9474 17.3674 27 17.5 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0392 27 25.5305 27 25V17C27.5304 17 28.0391 16.7893 28.4142 16.4142C28.7893 16.0392 29 15.5305 29 15V11C29 10.4696 28.7893 9.9609 28.4142 9.58582C28.0391 9.21075 27.5304 9.00004 27 9.00004ZM10.5638 7.37504C10.3889 7.2167 10.2487 7.02393 10.1519 6.80882C10.0551 6.59371 10.0038 6.36091 10.0013 6.12504C9.99493 5.84866 10.0438 5.57381 10.1451 5.31658C10.2463 5.05935 10.3979 4.82491 10.5909 4.627C10.784 4.4291 11.0145 4.27171 11.2691 4.16405C11.5238 4.05639 11.7973 4.00063 12.0737 4.00004H12.135C12.3709 4.00258 12.6037 4.05386 12.8188 4.15066C13.0339 4.24746 13.2267 4.38769 13.385 4.56254C14.4338 5.74754 14.8038 7.71254 14.9338 8.92754C13.7137 8.79879 11.75 8.42879 10.5638 7.37504ZM21.4387 7.37504C20.2525 8.42504 18.2837 8.79504 17.0637 8.92504C17.2125 7.61129 17.625 5.68754 18.625 4.56379C18.7833 4.38894 18.9761 4.24871 19.1912 4.15191C19.4063 4.05511 19.6391 4.00383 19.875 4.00129H19.9363C20.2127 4.00301 20.486 4.05991 20.7402 4.16863C20.9944 4.27735 21.2244 4.43571 21.4166 4.63443C21.6088 4.83315 21.7594 5.06824 21.8596 5.32592C21.9597 5.58359 22.0075 5.85867 22 6.13504C21.9959 6.36931 21.9438 6.60025 21.8468 6.81355C21.7498 7.02684 21.6101 7.21795 21.4363 7.37504H21.4387Z"
      );
      path.setAttribute("fill", "black");

      giftImage.appendChild(path);
      checkContainer.appendChild(giftImage);
    }

    checkingGrid.appendChild(checkContainer);
  }

  checkingContainer.appendChild(checkingContainerContent);
  checkingContainer.appendChild(checkingGrid);
  checkingContainer.classList.add("content-container");
}

function clearChecking() {
  if (!checkingContainer) return;

  checkingContainer.innerHTML = "";
  checkingContainer.classList.remove("content-container");
}
