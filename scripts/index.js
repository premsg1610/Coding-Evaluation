// Store the wallet amount to your local storage with key "amount"



let balance = JSON.parse(localStorage.getItem("amount"))

let show_balance = document.getElementById("wallet")
show_balance.innerText = balance


function wallet(){

    // show_balance.innerHTML = null
    // console.log("inside function")
    let amount = document.querySelector("#amount").value;

    balance = balance + Number(amount)

    show_balance.innerText = balance

    document.getElementById("navbar").append(show_balance)

    localStorage.setItem("amount",balance)

    document.querySelector("#amount").value = null

}