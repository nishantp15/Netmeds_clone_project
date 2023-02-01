function display(){
    let data = JSON.parse(localStorage.getItem("orderHistory")) ||[];

    document.getElementById("order_container").innerHTML = "";

    data.map((elem , index)=>{

        let {url_1 , prod_name , quantity , mrp} = elem;
        
        let div = document.createElement("div");
        div.setAttribute("id" , "Ordered_item");
        console.log(data);

        let num = Math.floor(Math.random()*9999);

        div.innerHTML = `<div><img src="${url_1}" alt=""></div>
        <div>
            <h4>${prod_name}</h4>
            <p><b>Quantity:&nbsp;&nbsp;&nbsp;</b>${quantity}</p>
            <p><b>Amount :</b>&nbsp;&nbsp;&nbsp;&#x20B9;${Number(quantity) * Number(mrp)}</p>
            <p><b>Id :&nbsp;&nbsp;&nbsp;</b><span id="pendingStatus">#${num}</span></p>
            <button id="order_cancel_btn" onclick="removeOrder(${index})">Cancel</button>
        </div>`;



        document.getElementById("order_container").append(div);
    });
}

display();

function removeOrder(index){
    let all_div = document.querySelectorAll("#Ordered_item");



    all_div[index].style.transform = `rotateX(180deg)`;
    all_div[index].style.backgroundColor = "#24aeb1";
    
setTimeout(()=>{
    all_div[index].innerHTML = `
    
    <div class="testFlip"><h6 class ="doyo2">Do you wish to cancel ?</h6>


    <div>
    
    <button class="doyo" id="yes_btn" onclick="del(${index})">Yes</button>
    <button class="doyo" id="no_btn" onclick="cancel_del(${index})">No</button>

    </div>
    
    
    </div>
    `;
    
},100);


add_div[index].append(h3);


}



document.getElementById("acc_info").addEventListener("click" , ()=>{
    window.location.href = "profile.html";
})



function del(val) {

    let data2 = JSON.parse(localStorage.getItem("orderHistory")) ||[];
    let temp = data2.splice(val,1);

    localStorage.setItem("orderHistory" , JSON.stringify(data2));

    display();
}

function cancel_del(idx) {
display();
}
