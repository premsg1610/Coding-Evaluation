// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



let balance = JSON.parse(localStorage.getItem("amount"))

document.getElementById("wallet").innerText = balance



let movie = JSON.parse(localStorage.getItem("movie"))

let {Poster,Title} = movie


let container = document.getElementById("movie")

let img = document.createElement("img")
img.src = Poster;

let title = document.createElement("h3")
title.innerText = Title

container.append(img,title)




function checkBalance(){

    event.preventDefault()

    let seats = document.getElementById("number_of_seats").value;

    if(+seats <= 0)
    {
        alert("Please select atleast one seat to proceed!")
    }
    else{
        
    let value = +seats * 100
    console.log(value)

    if(value > balance)
    {
        alert("Insufficient Balance!")
    }
    else{
        alert("Booking Successful!")

        balance = balance - value

        document.getElementById("wallet").innerText = balance
    
        localStorage.setItem("amount",balance)
    }

    }

    document.getElementById("user_name").value = null
    document.getElementById("number_of_seats").value = null

   
    
}