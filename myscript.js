var accV, NameV, bankV, emailV;

function readFom() {
  accV = document.getElementById("AccNo").value;
  NameV = document.getElementById("Name").value;
  bankV = document.getElementById("Bank").value;
  emailV = document.getElementById("Email").value;
  console.log(accV, NameV, emailV, bankV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("customer/" + accV)
    .set({
      AccNo: accV,
      Name: NameV,
      Bank: bankV,
      Email: emailV,
    });
  alert("Data Inserted");
  document.getElementById("AccNo").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Bank").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("customer/" + accV)
    .on("value", function (snap) {
      document.getElementById("AccNo").value = snap.val().AccNo;
      document.getElementById("Name").value = snap.val().Name;
      document.getElementById("Bank").value = snap.val().Bank;
      document.getElementById("Email").value = snap.val().Email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("customer/" + accV)
    .update({
      //   AccNo: accV,
      Name: NameV,
      Bank: bankV,
      Email: emailV,
    });
  alert("Data Update");
  document.getElementById("AccNo").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Bank").value = "";
  document.getElementById("Email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("customer/" + accV)
    .remove();
  alert("Data Deleted");
  document.getElementById("AccNo").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Bank").value = "";
  document.getElementById("Email").value = "";
};
