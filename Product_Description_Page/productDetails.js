import { description, keyBenifits, uses, information, others } from "../Product_Description_Page/description.js";
import * as comp from "../components/navbar.js";

document.getElementById("main_navbar").innerHTML = comp.mainNavbar();


// Code to Enable Search Functunality in any page Starts here..................

document.getElementById("search_bar").addEventListener("keypress" , ()=>{
    if(event.key == "Enter") {
        localStorage.setItem("search" , document.getElementById("search_bar").value);
        window.location.href = "../SearchedPage/search.html"
    }
});

document.getElementById("search_bar").addEventListener("input" , (e)=>{

    if(e.keyCode == 13 || e.key == "Enter") {
        alert("Enter found");
    }
    
    let search_key = document.getElementById("search_bar").value;

    if(search_key == '') {
        document.getElementById("debounce_search_results").style.display = "none";
    }
    getSearchData(search_key);

    if(search_key.length == '') {
        document.getElementById("debounce_search_results").style.display = "none";
    }else {
        document.getElementById("debounce_search_results").style.display = "block";
    }
})


async function getSearchData(user_key) {

    document.getElementById("search_append").innerHTML = "";


    let res = await fetch("https://mr-raaz.github.io/NetmedsClone_data/data.json");
    let data = await res.json();

    let search_results  = data.products;

    search_results.map((elem)=>{
        let prod_name = elem.prod_name;
        let str = prod_name.toLowerCase();
        let search_val = user_key.toLowerCase();

        if(str.includes(search_val)){
            let li = document.createElement("li");
            li.innerText = prod_name;

            li.addEventListener("click" , ()=>{
                localStorage.setItem("clicked" , JSON.stringify(elem));
                window.location.href = "../Product_Description_page/productDetails.html";
            })
            document.getElementById("search_append").append(li);
        }
    });
}


// Ends here...............

//PReLoadEr
let loader = document.getElementById("preLoader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});
let getElement = (id) => {
    let tag = document.getElementById(id);
    return tag;
}

let clicked = JSON.parse(localStorage.getItem("clicked"));
//Set DATA to Ui start
const setData = () => {

    getElement("img1").src = clicked.url_1;
    getElement("img2").src = clicked.url_2;
    getElement("img3").src = clicked.url_3;
    getElement("pName").innerText = clicked.prod_name;
    getElement("cat1").innerText = clicked.categories_1;
    getElement("cat2").innerText = clicked.categories_2;
    getElement("cimg1").src = clicked.url_1;
    getElement("cimg2").src = clicked.url_2;
    getElement("cimg3").src = clicked.url_3;
    getElement("price").innerText = "₹" + clicked.best_price;
    getElement("cutPrice").innerText = clicked.mrp;
    getElement("discount").innerText = `GET ${clicked.discount}% OFF`;
    getElement("company").innerText = `* Mkt: ${clicked.mkf}`;
    getElement("default").innerText = `You get ${clicked.discount}% OFF on this product`;
}
setData();
//Set Data to ui end
//getElementByID

//Vertical image border click start
function setBorder(str, id) {
    let dc = document.getElementById(id);
    dc.style.border = str;
}
setBorder("2px solid #32aeb1", "imb1");
//Vertical image border click start

//PC WIDTH IMAGES CLICK START

let img = document.getElementById("img1").src;
let img2 = document.getElementById("img2").src;
let img3 = document.getElementById("img3").src;
getElement("img").src = img;
getElement("img1").onclick = () => {
    getElement("img").src = img;
    setBorder("2px solid #32aeb1", "imb1");
    setBorder("1px solid #d3d3d3", "imb2");
    setBorder("1px solid #d3d3d3", "imb3");
}
getElement("img2").onclick = () => {
    getElement("img").src = img2;
    setBorder("2px solid #32aeb1", "imb2");
    setBorder("1px solid #d3d3d3", "imb1");
    setBorder("1px solid #d3d3d3", "imb3");
}

getElement("img3").onclick = () => {
    getElement("img").src = img3;
    setBorder("2px solid #32aeb1", "imb3");
    setBorder("1px solid #d3d3d3", "imb1");
    setBorder("1px solid #d3d3d3", "imb2");
}
//PC WIDTH IMAGES CLICK END

//Description Click Start
function setDecBorder(color, bg, id) {
    let dc = document.getElementById(id);
    dc.style.color = color;
    dc.style.backgroundColor = bg;
}
setDecBorder("#24aeb1", "white", "dec1");
document.querySelector(".detailsBox").innerHTML = description();


getElement("dec1").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec1");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec5");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = description();
}
getElement("dec2").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec1");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec5");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = keyBenifits();
}
getElement("dec3").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec1");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec5");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = uses();
}
getElement("dec4").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec1");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec5");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = information();
}
getElement("dec5").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec5");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec1");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = others();
}
//Description Click End



//ADD TO CART FUNCTIONALITY START
let cart = JSON.parse(localStorage.getItem("cartitems")) || [];

let title = cart.filter((a) => {
    return a.prod_name === clicked.prod_name;
});

function getQuantity() {
    let temp = 0;
    cart.forEach(element => {
        if (element.prod_name === clicked.prod_name) {
            temp = element.quantity;
        }
    });
    return temp;
}

if (title.length === 0) {
    document.getElementById("addToCart").addEventListener("click", () => {

        let data = {
            "id": clicked.id,
            "prod_name": clicked.prod_name,
            "best_price": clicked.best_price,
            "mrp": clicked.mrp,
            "mkf": clicked.mkf,
            "url_1": clicked.url_1,
            "quantity": 1
        }

        cart.push(data);
        localStorage.setItem("cartitems", JSON.stringify(cart));
        getElement("addToCart").style.display = "none";
        getElement("btnFlex").style.display = "flex";
        getElement("quan").innerText = 1;

        location.reload();
    });
}
else {
    getElement("addToCart").style.display = "none";
    getElement("btnFlex").style.display = "flex";

    getElement("quan").innerText = getQuantity();

    getElement("plus").addEventListener("click", () => {
        let quan = getQuantity();
        if (quan === 5) {
            alert("you can't add more than 5 products");
        }
        else {
            quan++;
            cart.forEach((element, indx) => {
                if (element.prod_name === clicked.prod_name) {
                    updateData(indx, quan);
                }
            });
        }
    });

    getElement("minus").addEventListener("click", () => {
        let quan = getQuantity();
        if (quan === 1) {
            getElement("addToCart").style.display = "grid";
            getElement("btnFlex").style.display = "none";
            cart.forEach((element, indx) => {
                if (element.prod_name === clicked.prod_name) {
                    removeData(indx);
                }
            });
            location.reload();
        }
        else {
            quan--;
            cart.forEach((element, indx) => {
                if (element.prod_name === clicked.prod_name) {
                    updateData(indx, quan);
                }
            });
        }
    });

}

function updateData(indx, quan) {
    console.log(quan);
    cart.splice(indx, 1);
    let obj = {
        "id": clicked.id,
        "prod_name": clicked.prod_name,
        "best_price": clicked.best_price,
        "mrp": clicked.mrp,
        "mkf": clicked.mkf,
        "url_1": clicked.url_1,
        "quantity": quan
    }
    cart.push(obj);
    localStorage.setItem("cartitems", JSON.stringify(cart));

    getElement("quan").innerText = getQuantity();
}


function removeData(indx) {
    cart.splice(indx, 1);
    localStorage.setItem("cartitems", JSON.stringify(cart));
}

//ADD TO CART FUNCTIONALITY END

document.querySelector("title").innerText = clicked.prod_name;




