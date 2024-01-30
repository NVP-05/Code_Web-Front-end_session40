function savePersonalInfo() {
  let fullName = document.getElementById("fullName").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let personalInfo = {
    fullName: fullName,
    age: age,
    email: email,
  };

  let personalInfoJSON = JSON.stringify(personalInfo);
  localStorage.setItem("personalInfo", personalInfoJSON);
  displayPersonalInfo();
}

function displayPersonalInfo() {
  let personalInfoJSON = localStorage.getItem("personalInfo");

  if (personalInfoJSON) {
    let personalInfo = JSON.parse(personalInfoJSON);
    let personalInfoList = document.getElementById("personalInfoList");
    personalInfoList.innerHTML = "";
    let listItem = document.createElement("li");
    listItem.textContent =
      "Full Name: " +
      personalInfo.fullName +
      ", Age: " +
      personalInfo.age +
      ", Email: " +
      personalInfo.email;
    personalInfoList.appendChild(listItem);
  }
}

displayPersonalInfo();
