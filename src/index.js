// index.js

// Callbacks
const displayBurgerDetails = (burger) => {
    // Add code
    const imageElement = document.getElementById('image')
    imageElement.src = burger.image

    const nameElement = document.getElementById('name')
    nameElement.textContent = burger.name

    const numElement = document.getElementById('number-in-cart-count')
    numElement.textContent = burger.number_in_cart

};

const addToCart = () => {
    // Add code
    const addToCartForm = document.getElementById('add-to-cart-form')
    const currBurgerName = document.getElementById('name')
    const currBurgerNum = document.getElementById('number-in-cart-count')
    console.log(currBurgerNum)
    
    //when the number is submitted update the current 
    //burger number to the form name plus whatever it 
    //is currently

    addToCartForm.addEventListener('submit',(event) => {
        event.preventDefault()
        const inputNum = document.getElementById('number-to-add')
        currBurgerNum.textContent = Number(currBurgerNum.textContent) + Number(inputNum.value)
 
    })


}

const addBurgerNamesToMenu = () => {
    // Add code

    const restMenu = document.getElementById("restaurant-menu")
    const burgerNames = fetch("http://localhost:3000/burgers")
    .then((response) => response.json())
    .then((burgers) => {
        //for each burger element create element and append it to menu
        burgers.forEach(burger =>{
            //create element
            const spanElement = document.createElement('span')
            spanElement.textContent = burger.name
            //apend child
            restMenu.appendChild(spanElement)
            spanElement.addEventListener('click',() => {
                displayBurgerDetails(burger)
            })
        })
    
    
        
    })
};

const main = () => {
    // Invoke addBurgerNamesToMenu here
    // Invoke addToCart here
    document.addEventListener("DOMContentLoaded",(event) => {
        addBurgerNamesToMenu()
        addToCart()
    })

}

main()