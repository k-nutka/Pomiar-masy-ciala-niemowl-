window.onload = function () {
  console.log("Start");
};

//Pobranie danych:

// do utraty
let birthWeight = document.getElementById("birth-weight");
let currentWeight = document.getElementById("current-weight");
let buttonLoss = document.getElementById("button-loss");
let modal = document.querySelector(".modal");
let infoForUser = document.getElementById("info-for-user");
let closeButton = document.getElementById("close-button");

//Obliczenie utrata masy ciała:

function weightLoss() {
  emptySpace();

  let lost = Number(birthWeight.value) - Number(currentWeight.value);
  let procent = (lost * 100) / Number(birthWeight.value);
  let result = procent.toFixed(1);

  if (result < 0) {
    modal.style.display = "flex";
    infoForUser.innerHTML =
      "Brak spadku masy ciała. Upewnij się, że pomiary masy ciała zostały prawidłowo wprowadzone.";
  } else if (result >= 100) {
    modal.style.display = "flex";
    infoForUser.innerHTML = `Nieprawidłowo podane dane. Sprawdź i uzupełnij ponownie!`;
  } else if (result < 10) {
    modal.style.display = "flex";
    infoForUser.innerHTML = `Noworodek stracił ${result} % masy urodzeniowej. 
    Utrata masy ciała w granicy fizjologii.`;
  } else if (result >= 10) {
    modal.style.display = "flex";
    infoForUser.innerHTML = `Utrata masy ciała przekracza 10% masy urodzeniowej i wynosi ${result}%.<br>
    Zalecany konsultacja z położną lub lekarzem.`;
  }
}
function clearLoss() {
  birthWeight.value = "";
  currentWeight.value = "";
}

function emptySpace() {
  if (birthWeight.value === "") {
    birthWeight.style.borderColor = "red";

    alert("Uzupełnij wszystkie dane wymagane do obliczenia utraty masy ciała!");
    modal.style.display = "flex";
    infoForUser.innerHTML = `Uzupełnij wszystkie dane`;
  } else if (currentWeight.value === "") {
    currentWeight.style.borderColor = "red";
    alert("Uzupełnij wszystkie dane wymagane do obliczenia utraty masy ciała!");
  }
}

buttonLoss.addEventListener("click", weightLoss);
closeButton.addEventListener("click", function () {
  clearLoss();
  clearIncrease();
  modal.style.display = "none";
});

//do przyrostu
let birthDate = null;

let birthDay = document.getElementById("birth-date");
let lastMeasurement = document.getElementById("last-measurement"); // ostatni pomiar - data kiedy?
let lastWeight = document.getElementById("last-wieight");
let actuallyWeight = document.getElementById("actually-weight");
let buttonIncrease = document.getElementById("button-increase");

buttonIncrease.addEventListener("click", function (e) {
  e.preventDefault();
  checkAll();

  let today = new Date().getTime();
  let birthDate = document.getElementById("birth-date").value;
  birthDate = new Date(birthDate);

  birthDate = birthDate.getTime();

  let subtraction = (today - birthDate) / 1000; // getTime() zwraca ilość w milisekundach a więc dzielimy na 1000 by uzyskać sekundy
  let howMonth = Math.floor(subtraction / 2629756.8);

  let lastChecked = document.getElementById("last-measurement").value;
  lastChecked = new Date(lastChecked);
  lastChecked = lastChecked.getTime();

  let subtraction2 = (today - lastChecked) / 1000; // jak wyżej uzyskujemy sekundy
  let howDays = Math.floor(subtraction2 / 86400);

  let weightDifference = actuallyWeight.value - lastWeight.value;

  let growth = weightDifference / howDays;

  if (howMonth < 0) {
    alert("Błąd");
  } else if (howMonth <= 3) {
    if (growth >= 26 && growth <= 31) {
      modal.style.display = "flex";
      infoForUser.innerHTML = `Przyrost masy ciała wynosi ${growth} g/dobę.<br>
    Jest to prawidłowy przyrost masy ciała dla dziecka między 0-3 miesiącem życia.`;
    } else {
      modal.style.display = "flex";
      infoForUser.innerHTML = `Przyrost masy ciała wynosi ${growth} g/ dobę.<br>
    Między 0-3. miesiącem życia niemowlę powinno przybierać średnio między 26-31g/dobę. <br>
    Wynik odbiegający od normy nie oznacza, że dziecko przybiera nieprawidłowo, jednak należy dokonać głębszej analizy przyrostów masy ciała dziecka<br>
    w oparciu o siatki centylowe oraz pozostałe wskaźniki skutecznego karmienia.`;
    }
  } else if (howMonth > 3 && howMonth <= 6) {
    if (growth == 17 || growth == 18) {
      modal.style.display = "flex";
      infoForUser.innerHTML = `Przyrost masy ciała wynosi ${growth} g/ dobę.<br>
        Jest to prawidłowy przyrost masy ciała dla dziecka między 3-6. miesiącem życia.`;
    } else {
      modal.style.display = "flex";
      infoForUser.innerHTML = `Przyrost masy ciała wynosi ${growth} g/ dobę.<br>
        Między 3.-6 miesiącem życia niemowlę powinno przybierać średnio między 17-18g/dobę. <br>
        Wynik odbiegający od normy nie oznacza, że dziecko przybiera nieprawidłowo, jednak należy dokonać głębszej analizy przyrostów masy ciała dziecka<br>
        w oparciu o siatki centylowe oraz pozostałe wskaźniki skutecznego karmienia..`;
    }
  } else if (howMonth > 6 && howMonth <= 9) {
    if (growth == 12 || growth == 13) {
      modal.style.display = "flex";
      infoForUser.innerHTML = `Przyrost masy ciała wynosi ${growth} g/ dobę.<br>
        Jest to prawidłowy przyrost masy ciała dla dziecka między 6-9. miesiącem życia.`;
    } else {
      modal.style.display = "flex";
      infoForUser.innerHTML = `Przyrost masy ciała wynosi ${growth} g/ dobę.<br>
        Między 6-9. miesiącem życia niemowlę powinno przybierać średnio między 12-13 g/dobę. <br>
        Wynik odbiegający od normy nie oznacza, że dziecko przybiera nieprawidłowo, jednak należy dokonać głębszej analizy przyrostów masy ciała dziecka<br>
        w oparciu o siatki centylowe oraz pozostałe wskaźniki skutecznego karmienia..`;
    }
  } else if (howMonth > 9 && howMonth <= 12) {
    if (growth == 9) {
      modal.style.display = "flex";
      infoForUser.innerHTML = `Przyrost masy ciała wynosi ${growth} g/ dobę.<br>
        Jest to prawidłowy przyrost masy ciała dla dziecka między 9-12. miesiącem życia.`;
    } else {
      modal.style.display = "flex";
      infoForUser.innerHTML = `Przyrost masy ciała wynosi ${growth} g/ dobę.<br>
        Między 9-12. miesiącem życia niemowlę powinno przybierać średnio między 9 g/dobę. <br>
        Wynik odbiegający od normy nie oznacza, że dziecko przybiera nieprawidłowo, jednak należy dokonać głębszej analizy przyrostów masy ciała dziecka<br>
        w oparciu o siatki centylowe oraz pozostałe wskaźniki skutecznego karmienia..`;
    }
  } else if (howMonth > 12) {
    modal.style.display = "flex";
    infoForUser.innerHTML = `Zastosowana w aplikacji skala przyrostów masy ciała nie obejmuje dzieci powyżej 1. roku życia`;
  }
});

function checkAll() {
  if (birthDay.value === "") {
    document.getElementById("birth-date").style.borderColor = "red";
    alert(
      "Uzupełnij wszystkie pola wymagane do obliczenia przyrostu masy ciała!"
    );
  } else if (lastMeasurement.value === "") {
    document.getElementById("last-measurement").style.borderColor = "red";
    alert(
      "Uzupełnij wszystkie pola wymagane do obliczenia przyrostu masy ciała!"
    );
  } else if (lastWeight.value === "") {
    document.getElementById("last-wieight").style.borderColor = "red";
    alert(
      "Uzupełnij wszystkie pola wymagane do obliczenia przyrostu masy ciała!"
    );
  } else if (actuallyWeight.value === "") {
    document.getElementById("actually-weight").style.borderColor = "red";

    alert(
      "Uzupełnij wszystkie pola wymagane do obliczenia przyrostu masy ciała!"
    );
  }
}

function clearIncrease() {
  birthDay.value = "";
  lastMeasurement.value = "";
  lastWeight = "";
  actuallyWeight = "";
}
