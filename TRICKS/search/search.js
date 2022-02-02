// grab the template that will be used to populate the search results
const userCardTemplate = document.querySelector("[data-user-template]")
// The whole container where we will append data
const userCardContainer = document.querySelector("[data-user-cards-container]")
// search input that we can add an event listener on
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    // set the card as visible if the input matches any part of the username or email
    users.forEach(user => {
        const isVisible = 
        user.name.toLowerCase().includes(value) || 
        user.email.toLowerCase().includes(value)
        // if the element does not include any of the input, toggle the hide class
        user.element.classList.toggle("hide", !isVisible)
    })
})

// grab an api of fake users
// https://jsonplaceholder.typicode.com/users
fetch("userData.JSON")
    .then(res => res.json())
    .then(data => {
    users = data.map(user => {
        // get the content inside our template, clone it and return a document fragment
        const card = userCardTemplate.content.cloneNode(true).children[0]
        // get the first child of the card (with all of the content inside it (email,header))
        const header = card.querySelector("[data-header]")
        const email = card.querySelector("[data-email]")
        const phone = card.querySelector("[data-phone]")

        header.textContent = user.name
        email.textContent = user.email
        phone.textContent = user.phone

        userCardContainer.append(card)

        // Does the name/email include
        return { name: user.name, email: user.email, phone: user.phone, element: card}
    })

})