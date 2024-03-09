{   
    function initializePhoneNumberInput() {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {});
    }
    
    document.addEventListener("DOMContentLoaded",function (){
     profile_btn();
    });

    function profile_btn()
    {
        document.getElementById("profile_btn_1").style.color="rgb(255, 115, 0)";
        document.getElementById("profile_btn_2").style.color="var(--font-color)";
        document.getElementById("profile_btn_3").style.color="var(--font-color)";
        var heading=document.getElementById("right_side_heading_profile");
        var body=document.getElementById("right_side_body_profile");

        heading.innerHTML= `
            <i class="fa-solid fa-user"></i><p>Profile</p><i class="fa-solid fa-pen"></i>
        `;
        
        body.innerHTML= `
        <div class="body_div_1-profile body-div-profile">
        <label for="user_name">USERNAME <span style="color: red;">*</span></label>
        <input type="text" name="user_name" id=""  placeholder="GAMBLIFY" required>
        <label for="full_name">FULL NAME <span style="color: red;">*</span></label>
        <input type="text" name="full_name" id="" placeholder="GAMBLIFY" required>
        <label for="dfb">DATE OF BIRTH <span style="color: red;">*</span></label>
        <input type="date" name="dfb" id="" placeholder="01/01/2000" required>
        <label for="country">COUNTRY <span style="color: red;">*</span></label>
        <input type="text" name="country" id="" placeholder="INDIA" required>
    </div>
    <span class="line"></span>
    <div class="body_div_2-profile body-div-profile">
        <label for="city">CITY <span style="color: red;">*</span></label>
        <input type="text" name="city" id="" placeholder="BANGALORE" required>
        <label for="street">STREET <span style="color: red;">*</span></label>
        <input type="text" name="street" id="" placeholder="BANGALORE" required>
        <label for="pd">POSTAL CODE <span style="color: red;">*</span></label>
        <input type="text" name="pd" id="" placeholder="12345" required>
    </div>
    <span class="line"></span>
    <div class="body_div_3-profile body-div-profile">
        <label for="phoneNumber">PHONE NUMBER <span style="color: red;">*</span></label>
        <input type="tel" id="phone" placeholder="Enter your phone number">
        <label for="email">EMAIL <span style="color: red;">*</span></label>
        <input type="email" name="email" id="" placeholder="TEST@GMAIL.COM" required>
        <input type="button" name="save" id=""save" value="SAVE"  class="save_btn">
    </div>
    <span class="line"></span>
    <div class="body_div_4-profile body-div-profile">
        <label for="password">CHANGE PASSWORD <span style="color: red;">*</span></label>
        <input type="password" name="password" id="current_password" placeholder="CURRENT PASSWORD" >
        <input type="password" name="password" id="new_password" placeholder="NEW PASSWORD" >
        <input type="button" name="chng_btn" id=""save value="CHANGE PASSWORD" class="save_btn">
    </div>
    
        `;
        initializePhoneNumberInput();

    }

    function balance_btn()
    {   document.getElementById("profile_btn_1").style.color="var(--font-color)";
        document.getElementById("profile_btn_2").style.color="rgb(255, 115, 0)";
        document.getElementById("profile_btn_3").style.color="var(--font-color)";
        var heading=document.getElementById("right_side_heading_profile");
        var body=document.getElementById("right_side_body_profile");

        heading.innerHTML= `
        <i class="fa-solid fa-sack-dollar"></i><p>Balance</p></i>
        `;
        
        body.innerHTML= `
        <div class="balance-div-1-profile"><span class="left-balance-spabe-1">Main Balance</span> <span class="left-balance-span-2">Total<span class="balance_amount" id="balance_amount" style="color: rgb(61, 255, 47);">$0.00</span></div>
    <div class="balance-div-2-profile">
    <div class="balance-div-2-1">
        <span></span>
    </div>
    <div class="balance-div-2-2">
        <ul>
            <li>Main</li>
            <li><img src="../img/coin.webp" alt="" srcset=""> $0.00</li>
        </ul>
    </div>
    </div>

        `;

    }

    function history_btn()
    {
        document.getElementById("profile_btn_1").style.color="var(--font-color)";
        document.getElementById("profile_btn_2").style.color="var(--font-color)";
        document.getElementById("profile_btn_3").style.color="rgb(255, 115, 0)";
        var heading=document.getElementById("right_side_heading_profile");
        var body=document.getElementById("right_side_body_profile");

        heading.innerHTML= `
        <i class="fa-solid fa-clock-rotate-left"></i><p>History</p></i>
        `;
        
        body.innerHTML= `
        
<div class="history_div-profile">
<select id="timeFrame" class="select-profile" name="timeFrame">
    <option value="all">ALL </option>
    <option value="week">Week</option>
    <option value="month">Month</option>
    <option value="year">Year</option>
</select>
<input type="date" >
<input type="date" >
</div>
        `;

    }
}