
async function product_redirect(idx){
    let res = await fetch("https://mr-raaz.github.io/NetmedsClone_data/landingPage_data.json");
    let data = await res.json();
    
    let obj = data.Limited_time_deals;

    localStorage.setItem("clicked" , JSON.stringify(obj[idx]));

    window.location.href = "Product_Description_Page/productDetails.html";
}

document.getElementById("order_medicine_click").addEventListener("click" , ()=>{
    window.location.href = "product_pages_html/product_page_Ayurvedic.html";
});



document.getElementById("beauty_click").addEventListener("click" , ()=>{
    window.location.href = "product_pages_html/product_page_FaceMakeup.html";
});





document.getElementById("wellness_click").addEventListener("click" , ()=>{
    window.location.href = "product_pages_html/product_page_FamilyNutrition.html";
});

document.getElementById("explore_beauty_click").addEventListener("click",()=>{
    window.location.href = "product_pages_html/product_page_FaceMakeup.html";
})


document.getElementById("cat_dressing_section").addEventListener("click" , ()=>{
    window.location.href = "Product_Pages_html/product_page_Surgical.html";
})
document.getElementById("family_cat_sec").addEventListener("click" , ()=>{
    window.location.href = "Product_Pages_html/product_page_FamilyNutrition.html";
});

document.getElementById("red_cat_sec").addEventListener("click" , ()=>{
    window.location.href = "Product_Pages_html/product_page_Devices.html";
});

document.getElementById("lotion_cat_sec").addEventListener("click" , ()=>{
    window.location.href = "Product_Pages_html/product_page_.html";
});

document.getElementById("lotion_cat_sec").addEventListener("click" , ()=>{
    window.location.href = "Product_Pages_html/product_page_Hair.html";
});

document.getElementById("homeo_cat_sec").addEventListener("click" , ()=>{
    window.location.href = "Product_Pages_html/product_page_Homeopathy.html"
})



function beauty_car_red(){
    window.location.href = "product_pages_html/product_page_FaceMakeup.html";
}

// document.querySelector(".beauty_cat_click1").addEventListener("click" , ()=>{
//     window.location.href = "product_pages_html/product_page_FaceMakeup.html";
// });
// document.querySelector(".beauty_cat_click2").addEventListener("click" , ()=>{
//     window.location.href = "product_pages_html/product_page_FaceMakeup.html";
// });
// document.querySelector(".beauty_cat_click3").addEventListener("click" , ()=>{
//     window.location.href = "product_pages_html/product_page_FaceMakeup.html";
// });
// document.querySelector(".beauty_cat_click4").addEventListener("click" , ()=>{
//     window.location.href = "product_pages_html/product_page_FaceMakeup.html";
// });
// document.querySelector(".beauty_cat_click1").addEventListener("click" , ()=>{
//     window.location.href = "product_pages_html/product_page_FaceMakeup.html";
// });
// document.querySelector(".beauty_cat_click1").addEventListener("click" , ()=>{
//     window.location.href = "product_pages_html/product_page_FaceMakeup.html";
// });