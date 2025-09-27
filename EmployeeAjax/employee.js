function getData() {
  let empObj = new XMLHttpRequest();

  empObj.onload = function () {
    let prods = JSON.parse(this.responseText);

    let parent = document.getElementById("d1");
    for (let p of prods) {
      let newRow = document.createElement("tr");
      newRow.innerHTML = `<td>${p.id}</td><td>${p.ename}</td><td>${p.epost}</td><td>${p.esalary}</td><td>${p.eage}</td><td>${p.egender}</td><td>${p.estate}</td><td>${p.ebloodGroup}</td>`;
      parent.appendChild(newRow);
    }
  };
  empObj.open("GET", "http://localhost:7575/employe");
  empObj.send();
}

function deleteEmp() {
  let id = document.getElementById("pid").value;
  // console.log(id);

  if (window.confirm(`Are you Sure to delete employee with id :${id}`)) {
    // step1 : create Object of XMLHttpRequest
    let xmlObj = new XMLHttpRequest();

    xmlObj.onload = function () {
      window.alert("Employee Deleted Successfully");
    };

    xmlObj.open("DELETE", `http://localhost:7575/employe/${id}`);
    xmlObj.send();
  }
}

function addEmp() {
  let prod = {
    id: document.getElementById("txtid").value,
    ename: document.getElementById("txtname").value,
    epost: document.getElementById("txtprice").value,
    esalary: document.getElementById("txtcompany").value,
    eage: document.getElementById("txtquantity").value,
    egender: document.getElementById("txtgender").value,
    estate: document.getElementById("txtstate").value,
    ebloodGroup: document.getElementById("txtblood").value,
  };
  let prodJson = JSON.stringify(prod);

  let xmlObj = new XMLHttpRequest();
  xmlObj.onload = function () {
    window.alert("Employee Added Successfully");
    document.getElementById("txtid").value = "";
    document.getElementById("txtname").value = "";
    document.getElementById("txtprice").value = "";
    document.getElementById("txtcompany").value = "";
    document.getElementById("txtquantity").value = "";
    document.getElementById("txtgender").value = "";
    document.getElementById("txtstate").value = "";
    document.getElementById("txtblood").value = "";
  };
  xmlObj.open("POST", "http://localhost:7575/employe");
  xmlObj.send(prodJson);
}

let id;
function getSingleEmp() {
  id = document.getElementById("upid").value;
  // step1 : create Object of XMLHttpRequest
  let xmlObj = new XMLHttpRequest();

  //step2: write callback function
  xmlObj.onload = function () {
    // console.log(this.responseText);
    let prodObj = JSON.parse(this.responseText);
    console.log(prodObj);
    document.getElementById("utxtid").value = prodObj.id;
    document.getElementById("utxtname").value = prodObj.ename;
    document.getElementById("utxtprice").value = prodObj.epost;
    document.getElementById("utxtcompany").value = prodObj.esalary;
    document.getElementById("utxtquantity").value = prodObj.eage;
    document.getElementById("utxtgender").value = prodObj.egender;
    document.getElementById("utxtstate").value = prodObj.estate;
    document.getElementById("utxtblood").value = prodObj.ebloodGroup;
  };
  // step3: create requests
  xmlObj.open("GET", `http://localhost:7575/employe/${id}`);
  //step4: send request
  xmlObj.send();
}

function updateEmp() {
  let prod = {
    id: document.getElementById("utxtid").value,
    ename: document.getElementById("utxtname").value,
    epost: document.getElementById("utxtprice").value,
    esalary: document.getElementById("utxtcompany").value,
    eage: document.getElementById("utxtquantity").value,
    egender: document.getElementById("utxtgender").value,
    estate: document.getElementById("utxtstate").value,
    ebloodGroup: document.getElementById("utxtblood").value,
  };
  let prodJson = JSON.stringify(prod);

  let xmlObj = new XMLHttpRequest();
  xmlObj.onload = function () {
    window.alert("employee Updated Successfully");

    document.getElementById("utxtid").value = "";
    document.getElementById("utxtname").value = "";
    document.getElementById("utxtprice").value = "";
    document.getElementById("utxtcompany").value = "";
    document.getElementById("utxtquantity").value = "";
    document.getElementById("utxtgender").value = "";
    document.getElementById("utxtstate").value = "";
    document.getElementById("utxtblood").value = "";
  };
  xmlObj.open("PUT", `http://localhost:7575/employe/${id}`);
  xmlObj.send(prodJson);
}
