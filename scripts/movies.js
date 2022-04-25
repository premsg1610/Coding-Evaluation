// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let balance = JSON.parse(localStorage.getItem("amount"))

document.getElementById("wallet").innerText = balance





let id ;

const searchMovies = async () => {

    try{

    const query = document.getElementById("search").value;

    const res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=67e26a9`)

    const data = await res.json()
    console.log(data)

    let details = data.Search
    console.log(details)

    return details

    }
    catch{
        console.log("err:",err)
    }
    
}

function appendMovies(movies){

    let container = document.getElementById("movies")
    container.innerHTML = null

    movies.forEach(({Title,Poster}) => {

   
    let box = document.createElement("div")

    let img = document.createElement("img")
    img.src = Poster

    let title = document.createElement("h3")
    title.innerText = Title

    let btn = document.createElement("button")
    btn.innerText = "book now"
    btn.setAttribute("class","book_now")

    let movieData = {
       Poster,
       Title
    }

    box.append(img,title,btn)
    
    btn.addEventListener("click",function(){

       checkoutPage(movieData)
    })

   

    container.append(box)

})

}

function checkoutPage(data){

    console.log(data)
    window.location.href = "checkout.html";

    localStorage.setItem("movie",JSON.stringify(data))
}






async function main(){

    let data = await searchMovies()

    if(data == undefined)
    {
        return false
    }

    appendMovies(data)
}


function debounce(func,delay){

    if(id){
        clearTimeout(id)
    }

    id = setTimeout(function(){

        func()

    },delay);

}