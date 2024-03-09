
function login_show()
{
    login_btn();
    show_login();
}
function signup_show()
{
    register_btn();
    show_login();
}

function show_body() {
    document.getElementById("deposite_div").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
}
function show_login()
{   
    document.getElementById("login_div").style.display = "flex";
    document.getElementById("body").style.overflow = "hidden";
    console.log('options')
}
function show_body_login()
{
    document.getElementById("login_div").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
}
function change_header() {
    document.getElementById("main_menu_li_1_a").innerHTML = "Withdraw";
    document.getElementById("main_menu_li_2_a").innerHTML = "Deposit";
    var drop_down=document.getElementById("main_menu_li");
    drop_down.innerHTML = `
    <a class="profile_a" href="#">Settings</a>
    <ul class="profile_ul">
    <p>Settings</p>
    <li class="profile_ul_li"><a  herf="#" onclick="show_profile_div()">Profile</a></li>
    <li class="profile_ul_li"><a  onclick="show_profile_div()">Balance</a></li>
    <li class="profile_ul_li"><a  onclick="show_profile_div()">History</a></li>
    <li class="profile_ul_li"><a  onclick="logOut()">Log Out</a></li>
</ul>
`;


    drop_down.style.display="block";

    document.getElementById("main_menu_li_1").onclick = function() {
        with_btn_show();
    };

    document.getElementById("main_menu_li_2").onclick = function() {
        dep_btn_show();
    };

    document.getElementById("main_menu_li_3").style.display = "none";
}
function show_dep() {
    document.getElementById("deposite_div").style.display = "flex";
    document.getElementById("body").style.overflow = "hidden";

    console.log('options')
}
function dep_btn_show()
{
    deposit_btn();
    show_dep();
}
function with_btn_show()
{
    withdraw_btn();
    show_dep();
}

function show_profile_div()
{
    document.getElementById("profile_div").style.display = "flex";
    document.getElementById("body").style.overflow = "hidden";
    console.log("show profile")
}
function hide_profile()
{
    document.getElementById("profile_div").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
}
function logOut() {
    location.reload();
  }
  