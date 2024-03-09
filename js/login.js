{


    function login_btn()
    {
        document.getElementById("login_btn_col").style.color="orange";     
        document.getElementById("reg_btn_col").style.color="white";     
        var body=document.getElementById("options_body_login");
        body.innerHTML=`
        <label for="email">EMAIL<span style="color: red;">*</span></label>
        <input type="text" name="email" id="email-login">
        <label for="password">PPASSWORD <span style="color: red;">*</span></label>
        <input type="password" name="password" id="password-login">
        <a href="#">Forget Password?</a>
        `
    }
    function register_btn()
    {
        document.getElementById("login_btn_col").style.color="white";     
        document.getElementById("reg_btn_col").style.color="orange";     
        var body=document.getElementById("options_body_login");
        body.innerHTML=`
        <label for="user_name">USERNAME<span style="color: red;">*</span></label>
        <input type="text" name="user_name" id="email-login">
        <label for="email">EMAIL<span style="color: red;">*</span></label>
        <input type="text" name="email" id="email-login">
        <label for="password">PPASSWORD <span style="color: red;">*</span></label>
        <input type="password" name="password" id="password-login">
        <a href="#">Forget Password?</a>
        `
    }
}