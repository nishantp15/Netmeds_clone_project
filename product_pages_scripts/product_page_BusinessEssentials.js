
let page = "Business Essentials";

let loc1 = "Home"
let loc2 = "Non-Prescription"

import * as comp from "../components/navbar.js";

document.getElementById("main_navbar").innerHTML = comp.mainNavbar();


// Code to Enable Search Functunality in any page Starts here..................

document.getElementById("search_bar").addEventListener("keypress" , ()=>{
    if(event.key == "Enter") {
        localStorage.setItem("search" , document.getElementById("search_bar").value);
        window.location.href = "../SearchedPage/search.html";
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


import displayPageLocationOnBanner from "../utils/page_location_display.js";
document.getElementById("headdiv").innerHTML=displayPageLocationOnBanner(loc1,loc2,page);

import shopByCategoryCards from "../utils/shop_by_category_cards.js";
document.getElementById("main-shopbyCategoryDiv").innerHTML = shopByCategoryCards();

import categoryFilter from "../utils/categoryFilter.js";
document.getElementById("subFilterBox").innerHTML = categoryFilter();

import productPages from "../utils/master_script_productPages.js";
productPages(page);

