function printDetails() {
  var classNo = document.getElementById("classNo").value;
  var name = document.getElementById("name").value;
  var classNumber = document.getElementById("class").value;
  var nominal = document.getElementById("nominal").value;
  var status = document.getElementById("status").value;

  var timestamp = new Date().toLocaleString();

  var details =
    "ㅤㅤ   .:: IX-14 ::." +
    "<br>" +
    "   .  __________________  ." +
    "<br>" +
    "<br>" +
    "Name:" +
    "<br>" +
    name +
    "<br>" +
    "<br>" +
    "Class Number: " +
    "<br>" +
    classNo +
    "<br>" +
    "<br>" +
    "Class: " +
    "<br>" +
    classNumber +
    "<br>" +
    "<br>" +
    "Nominal: " +
    "<br>" +
    nominal +
    "<br>" +
    "<br>" +
    "Status: " +
    "<br>" +
    status +
    "<br>" +
    "<br>" +
    "Printed on: " +
    "<br>" +
    timestamp +
    "<br>" +
    "<br>" +
    "Signature: " +
    "<br>" +
    "<br>" +
    "<br>" +
    "<br>" +
    "<br>" +
    "   (  ..................  )" +
    "<br>" +
    "<br>" +
    "   .  __________________  .";

  var printWindow = window.open("", "#");
  printWindow.document.write(
    "<html><head><style>body { font-family: Consolas; font-size: 12px; }</style></head><body>" +
      details +
      "</body></html>"
  );
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function printTemplates() {
  var classNo = document.getElementById("classNo").value;
  var name = document.getElementById("name").value;
  var classNumber = document.getElementById("class").value;
  var nominal = document.getElementById("nominal").value;
  var status = document.getElementById("status").value;

  var timestamp = new Date().toLocaleString();

  var details2 =
    "Name:" +
    "<br>" +
    name +
    "<br>" +
    "<br>" +
    "Class Number: " +
    "<br>" +
    classNo +
    "<br>" +
    "<br>" +
    "Class: " +
    "<br>" +
    classNumber +
    "<br>" +
    "<br>" +
    "Nominal: " +
    "<br>" +
    nominal +
    "<br>" +
    "<br>" +
    "Status: " +
    "<br>" +
    status +
    "<br>" +
    "<br>" +
    "Printed on: " +
    "<br>" +
    timestamp +
    "<br>" +
    "<br>";

  window.print(details2);
}
