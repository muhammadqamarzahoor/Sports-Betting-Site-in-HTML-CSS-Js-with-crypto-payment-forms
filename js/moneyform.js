{
  
    document.addEventListener("DOMContentLoaded", function() {
    // Your function call goes here
    deposit_btn();
    });
    
    function deposit_btn() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
        document.getElementById("deposit-btn").style.color="orange";
        document.getElementById("withdraw-btn").style.color=" var(--font-color)";
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("deposit-heaidng-div")
        heading.innerHTML = '<h1>DEPOSIT OPTIONS</h1>';
        main_div_heading.appendChild(heading);
    
        // Add new content to main_div_body
        var body = document.createElement("div");
        body.classList.add("deposit-options-div");
        body.innerHTML = `
                <figure class="deposit-btn-options Bitcoin" onclick="desposit_bitcoin()">
                <img src="../img/Bitcoin.png" alt="" srcset="">
                <figcaption>Bitcoin (BTC)</figcaption>
            </figure>
            <figure class="deposit-btn-options Ethereum" onclick="desposit_ethereum()">
                <img src="../img/Ethereum-Logo.wine.png" alt="" srcset="">
                <figcaption>Ethereum (ETH)</figcaption>
            </figure>
            <figure class="deposit-btn-options Litecoin" onclick="desposit_litecoin()">
                <img src="../img/litecoin-ltc-logo.png" alt="" srcset="">
                <figcaption>Litecoin (LTC)</figcaption>
            </figure>
            <figure class="deposit-btn-options Solana" onclick="desposit_solana()">
                <img src="../img/Solana.png" alt="" srcset="">
                <figcaption>Solana (SOL)</figcaption>
            </figure>
            <figure class="deposit-btn-options Rollbit" onclick="desposit_rollbit()">
                <img src="../img/rollbit.png" alt="" srcset="">
                <figcaption>Rollbit Coin (RLB)</figcaption>
            </figure>
            <figure class="deposit-btn-options MoreCoin-fig" style="display: none;">
                <figure><img src="../img/" alt="" srcset=""></figure>
                <figcaption>ERC-20 <br>(USDx, APE and more)</figcaption>
            </figure>
        `;
        
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        
   
        main_div_body.appendChild(body);
    }

    function withdraw_btn() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
        document.getElementById("deposit-btn").style.color=" var(--font-color)";
        document.getElementById("withdraw-btn").style.color="orange";
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("deposit-heaidng-div")
        heading.innerHTML = '<h1>WITHDRAW OPTIONS</h1>';
        main_div_heading.appendChild(heading);
    
        // Add new content to main_div_body
        var body = document.createElement("div");
        body.classList.add("deposit-options-div");
        body.innerHTML = `
            <figure class="deposit-btn-options Bitcoin" onclick="withdraw_bitcoin()">
                <img src="../img/Bitcoin.png" alt="" srcset="">
                <figcaption>Bitcoin (BTC)</figcaption>
            </figure>
            <figure class="deposit-btn-options Ethereum" onclick="withdraw_ethereum()">
                <img src="../img/Ethereum-Logo.wine.png" alt="" srcset="">
                <figcaption>Ethereum (ETH)</figcaption>
            </figure>
            <figure class="deposit-btn-options Litecoin" onclick="withdraw_litecoin()">
                <img src="../img/litecoin-ltc-logo.png" alt="" srcset="">
                <figcaption>Litecoin (LTC)</figcaption>
            </figure>
            <figure class="deposit-btn-options Solana" onclick="withdraw_solana()">
                <img src="../img/Solana.png" alt="" srcset="">
                <figcaption>Solana (SOL)</figcaption>
            </figure>
            <figure class="deposit-btn-options Rollbit"  onclick="withdraw_rollbit()">
                <img src="../img/rollbit.png" alt="" srcset="">
                <figcaption>Rollbit Coin (RLB)</figcaption>
            </figure>
            <figure class="deposit-btn-options MoreCoin-fig" style="display: none;">
                <figure><img src="../img/" alt="" srcset=""></figure>
                <figcaption>ERC-20 <br>(USDx, APE and more)</figcaption>
            </figure>
        `;
        
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        
   
        main_div_body.appendChild(body);
    }
    function desposit_bitcoin() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="deposit_btn()"></i>
        <img src="../img/Bitcoin.png" alt="">
        <h1>DEPOSIT BITCOIN</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
    
        // Add new content to main_div_body
        var body = document.createElement("div");
        body.classList.add("bitcoin-deposit-options-div");
        body.innerHTML = `
        <div class="bitcoin-div-1 bitcoin-div">
        <div class="bitcoin-div-1-1">
          <p>
            Send the amount of the bitcoin of your choiceto the following
            address to recive the equivalent in coin
          </p>
          <img src="../img/qr.png" alt="" />
        </div>
        <div class="bitcoin-div-1-2">
            <p>YOUR PERSONAL BITCOIN DEPOSIT ADDRESS</p>
          <div class="bitcoin-input">
            <input type="text" name="" id="" />
            <input type="button" value="COPY ADDRESS" id="copy-btn" />
          </div>
        </div>
      </div>
      <div class="bitcoin-div-2 bitcoin-div">
      <div class="input-coins">  <img src="../img/coin.webp" alt=""><input type="text" name="" id=""></div>
        <p>=</p>
        <div class="input-coins">  <img src="../img/Bitcoin.png" alt=""><input type="text" name="" id=""></div>
        <p>The value of BTC may change between now and the time we receive your payment</p>
      </div>
      <div class="bitcoin-div-3 bitcoin-div">
        <div class="bitcoin-div-3-1">
            <p>Don't hva any Bitcoin ?</p>
            <button>BUY CRYPTO</button>
        </div>
        <div class="bitcoin-3-2">
            <img src="../img/visa.png" alt="">
            <img src="../img/MasterCard.png" alt="">
            <img src="../img/applepay.png" alt="">
            <img src="../img/Googlepay.png" alt="">
        </div>
      </div>    
        `;
        
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        
   
        main_div_body.appendChild(body);
    }
    function desposit_ethereum() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="deposit_btn()"></i>
        <img src="../img/Ethereum-Logo.wine.png" alt="">
        <h1>DEPOSIT ETHEREUM</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
    
        // Add new content to main_div_body
        var body = document.createElement("div");
        body.classList.add("bitcoin-deposit-options-div");
        body.innerHTML = `
        <div class="bitcoin-div-1 bitcoin-div">
        <div class="bitcoin-div-1-1">
          <div class="eth-deposit-option-div-1-text">
          <p>
            Send the amount of the bitcoin of your choiceto the following
            address to recive the equivalent in coin.
            </p>
            <div><p><i class="fa-solid fa-triangle-exclamation"></i></p><p>Only deposit over Ethereum network. Do not use BNB or BBC networks</p></div>
            <div><p><i class="fa-solid fa-triangle-exclamation"></i></p><p>Do NOT send NFT's to this ETH deposit address. In order to recover NFTs deposited to this address an adminstartive fee will be charged. </p></div>
           </div>
          <img src="../img/qr.png" alt="" />
        </div>
        <div class="bitcoin-div-1-2">
            <p>YOUR PERSONAL BITCOIN DEPOSIT ADDRESS</p>
          <div class="bitcoin-input">
            <input type="text" name="" id="" />
            <input type="button" value="COPY ADDRESS" id="copy-btn" />
          </div>
          <p>Missing contact ETH depost? <a href="#">Request deposit address sweep </a></p>
          <p>Looking for ERC-20 deposit options? <a href="#">Deposit ERC-20 token </a></p>
        </div>
      </div>
      <div class="bitcoin-div-2 bitcoin-div">
      <div class="input-coins">  <img src="../img/coin.webp" alt=""><input type="text" name="" id=""></div>
        <p>=</p>
        <div class="input-coins">  <img src="../img/Ethereum-Logo.wine.png" alt=""><input type="text" name="" id=""></div>
        <p>The value of BTC may change between now and the time we receive your payment</p>
      </div>
      <div class="bitcoin-div-3 bitcoin-div">
        <div class="bitcoin-div-3-1">
            <p>Don't hva any Bitcoin ?</p>
            <button>BUY CRYPTO</button>
        </div>
        <div class="bitcoin-3-2">
            <img src="../img/visa.png" alt="">
            <img src="../img/MasterCard.png" alt="">
            <img src="../img/applepay.png" alt="">
            <img src="../img/Googlepay.png" alt="">
        </div>
      </div>    
        `;
        
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        
   
        main_div_body.appendChild(body);
    }
    function desposit_litecoin() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="deposit_btn()"></i>
        <img src="../img/litecoin-ltc-logo.png" alt="">
        <h1>DEPOSIT LITECOIN</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
    
        // Add new content to main_div_body
        var body = document.createElement("div");
        body.classList.add("bitcoin-deposit-options-div");
        body.innerHTML = `
        <div class="bitcoin-div-1 bitcoin-div">
        <div class="bitcoin-div-1-1">
        <div class="eth-deposit-option-div-1-text">
        <p>
          Send the amount of the bitcoin of your choiceto the following
          address to recive the equivalent in coin.
          </p>
          <div><p><i class="fa-solid fa-triangle-exclamation"></i></p><p>Only deposit over the LTC network. Do not use BNB or BSC networks</p></div>
         </div>
          <img src="../img/qr.png" alt="" />
        </div>
        <div class="bitcoin-div-1-2">
            <p>YOUR PERSONAL BITCOIN DEPOSIT ADDRESS</p>
          <div class="bitcoin-input">
            <input type="text" name="" id="" />
            <input type="button" value="COPY ADDRESS" id="copy-btn" />
          </div>
        </div>
      </div>
      <div class="bitcoin-div-2 bitcoin-div">
      <div class="input-coins">  <img src="../img/coin.webp" alt=""><input type="text" name="" id=""></div>
        <p>=</p>
        <div class="input-coins">  <img src="../img/litecoin-ltc-logo.png" alt=""><input type="text" name="" id=""></div>
        <p>The value of BTC may change between now and the time we receive your payment</p>
      </div>
      <div class="bitcoin-div-3 bitcoin-div">
        <div class="bitcoin-div-3-1">
            <p>Don't hva any Bitcoin ?</p>
            <button>BUY CRYPTO</button>
        </div>
        <div class="bitcoin-3-2">
            <img src="../img/visa.png" alt="">
            <img src="../img/MasterCard.png" alt="">
            <img src="../img/applepay.png" alt="">
            <img src="../img/Googlepay.png" alt="">
        </div>
      </div>    
        `;
        
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        
   
        main_div_body.appendChild(body);
    }
    function desposit_solana() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="deposit_btn()"></i>
        <img src="../img/Solana.png" alt="">
        <h1>DEPOSIT SOLANA</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
    
        // Add new content to main_div_body
        var body = document.createElement("div");
        body.classList.add("bitcoin-deposit-options-div");
        body.innerHTML = `
        <div class="bitcoin-div-1 bitcoin-div">
        <div class="bitcoin-div-1-1">
        <div class="eth-deposit-option-div-1-text">
        <p>
          Send the amount of the bitcoin of your choiceto the following
          address to recive the equivalent in coin.
          </p>
          <div><p><i class="fa-solid fa-triangle-exclamation"></i></p><p>Only deposit over the SOL network. Do not use BNB or BSC networks</p></div>
          <div><p><i class="fa-solid fa-triangle-exclamation"></i></p><p>Solana is a highly experimental blockchain. Deposits and withdrswals might be routinely delayed for extended periods of time. Use at your own risk.  </p></div>
         </div>
          <img src="../img/qr.png" alt="" />
        </div>
        <div class="bitcoin-div-1-2">
            <p>YOUR PERSONAL BITCOIN DEPOSIT ADDRESS</p>
          <div class="bitcoin-input">
            <input type="text" name="" id="" />
            <input type="button" value="COPY ADDRESS" id="copy-btn" />
          </div> 
          <p>Missing contact SOL depost? <a href="#">Request deposit address sweep </a></p>
        </div>
      </div>
      <div class="bitcoin-div-2 bitcoin-div">
      <div class="input-coins">  <img src="../img/coin.webp" alt=""><input type="text" name="" id=""></div>
        <p>=</p>
        <div class="input-coins">  <img src="../img/Solana.png" alt=""><input type="text" name="" id=""></div>
        <p>The value of BTC may change between now and the time we receive your payment</p>
      </div>
      <div class="bitcoin-div-3 bitcoin-div">
        <div class="bitcoin-div-3-1">
            <p>Don't hva any Bitcoin ?</p>
            <button>BUY CRYPTO</button>
        </div>
        <div class="bitcoin-3-2">
            <img src="../img/visa.png" alt="">
            <img src="../img/MasterCard.png" alt="">
            <img src="../img/applepay.png" alt="">
            <img src="../img/Googlepay.png" alt="">
        </div>
      </div>    
        `;
        
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        
   
        main_div_body.appendChild(body);
    }
    function desposit_rollbit() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="deposit_btn()"></i>
        <img src="../img/rollbit.png" alt="">
        <h1>DEPOSIT ROLLBIT COIN</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
    
        // Add new content to main_div_body
        var body = document.createElement("div");
        body.classList.add("bitcoin-deposit-options-div");
        body.innerHTML = `
        <div class="bitcoin-div-1 bitcoin-div">
        <div class="bitcoin-div-1-1">
          <p>
            Send the amount of the bitcoin of your choiceto the following
            address to recive the equivalent in coin
          </p>
          <img src="../img/qr.png" alt="" />
        </div>
        <div class="bitcoin-div-1-2">
            <p>YOUR PERSONAL BITCOIN DEPOSIT ADDRESS</p>
          <div class="bitcoin-input">
            <input type="text" name="" id="" />
            <input type="button" value="COPY ADDRESS" id="copy-btn" />
          </div>
          
        </div>
      </div>
      <div class="bitcoin-div-2 bitcoin-div">
      <div class="input-coins">  <img src="../img/coin.webp" alt=""><input type="text" name="" id=""></div>
        <p>=</p>
        <div class="input-coins">  <img src="../img/rollbit.png" alt=""><input type="text" name="" id=""></div>
        <p>The value of BTC may change between now and the time we receive your payment</p>
      </div>
      <div class="bitcoin-div-3 bitcoin-div">
        <div class="bitcoin-div-3-1">
            <p>Don't hva any Bitcoin ?</p>
            <button>BUY CRYPTO</button>
        </div>
        <div class="bitcoin-3-2">
            <img src="../img/visa.png" alt="">
            <img src="../img/MasterCard.png" alt="">
            <img src="../img/applepay.png" alt="">
            <img src="../img/Googlepay.png" alt="">
        </div>
      </div>    
        `;
        
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        main_div_body.appendChild(body);
    }
    function withdraw_bitcoin() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="withdraw_btn()"></i>
        <img src="../img/Bitcoin.png" alt="">
        <h1>WITHDRAW BITCOIN</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
        var name ='Bitcoin';
        
        // Add new content to main_div_body
       // ...

        var body = document.createElement("form");
        body.classList.add("rollbit-withdraw-options-form");
        body.innerHTML = `
            <p>Please enter the ${name} wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
            <div class="rollbit-withdraw-div-1">
                <p>RECEIVING SOLANA ADDRESS    <span style="color: red;">*</span></p>
                <input type="text" required>
            </div>
            <div class="rollbit-withdraw-div-2">
                <p>WITHDRAW AMOUNT   <span style="color: red;">*</span></p>
                <div class="rollbit-withdraw-div-2-1">
                    <div class="rolbit-withdraw-input-div-1">
                        <img src="../img/coin.webp" alt="">
                        <p>$</p>
                        <input type="text" required >
                    </div>
                    <p>=</p>
                    <div class="rolbit-withdraw-input-div-2">
                        <img src="../img/Bitcoin.png" alt="">
                        <input type="text" readonly >
                    </div>
                    <input type="submit" value="REQUEST WITHDRAW">
                </div>
                <p>Network Fee: $1.45</p>
            </div>
            <p>*You will receive the specified ${name} amount to your withdrawal address </p>
            <p>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
        `;
 
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        main_div_body.appendChild(body);
    }
    function withdraw_ethereum() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="withdraw_btn()"></i>
        <img src="../img/Ethereum-Logo.wine.png" alt="">
        <h1>WITHDRAW ETHEREUM</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
        var name ='Ethereum';
        
        // Add new content to main_div_body
       // ...

        var body = document.createElement("form");
        body.classList.add("rollbit-withdraw-options-form");
        body.innerHTML = `
            <p>Please enter the ${name} wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
            <div class="rollbit-withdraw-div-1">
                <p>RECEIVING SOLANA ADDRESS    <span style="color: red;">*</span></p>
                <input type="text" required>
            </div>
            <div class="rollbit-withdraw-div-2">
                <p>WITHDRAW AMOUNT   <span style="color: red;">*</span></p>
                <div class="rollbit-withdraw-div-2-1">
                    <div class="rolbit-withdraw-input-div-1">
                        <img src="../img/coin.webp" alt="">
                        <p>$</p>
                        <input type="text" required >
                    </div>
                    <p>=</p>
                    <div class="rolbit-withdraw-input-div-2">
                        <img src="../img/Ethereum-Logo.wine.png" alt="">
                        <input type="text" readonly >
                    </div>
                    <input type="submit" value="REQUEST WITHDRAW">
                </div>
                <p>Network Fee: $1.45</p>
            </div>
            <p>*You will receive the specified ${name} amount to your withdrawal address </p>
            <p>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
        `;
 
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        main_div_body.appendChild(body);
    }
    function withdraw_litecoin() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="withdraw_btn()"></i>
        <img src="../img/litecoin-ltc-logo.png" alt="">
        <h1>WITHDRAW LITECOIN</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
        var name ='Litecoin';
        
        // Add new content to main_div_body
       // ...

        var body = document.createElement("form");
        body.classList.add("rollbit-withdraw-options-form");
        body.innerHTML = `
            <p>Please enter the ${name} wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
            <div class="rollbit-withdraw-div-1">
                <p>RECEIVING SOLANA ADDRESS    <span style="color: red;">*</span></p>
                <input type="text" required>
            </div>
            <div class="rollbit-withdraw-div-2">
                <p>WITHDRAW AMOUNT   <span style="color: red;">*</span></p>
                <div class="rollbit-withdraw-div-2-1">
                    <div class="rolbit-withdraw-input-div-1">
                        <img src="../img/coin.webp" alt="">
                        <p>$</p>
                        <input type="text" required >
                    </div>
                    <p>=</p>
                    <div class="rolbit-withdraw-input-div-2">
                        <img src="../img/litecoin-ltc-logo.png" alt="">
                        <input type="text" readonly >
                    </div>
                    <input type="submit" value="REQUEST WITHDRAW">
                </div>
                <p>Network Fee: $1.45</p>
            </div>
            <p>*You will receive the specified ${name} amount to your withdrawal address </p>
            <p>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
        `;
 
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        main_div_body.appendChild(body);
    }
    function withdraw_solana() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="withdraw_btn()"></i>
        <img src="../img/Solana.png" alt="">
        <h1>WITHDRAW SOLANA</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
        var name ='Solana';
        
        // Add new content to main_div_body
       // ...

        var body = document.createElement("form");
        body.classList.add("rollbit-withdraw-options-form");
        body.innerHTML = `
            <p>Please enter the ${name} wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
            <div class="rollbit-withdraw-div-1">
                <p>RECEIVING SOLANA ADDRESS    <span style="color: red;">*</span></p>
                <input type="text" required>
            </div>
            <div class="rollbit-withdraw-div-2">
                <p>WITHDRAW AMOUNT   <span style="color: red;">*</span></p>
                <div class="rollbit-withdraw-div-2-1">
                    <div class="rolbit-withdraw-input-div-1">
                        <img src="../img/coin.webp" alt="">
                        <p>$</p>
                        <input type="text" required >
                    </div>
                    <p>=</p>
                    <div class="rolbit-withdraw-input-div-2">
                        <img src="../img/Solana.png" alt="">
                        <input type="text" readonly >
                    </div>
                    <input type="submit" value="REQUEST WITHDRAW">
                </div>
                <p>Network Fee: $1.45</p>
            </div>
            <p>*You will receive the specified ${name} amount to your withdrawal address </p>
            <p>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
        `;
 
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        main_div_body.appendChild(body);
    }
    function withdraw_rollbit() {
        var main_div_heading = document.getElementById("heading-option");
        var main_div_body = document.getElementById("body-options");
    
        main_div_heading.innerHTML = "";
        main_div_body.innerHTML = "";
    
        // Add new content to main_div_heading
        var heading = document.createElement("div");
        heading.classList.add("bitcoin-deposit-heaidng-div")
        heading.innerHTML = `
        <i class="fa-solid fa-chevron-left"  onclick="withdraw_btn()"></i>
        <img src="../img/rollbit.png" alt="">
        <h1>WITHDRAW ROLLBIT COIN</h1>
        <a href="#">View Transactions</a>
        `;
        main_div_heading.appendChild(heading);
        var name ='Rollbit';
        
        // Add new content to main_div_body
       // ...

        var body = document.createElement("form");
        body.classList.add("rollbit-withdraw-options-form");
        body.innerHTML = `
            <p>Please enter the ${name} wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
            <div class="rollbit-withdraw-div-1">
                <p>RECEIVING SOLANA ADDRESS    <span style="color: red;">*</span></p>
                <input type="text" required>
            </div>
            <div class="rollbit-withdraw-div-2">
                <p>WITHDRAW AMOUNT   <span style="color: red;">*</span></p>
                <div class="rollbit-withdraw-div-2-1">
                    <div class="rolbit-withdraw-input-div-1">
                        <img src="../img/coin.webp" alt="">
                        <p>$</p>
                        <input type="text" required >
                    </div>
                    <p>=</p>
                    <div class="rolbit-withdraw-input-div-2">
                        <img src="../img/rollbit.png" alt="">
                        <input type="text" readonly >
                    </div>
                    <input type="submit" value="REQUEST WITHDRAW">
                </div>
                <p>Network Fee: $1.45</p>
            </div>
            <p>*You will receive the specified ${name} amount to your withdrawal address </p>
            <p>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
        `;
 
        // Append the 'body' div to the document or another parent element
        document.body.appendChild(body);
        main_div_body.appendChild(body);
    }
    
}
