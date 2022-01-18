const brand = document.getElementById("brand");
const model = document.getElementById("model");
const year = document.getElementById("year");

const save = document.getElementById("save");
const table = document.getElementById("table");
const line = document.getElementById("line")

const carData = [];

table.style.visibility = "hidden"
line.style.visibility = "visible"

//-----------------------------------------------------


class Car {
    constructor(brand, model, year) {
        this.brand = brand,
            this.model = model,
            this.year = year
    }
}


//-----------------------------------------------------


save.onclick = () => {

    if (!(brand.value == "")) {

        const newObj = new Car(brand.value, model.value, year.value)
        carData.push(newObj)

        let row = document.createElement("tr");

        for (let i = 0; i < carData.length; i++) {
            row.innerHTML = `<td>${carData[i].brand}</td><td>${carData[i].model}</td><td>${carData[i].year}</td>`;
        }

        row.insertAdjacentElement("afterend", row);
        table.appendChild(row);

        if (carData.length > 0) {
            table.style.visibility = "visible"
            line.style.visibility = "hidden"
        }

        brand.value = ""
        model.value = ""
        year.value = ""
    }
}


//-----------------------------------------------------

year.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        save.click();
    }
})