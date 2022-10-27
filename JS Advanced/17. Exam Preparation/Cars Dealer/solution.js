window.addEventListener("load", solve);

function solve() {
  const makeInputEl = document.getElementById("make");
  const modelInputEl = document.getElementById("model");
  const yearInputEl = document.getElementById("year");
  const fuelInputEl = document.getElementById("fuel");
  const firstPriceInputEl = document.getElementById("original-cost");
  const sellingPriceInputEl = document.getElementById("selling-price");
  const tableEl = document.getElementById("table-body");
  const soldCarsEl = document.getElementById("cars-list");
  const totalProfit = document.getElementById("profit");
  let profitMade = 0;

  const submitButtonEl = document
    .getElementById("publish")
    .addEventListener("click", (ev) => {
      ev.preventDefault();
      if (
        makeInputEl.value !== "" &&
        modelInputEl.value !== "" &&
        yearInputEl.value !== "" &&
        fuelInputEl.value !== "" &&
        firstPriceInputEl.value !== "" &&
        sellingPriceInputEl.value
      ) {
        addPost(
          ev,
          makeInputEl.value,
          modelInputEl.value,
          yearInputEl.value,
          fuelInputEl.value,
          firstPriceInputEl.value,
          sellingPriceInputEl.value
        );
        clearInputFileds();
      }
    });

  function addPost(
    ev,
    makeInputEl,
    modelInputEl,
    yearInputEl,
    fuelInputEl,
    firstPriceInputEl,
    sellingPriceInputEl
  ) {
    // ev.preventDefault();

    const tr = elGenerator("tr");
    tr.setAttribute("class", "row");
    elGenerator("td", `${makeInputEl}`, tr);
    elGenerator("td", `${modelInputEl}`, tr);
    elGenerator("td", `${yearInputEl}`, tr);
    elGenerator("td", `${fuelInputEl}`, tr);
    elGenerator("td", `${firstPriceInputEl}`, tr);
    elGenerator("td", `${sellingPriceInputEl}`, tr);
    const actionCell = elGenerator("td");
    tr.appendChild(actionCell);

    const editBtn = elGenerator("button", "Edit", actionCell);
    editBtn.setAttribute("class", "action-btn");
    editBtn.setAttribute("id", "edit");
    const sellBtn = elGenerator("button", "Sell", actionCell);
    sellBtn.setAttribute("class", "action-btn");
    sellBtn.setAttribute("id", "sell");

    tableEl.appendChild(tr);

    sellBtn.addEventListener("click", (ev) =>
      sellCar(
        ev,
        makeInputEl,
        modelInputEl,
        yearInputEl,
        firstPriceInputEl,
        sellingPriceInputEl
      )
    );
    editBtn.addEventListener("click", (ev) =>
      editPost(
        ev,
        makeInputEl,
        modelInputEl,
        yearInputEl,
        fuelInputEl,
        firstPriceInputEl,
        sellingPriceInputEl
      )
    );
  }

  function editPost(
    ev,
    _makeInputEl,
    _modelInputEl,
    _yearInputEl,
    _fuelInputEl,
    _firstPriceInputEl,
    _sellingPriceInputEl
  ) {
    ev.target.parentNode.parentNode.remove();

    makeInputEl.value = _makeInputEl;
    modelInputEl.value = _modelInputEl;
    yearInputEl.value = _yearInputEl;
    fuelInputEl.value = _fuelInputEl;
    firstPriceInputEl.value = _firstPriceInputEl;
    sellingPriceInputEl.value = _sellingPriceInputEl;
  }

  function sellCar(
    ev,
    _makeInputEl,
    _modelInputEl,
    _yearInputEl,
    _firstPriceInputEl,
    _sellingPriceInputEl
  ) {
    ev.target.parentNode.parentNode.remove();

    let profitForCurrentCar = _sellingPriceInputEl - _firstPriceInputEl;

    const soldLiEl = document.createElement("li");
    soldLiEl.className = "each-list";
    const carName = document.createElement("span");
    carName.textContent = _makeInputEl + " " + _modelInputEl;
    const carYear = document.createElement("span");
    carYear.textContent = _yearInputEl;
    const carProfit = document.createElement("span");
    carProfit.textContent = profitForCurrentCar;

    soldLiEl.appendChild(carName);
    soldLiEl.appendChild(carYear);
    soldLiEl.appendChild(carProfit);

    soldCarsEl.appendChild(soldLiEl);

    profitMade += profitForCurrentCar;

    totalProfit.textContent = profitMade;
  }

  function clearInputFileds() {
    makeInputEl.value = "";
    modelInputEl.value = "";
    yearInputEl.value = "";
    fuelInputEl.value = "";
    firstPriceInputEl.value = "";
    sellingPriceInputEl.value = "";
  }

  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
