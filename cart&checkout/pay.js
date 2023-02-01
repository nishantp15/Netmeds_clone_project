var cart = JSON.parse(localStorage.getItem("cartitems")) || [];

function displayCart(cart) {
  var price1 = 0;
  var discount = 0;


  document.querySelector("#MRP").innerText = "₹" + 0;
  document.querySelector("#netmeddiscount").innerText = "₹" + 0;
  document.querySelector("#netmed").innerText = "₹" + 0;
  document.querySelector("#total").innerText = "₹" + 0;
  document.querySelector("#total1").innerText = "₹" + 0;

  var uniqueCartItems = [];
  var itemsQuantity = [];

  cart.forEach(function (ele) {
    var flag = false;
    for (var i = 0; i < uniqueCartItems.length; i++) {
      var obj = uniqueCartItems[i];
      if (
        obj.image_src === ele.image_src &&
        obj.product_name === ele.product_name &&
        obj.price === ele.price &&
        obj.strikedoffprice === ele.strikedoffprice &&
        obj.manufacturer === ele.manufacturer
      ) {
        flag = true;
        break;
      }
    }
    if (flag) {
      itemsQuantity[i] = itemsQuantity[i] + 1;
    } else {
      uniqueCartItems.push(ele);
      itemsQuantity.push(1);
    }
  });

  uniqueCartItems.forEach(function (elem, index) {
    var card = document.createElement("div");
    card.setAttribute("class", "boxCard");
    card.style.display = "flex";

    var card1 = document.createElement("div"); 
    card1.setAttribute("class", "boxCard1");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image_src);

    card1.append(image);

    var card2 = document.createElement("div"); 
    card2.setAttribute("class", "boxCard2");

    var details = document.createElement("p"); 
    details.innerText = elem.product_name;

    var details1 = document.createElement("p"); 
    details1.innerText = elem.manufacturer;

    var card3 = document.createElement("div"); 
    card3.setAttribute("class", "boxCard3");
    card3.style.display = "flex";

    var card31 = document.createElement("div"); 
    card31.setAttribute("class", "boxCard31");

    var price = document.createElement("span");
    price.innerText = "₹" + elem.price;

    var Sprice = document.createElement("span");
    Sprice.innerText = "₹" + elem.strikedoffprice;
    price1 = price1 + elem.strikedoffprice * itemsQuantity[index];
    document.querySelector("#MRP").innerText = "₹" + price1;

    if (elem.strikedoffprice) {
      var discounted = elem.strikedoffprice - elem.price;
      discount = discount + itemsQuantity[index] * discounted;
    }

    var Delievery = document.createElement("p");
    Delievery.innerText = "Delivery between May 8 6PM-May 9 10PM";

    card31.append(price, Sprice, Delievery);

    var card32 = document.createElement("div");
    card32.setAttribute("class", "boxCard32");

    var quantityValue = document.createElement("span");

    quantityValue.innerText = " QTY:" + itemsQuantity[index];

    var card321 = document.createElement("div");
    card321.setAttribute("class", "boxCard321");
    card321.style.display = "flex";

    var hr = document.createElement("hr");
    hr.setAttribute("class", "hr");
    hr.style.color = "blue";

    card32.append(quantityValue);

    card3.append(card31, card32);
    card2.append(details, details1, card3, hr);

    card.append(card1, card2);
    document.querySelector("#cartitems").append(card);
  });
}
let paydetails=JSON.parse(localStorage.getItem("pay")) || [];
    console.log(paydetails);
    dispay(paydetails);

    function dispay(paydetails){
      paydetails.map((e)=>{
        document.querySelector("#MRP").innerText =e.x;
        document.querySelector("#netmeddiscount").innerText =e.a;

    document.querySelector("#netmed").innerText =e.b;

    document.querySelector("#total").innerText =e.c;
    document.querySelector("#total0").innerText =e.d;
    document.querySelector("#total1").innerText =e.d;
    document.querySelector("#total2").innerText =e.d;
    document.querySelector("#total3").innerText =e.d;
    document.querySelector("#total4").innerText =e.d;
    document.querySelector("#total5").innerText =e.d;
      })
    }
document.getElementById("check1").addEventListener("click", paid1);
    let pay1 = document.getElementById("pay1");
let flag1 = true;
pay1.style.display = "none";
function paid1() {
  if (flag1) {
    pay1.style.display = "block";
    flag1 = false;
  } else if (!flag1) {
    pay1.style.display = "none";
    flag1 = true;
  }
}
document.getElementById("check2").addEventListener("click", paid2);
    let pay2 = document.getElementById("pay2");
let flag2= true;
pay2.style.display = "none";
function paid2() {
  if (flag2) {
    pay2.style.display = "block";
    flag2 = false;
  } else if (!flag2) {
    pay2.style.display = "none";
    flag2 = true;
  }
}
document.getElementById("check3").addEventListener("click", paid3);
    let pay3 = document.getElementById("pay3");
let flag3 = true;
pay3.style.display = "none";
function paid3() {
  if (flag3) {
    pay3.style.display = "block";
    flag3 = false;
  } else if (!flag3) {
    pay3.style.display = "none";
    flag3 = true;
  }
}
document.getElementById("check4").addEventListener("click", paid4);
    let pay4 = document.getElementById("pay4");
let flag4 = true;
pay4.style.display = "none";
function paid4() {
  if (flag4) {
    pay4.style.display = "block";
    flag4 = false;
  } else if (!flag4) {
    pay4.style.display = "none";
    flag4 = true;
  }
}
document.getElementById("check5").addEventListener("click", paid5);
    let pay5 = document.getElementById("pay5");
let flag5 = true;
pay5.style.display = "none";
function paid5() {
  if (flag5) {
    pay5.style.display = "block";
    flag5 = false;
  } else if (!flag5) {
    pay5.style.display = "none";
    flag5 = true;
  }
}

document.querySelector("#pay1").addEventListener("click", func1);

  function func1() {
    alert("Thanks for the Order.");
    window.location.href = "order_placed.html";
  }
  document.querySelector("#pay2").addEventListener("click", func2);

  function func2() {
    alert("Thanks for the Order.");
    window.location.href = "index.html";
  }
  document.querySelector("#pay3").addEventListener("click", func3);

  function func3() {
    alert("Thanks for the Order.");
    window.location.href = "index.html";
  }
  document.querySelector("#pay4").addEventListener("click", func4);

  function func4() {
    alert("Thanks for the Order.");
    window.location.href = "index.html";
  }
  document.querySelector("#pay5").addEventListener("click", func5);

  function func5() {
    alert("Thanks for the Order.");
    window.location.href = "index.html";
  }