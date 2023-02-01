
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

document.getElementById("use_otp").addEventListener("click", validate);

function validate() {


  let number = document.getElementById("mobile_number").value;

  if (number.length != 10) {

    alert("please enter correct number");

    return;

  } else {

    if (localStorage.getItem("user_fname") && localStorage.getItem("user_number") == number) {

      document.getElementById("right_first").style.display = "none";
      
      document.getElementById("loading").style.display = "block";

      setTimeout(() => {
        document.getElementById("loading_container").style.display = "none";
      }, 500);

      document.getElementById("local_num2").innerText =localStorage.getItem("user_number");
      document.getElementById("login_name").innerText =localStorage.getItem("user_fname");
      let j = 60;
      let test = setInterval(() => {
        if (j == 0) {
          clearInterval(test);
          document.getElementById("waiting_otp2").innerHTML = `<P>RESEND OTP</P>`;
          document.querySelector("#waiting_otp2 > p").style.color = "red";
          document.getElementById("waiting_otp2").style.cursor = "pointer";
          document.querySelector("#waiting_otp2").addEventListener("click", () => {
              check();
            });
        } else {
          document.getElementById("otp_time2").innerText = `${j}`;
          j--;
        }
      }, 1000);

      document.getElementById("login_btn").addEventListener("click", () => {
        let otp =
          document.getElementById("input_one1").value +
          document.getElementById("input_two2").value +
          document.getElementById("input_three3").value +
          document.getElementById("input_four4").value +
          document.getElementById("input_five5").value +
          document.getElementById("input_six6").value;

        if (otp == "123456") {
          document.getElementById("login_otp_verify").style.display = "none";
          document.getElementById("verified").style.display = "block";
          setTimeout(() => {
            localStorage.setItem("login_status" , true);
            window.location.href = "./index.html";
          }, 2000);
        } else {
          document.getElementById("login_otp_verify").style.display = "none";
          document.getElementById("wrong").style.display = "block";

          // document.getElementById("verified").style.display = "block";
          setTimeout(() => {
            document.getElementById("wrong").style.display = "none";
            document.getElementById("login_otp_verify").style.display = "block";
            // window.location.href = "./index.html";
          }, 800);
        }
      });
    } else {

      localStorage.setItem("user_number", number);

      document.getElementById("right_first").style.display = "none";

      document.getElementById("loading").style.display = "block";

      setTimeout(() => {

        document.getElementById("local_num").innerText =localStorage.getItem("user_number");

        document.getElementById("change_button").addEventListener("click", () => {
            window.location.reload();
          });

        let i = 60;
        let test = setInterval(() => {
          if (i == 0) {
            clearInterval(test);
            document.getElementById("waiting_otp").innerHTML = `<P>RESEND OTP</P>`;
            document.querySelector("#waiting_otp > p").style.color = "red";
            document.getElementById("waiting_otp").style.cursor = "pointer";
            document.querySelector("#waiting_otp").addEventListener("click", () => {
                check();
              });
          } else {
            document.getElementById("otp_time").innerText = `${i}`;
            i--;
          }
        }, 1000);

        document.getElementById("loading_container").style.display = "none";
        document.getElementById("cheking").style.display = "block";

        document.getElementById("verify").addEventListener("click", () => {
          let email = document.getElementById("email").value;
          let fname = document.getElementById("fname").value;
          let lname = document.getElementById("lname").value;

          if (email.length < 5 || fname.length < 1 || lname.length < 1) {
            alert("Please Enter Correct Details");
            return;
          }

          localStorage.setItem("user_fname", fname);
          localStorage.setItem("user_lname", lname);
          localStorage.setItem("user_email", email);

          let otp =
            document.getElementById("input_one").value +
            document.getElementById("input_two").value +
            document.getElementById("input_three").value +
            document.getElementById("input_four").value +
            document.getElementById("input_five").value +
            document.getElementById("input_six").value;

          if (otp == "123456") {
            document.getElementById("cheking").style.display = "none";
            document.getElementById("verified").style.display = "block";
            document.getElementById("login_otp_verify").style.display = "none";
            localStorage.setItem("login_status" , true);
            setTimeout(() => {
              window.location.href = "./index.html";
            }, 2000);
          } else {
            document.getElementById("cheking").style.display = "none";
            document.getElementById("wrong").style.display = "block";
            document.getElementById("login_otp_verify").style.display = "none";

            // document.getElementById("verified").style.display = "block";
            setTimeout(() => {
              document.getElementById("cheking").style.display = "block";
              // window.location.href = "./index.html";
            }, 800);
          }
        });
      }, 800);
    }
  }
}

function check() {
  let i = 60;
  let test = setInterval(() => {
    if (i == 0) {
      clearInterval(test);
      document.getElementById("waiting_otp").innerHTML = `<P>RESEND OTP</P>`;
      document.querySelector("#waiting_otp > p").style.color = "red";
      document.getElementById("waiting_otp").style.cursor = "pointer";
      document
        .querySelector("#waiting_otp")
        .addEventListener("click", () => {});
    } else {
      document.getElementById(
        "waiting_otp"
      ).innerHTML = `<span> Waiting for OTP... </span><span id="otp_time">${i}</span> Sec</p>`;
      i--;
    }
  }, 1000);
}
