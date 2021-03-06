var runningTotal = 0.0;

function addItem()
{
  var newItem;
  var dollars;
  newItem = document.getElementById("price").value;
  if(isNaN(newItem))
  {
    alert("Enter price as a number")
  }
  else
  {
    newItem = Number(newItem);
    runningTotal += newItem;
    dollars = asCurrency(Number(runningTotal));
    document.getElementById("subtotal").innerHTML = dollars;
    document.getElementById("price").value = " ";
    setCookie("preTax", runningTotal, 5);
  }
  //OTHERWISE,
  // update newItem to its value cast as a number
  // update runningTotal to be its value plus newItem
  // create a variable called dollars
  // call asCurrency() by with the value of runningTotal and assign the return value to dollars
  // update the innerHTML of the span with the id "subtotal" to be dollars
  // update the value of the input with the id "price" to be an empty string
  // update a cookie called "preTax" with the value of runningTotal
}

//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function calculateReceipt()
{
  var receiptSubtotal;
  var receiptTax;
  var receiptTotal;
  receiptSubtotal = getCookie("preTax");
  receiptTax = receiptSubtotal * .075;
  receiptTotal = (Number(receiptSubtotal) + Number(receiptTax));
  document.getElementById("sub").innerHTML = asCurrency(Number(receiptSubtotal));
  document.getElementById("tax").innerHTML = asCurrency(Number(receiptTax));
  document.getElementById("tot").innerHTML = asCurrency(Number(receiptTotal));
}
