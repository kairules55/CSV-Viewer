const table = document.getElementById("display-table");
const rows = table.rows.length;

function find() {
  let str = document.getElementById("str");
  let value2 = new String(str.value);
  value2 = value2.toLowerCase();
  for (let i = 1; i < rows; i++) {
    let cell = table.rows[i].cells;
    let check = false;
    for (let j = 0; j < cell.length; j++) {
      let value1 = new String(cell[j].textContent);
      value1 = value1.toLowerCase();
      if (value1.indexOf(value2) != -1) {
        check = true;
      }
    }
    if (!check) {
      table.rows[i].style.visibility = "collapse";
    } else {
      table.rows[i].style.visibility = "visible";
    }
  }
}

const button = document.querySelector("button");
button.addEventListener("click", find);
