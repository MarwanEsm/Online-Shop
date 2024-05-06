fetch("https://api.covid19api.com/summary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var countries = data.Countries;
    let display = GetSelectedValue(countries);
    addEventListeners(countries);
    createTable(countries);
  });

function addEventListeners(countries) {
  document
    .getElementById("countries-information")
    .addEventListener("change", () => {
      createTable(countries);
    });
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", () => {
      createTable(countries);
    });
  }
}

function createTable(list) {
  const table = document.getElementById("table");
  table.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (
      isInDopdown(list[i]) &&
      isNewDeaths(list[i]) &&
      isNewRecovered(list[i]) &&
      isTotalDeath(list[i]) &&
      isTotalRecovered(list[i])
    ) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = list[i].Country;
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      td2.innerHTML = list[i].NewDeaths;
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      td3.innerHTML = list[i].NewRecovered;
      tr.appendChild(td3);
      let td4 = document.createElement("td");
      td4.innerHTML = list[i].TotalDeaths;
      tr.appendChild(td4);
      let td5 = document.createElement("td");
      td5.innerHTML = list[i].TotalRecovered;
      tr.appendChild(td5);
      table.appendChild(tr);
    }
  }
}

function GetSelectedValue(datainfo) {
  for (let i = 0; i < datainfo.length; i++) {
    let select = document.getElementById("countries-information");
    let option = document.createElement("option");
    option.innerHTML = datainfo[i].Country;
    option.value = datainfo[i].Country;
    select.appendChild(option);
  }
}

function isInDopdown(country) {
  let q = document.getElementById("countries-information").value;
  if (q == "all") {
    return true;
  } else {
    if (country.Country === q) {
      return true;
    } else {
      return false;
    }
  }
}

function isNewDeaths(country) {
  const checkboxes = document.querySelectorAll("input[name=newDeath]:checked");

  const checkboxarray = [];
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxarray.push(checkboxes[i].value);
  }
  if (checkboxarray.length === 0) {
    return true;
  } else if (country.NewDeaths > 1000 && checkboxarray.includes("tooTooMuch")) {
    return true;
  } else if (
    country.NewDeaths <= 1000 &&
    country.NewDeaths > 100 &&
    checkboxarray.includes("tooMuch")
  ) {
    return true;
  } else if (
    country.NewDeaths <= 100 &&
    country.NewDeaths > 10 &&
    checkboxarray.includes("much")
  ) {
    return true;
  } else if (country.NewDeaths <= 10 && checkboxarray.includes("little")) {
    return true;
  } else return false;
}

function isNewRecovered(country) {
  const checkboxes = document.querySelectorAll(
    "input[name=newRecovered]:checked"
  );
  const checkboxarray = [];
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxarray.push(checkboxes[i].value);
  }
  if (checkboxarray.length === 0) {
    return true;
  } else if (
    country.NewRecovered > 1000 &&
    checkboxarray.includes("tooTooMuch1")
  ) {
    return true;
  } else if (
    country.NewRecovered <= 1000 &&
    country.NewRecovered > 100 &&
    checkboxarray.includes("tooMuch1")
  ) {
    return true;
  } else if (
    country.NewRecovered <= 100 &&
    country.NewRecovered > 10 &&
    checkboxarray.includes("much1")
  ) {
    return true;
  } else if (country.NewRecovered <= 10 && checkboxarray.includes("little1")) {
    return true;
  } else return false;
}

function isTotalDeath(country) {
  const checkboxes = document.querySelectorAll(
    "input[name=totalDeath]:checked"
  );
  const checkboxarray = [];
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxarray.push(checkboxes[i].value);
  }

  if (checkboxarray.length === 0) {
    return true;
  } else if (
    country.TotalDeaths > 1000 &&
    checkboxarray.includes("tooTooMuch2")
  ) {
    return true;
  } else if (
    country.TotalDeaths <= 1000 &&
    country.TotalDeaths > 100 &&
    checkboxarray.includes("tooMuch2")
  ) {
    return true;
  } else if (
    country.TotalDeaths <= 100 &&
    country.TotalDeaths > 10 &&
    checkboxarray.includes("much2")
  ) {
    return true;
  } else if (country.TotalDeaths <= 10 && checkboxarray.includes("little2")) {
    return true;
  } else return false;
}

function isTotalRecovered(country) {
  const checkboxes = document.querySelectorAll(
    "input[name=totalRecovered]:checked"
  );
  const checkboxarray = [];
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxarray.push(checkboxes[i].value);
  }

  if (checkboxarray.length === 0) {
    return true;
  } else if (
    country.TotalRecovered > 1000 &&
    checkboxarray.includes("tooTooMuch3")
  ) {
    return true;
  } else if (
    country.TotalRecovered <= 1000 &&
    country.TotalRecovered > 100 &&
    checkboxarray.includes("tooMuch3")
  ) {
    return true;
  } else if (
    country.TotalRecovered <= 100 &&
    country.TotalRecovered > 10 &&
    checkboxarray.includes("much3")
  ) {
    return true;
  } else if (
    country.TotalRecovered <= 10 &&
    checkboxarray.includes("little3")
  ) {
    return true;
  } else return false;
}

function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  let dots = document.getElementById("dots1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  let dots = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

document.getElementById("select-all").onclick = function () {
  var checkboxesss = document.querySelectorAll('input[type="checkbox"]');
  for (var checkbox of checkboxesss) {
    checkbox.checked = this.checked;
  }
};
