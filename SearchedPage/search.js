
let searchKey = localStorage.getItem("search");


let finalKey = searchKey.toLowerCase();
const searchedData = async () => {
  let responce = await fetch("https://mr-raaz.github.io/NetmedsClone_data/data.json");
  let data = await responce.json();

  showData(data.products);
}
searchedData();
let count = 0;
function showData(data) {
  document.querySelector(".grid").innerHTML = null;
  data.map(function (ele, idx) {
    if (ele.prod_name.toLowerCase().includes(finalKey)) {
      count++;

      let card = document.createElement("div");
      card.setAttribute("class", "card");

      let img1 = document.createElement("img");
      img1.src = ele.url_1;
      img1.id = "img";

      let details = document.createElement("div");
      details.setAttribute("class", "details");

      let title = document.createElement("h1");
      title.innerText = ele.prod_name;
      title.id = "title";
      title.addEventListener("click", () => {
        setToStorage(idx);
      });

      let category = document.createElement("p");
      category.innerText = ele.categories_1 + " " + ele.categories_2;
      category.id = "category";

      let span = document.createElement("span");
      span.innerText = "₹ " + " " + ele.best_price;
      span.id = "bestprice";

      let price = document.createElement("h1");
      price.innerText = "MRP ";
      price.id = "price";
      price.append(span);

      let brand = document.createElement("p");
      brand.innerText = "Mkt: " + ele.mkf;
      brand.id = "brand";

      let end = document.createElement("div");
      end.setAttribute("class", "end");

      let button = document.createElement("button");
      button.innerText = "ADD TO CART";
      button.id = "addToCart";

      let btnFlex = document.createElement("div");
      btnFlex.id = "btnFlex";

      let minus = document.createElement("p");
      minus.innerText = "−";
      minus.id = "minus";

      let quan = document.createElement("p");
      quan.innerText = "1";
      quan.id = "quan";

      let plus = document.createElement("p");
      plus.innerText = "+";
      plus.id = "plus";

      /*button.addEventListener("click", () => {
        btnFun(button, ele, btnFlex);
      });*/

      btnFlex.append(minus, quan, plus);
      end.append(button, btnFlex);

      details.append(title, category, price, brand, end);
      card.append(img1, details);

      document.querySelector(".grid").append(card);
      checkQuan(ele, button, btnFlex, plus, quan, minus);
    }
  });

  document.getElementById("totalItems").innerText = count + " " + "items found";

  if (count === 0) {
    document.querySelector(".grid").innerHTML = null;

    let img = document.createElement("h1");
    img.id = "noFound";
    img.innerText = "No Match Found...";

    document.querySelector(".grid").append(img);
  }
}

async function setToStorage(ele) {
  let responce = await fetch("https://mr-raaz.github.io/NetmedsClone_data/data.json");
  let data = await responce.json();
  console.log(data.products[ele]);
  localStorage.setItem("clicked", JSON.stringify(data.products[ele]));
  openDescriptionPage();
}

function openDescriptionPage() {
  location.href = "../Product_Description_Page/productDetails.html";
}

let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
function checkQuan(ele, button, btnFlex, plus, quan, minus) {
  let title = cart.filter((a) => {
    return a.prod_name === ele.prod_name;
  });

  if (title.length === 0) {

    button.addEventListener("click", () => {
      let data = {
        "id": ele.id,
        "prod_name": ele.prod_name,
        "best_price": ele.best_price,
        "mrp": ele.mrp,
        "mkf": ele.mkf,
        "url_1": ele.url_1,
        "quantity": 1
      }

      cart.push(data);
      localStorage.setItem("cartitems", JSON.stringify(cart));
      button.style.display = "none";
      btnFlex.style.display = "flex";
      quan.innerText = 1;
      location.reload();
      document.getElementById("length").innerText = cart.length + " " + "items";
    });
  }
  else {
    elsePart(ele, button, btnFlex, plus, quan, minus);
  }
}

function elsePart(ele, button, btnFlex, plus, quan, minus) {
  button.style.display = "none";
  btnFlex.style.display = "flex";

  quan.innerText = getQuantity(ele);

  plus.addEventListener("click", () => {
    let temp = getQuantity(ele);
    if (temp === 5) {
      alert("you can't add more than 5 products");
    }
    else {
      temp++;
      cart.forEach((element, indx) => {
        if (element.prod_name === ele.prod_name) {
          updateData(indx, temp, ele, quan);
        }
      });
    }
  });


  minus.addEventListener("click", () => {
    let temp = getQuantity(ele);
    if (temp === 1) {
      button.style.display = "grid";
      btnFlex.style.display = "none";
      cart.forEach((element, indx) => {
        if (element.prod_name === ele.prod_name) {
          removeData(indx);
        }
      });
      location.reload();
      document.getElementById("length").innerText = cart.length + " " + "items";
    }
    else {
      temp--;
      cart.forEach((element, indx) => {
        if (element.prod_name === ele.prod_name) {
          updateData(indx, temp, ele, quan);
        }
      });
    }
  });


}

function updateData(indx, quan, ele, ttt) {
  console.log(quan);
  cart.splice(indx, 1);
  let obj = {
    "id": ele.id,
    "prod_name": ele.prod_name,
    "best_price": ele.best_price,
    "mrp": ele.mrp,
    "mkf": ele.mkf,
    "url_1": ele.url_1,
    "quantity": quan
  }
  cart.push(obj);
  localStorage.setItem("cartitems", JSON.stringify(cart));

  ttt.innerText = getQuantity(ele);
}

function removeData(indx) {
  cart.splice(indx, 1);
  localStorage.setItem("cartitems", JSON.stringify(cart));
}
function getQuantity(ele) {
  let temp = 0;
  cart.forEach(element => {
    if (element.prod_name === ele.prod_name) {
      temp = element.quantity;
    }
  });
  return temp;
}

document.getElementById("length").innerText = cart.length + " " + "items";
document.getElementById("checkout").addEventListener("click", () => {
  location.href = "../cart&checkout/checkout.html";
});


