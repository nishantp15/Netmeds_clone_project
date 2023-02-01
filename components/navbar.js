
let login_status = localStorage.getItem("login_status") || false;

let user_name_dynamic = "Login / Signup";
let user_name_dynamic2 = `<a href="../login_signup.html">Login <span class="tab_res"> / Signup</span></a>`;

if(login_status == "true"){
    let str = localStorage.getItem("user_fname");
    user_name_dynamic = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    user_name_dynamic2 = `<a href="../profile.html">${user_name_dynamic}</a>`;
}

let cart_items_count = JSON.parse(localStorage.getItem("cartitems")) || [];
let cart_item_len = cart_items_count.length;

function mainNavbar(){
    return  `<div class="mobile_res">
    <div class="res_nav clr">
        <div class="res_logo">
            <img src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg" alt="Not found" />
        </div>

        <div class="res_profile">

            <div class="cart_logo2"> 
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg" alt="Not found">
                <h4> &nbsp; Cart</h4>
                <div id="cart_items_count2"><b id="cart_count2">${cart_item_len}</b></div>
            </div>


            <div> 
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg" alt="Not found">
                <h4>&nbsp; <a href="login_signup.html">${user_name_dynamic}</a></h4>
            </div>



        </div>
    </div>

    <div class="res_search_nav clr">
        <label class="res_input_box" > 
            <input type="search"  placeholder="Search for medicine & wellness products..." />

            <span class="res_search"><i class="fa-solid fa-magnifying-glass"></i></span>
        </label>
    </div>

    <div class="res_cat_list">
        <div><a href="">Covid Essentials</a></div>
        <div><a href="">Diabetes</a></div>
        <div><a href="">Eyewear</a></div>
        <div><a href="">Ayush</a></div>
    </div>

</div>

<nav  id="nav">
    <div class="Upper_section">
        <div class="logo_section">
            <a href="../index.html"><img src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg" alt="Not found" /></a>
        </div>
        <div class="search_bar_section">
            <label class="input_box_label" > 
                <input type="search" id="search_bar" placeholder="Search for medicine & wellness products..." autocomplete="off" />

                

                <span class="input_pin_code tab_res">Deliver to <b>110002</b> &nbsp; &nbsp; <i class="fa-solid fa-angle-down"></i></span>

                <div class="debounce_search" id="debounce_search_results">

                <ul id="search_append">

                </ul>
                </div>
            </label>
        </div>
        <div class="login_section">
            <div class="tab_res"> 
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg" alt="Not found">
                <h4>&nbsp; &nbsp; Upload</h4>
            </div>
            <div class="cart_logo"> 
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg" alt="Not found">
                <h4> &nbsp; &nbsp; <a href="../cart&checkout/cart.html">Cart</a>
                </h4>

                <div id="cart_items_count"><b id="cart_count">${cart_item_len}</b></div>
            </div>
            <div> 
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg" alt="Not found">
                <h4>&nbsp; &nbsp;  ${user_name_dynamic2}  </h4>
            </div>
        </div>

    </div>
 <div class="Lower_section">
        <div class="testing">
            <img src="https://www.netmeds.com/assets/version1665682643/gloryweb/images/icons/medicine.svg" />
            <h5>&nbsp; &nbsp; Medicine &nbsp;<img class="down_arrow" src="img/arrow-216-16.png" alt="">
            </h5>

            <div class="hidden_div second_hidden_box">
                <ul>
                    <li><a href = "product_pages_html/product_page_CovidEssentials.html">All Medicines</a></li>
                    <li><a href="profile.html">Previously Ordered Medicines</a></li>
                </ul>
            </div>

        </div>
        <div>
            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" alt="">
            <h5>&nbsp; &nbsp; <a class="wellness_link" href="product_pages_html/product_page_Cough&Cold.html">Wellness</a></h5>

        </div>
        <div >
            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" alt="">
            <h5>&nbsp; &nbsp; Lab Tests</h5>

        </div>
        <div class="testing">
            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" alt="">
            <h5>&nbsp; &nbsp; Beauty  &nbsp;<img class="down_arrow" src="img/arrow-216-16.png" alt=""></h5>

            <div class="hidden_div">
                <ul>
                    <li><a href="product_pages_html/product_page_beauty_personalcare.html">Personal Care</a></li>
                    <li><a href="product_pages_html/product_page_FaceMakeup.html">Make-Up</a></li>
                    <li><a href="product_pages_html/product_page_Hair.html">Hair</a></li>
                    <li><a href="product_pages_html/product_page_Men'sGrooming.html">Skin Care</a></li>
                    <li><a href="product_pages_html/product_page_Devices.html">Tool's & Appliances</a></li>
                    <li><a href="product_pages_html/product_page_Mom&Baby.html">Mom & Baby</a></li>
                </ul>
            </div>


        </div>
        <div class="testing tab_res">
            <img src="https://www.netmeds.com/assets/version1665682643/gloryweb/images/icons/health-library.svg" alt="">
            <h5>&nbsp; &nbsp; Health Corner  &nbsp;<img class="down_arrow" style="width: 7%;" src="img/arrow-216-16.png" alt=""></h5>


            <div class="hidden_div">
                <ul>
                    <li>Health Library</li>
                    <li>Patients Alike</li>
                    <li>Corona Awareness</li>
                </ul>
            </div>


        </div>
    </div>
</nav>`
}



export {mainNavbar} ;