// nwabisa.js

this.#firstname = "Nwabisa"
this.surname = "Gabe"
this.role = "CEO"

this.#display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display
 

// johannes.js
this.#firstname = "Johannes"
this.#surname = "Potgieter"
this.#role = "Intern"

this.#display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display
 

// alex.js

this.#firstname = "Alex"
this.#surname = "Naidoo"
this.#role = "Head of Marketing"

this.#display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display
 

// scripts.js

console.log('Roles:', nwabisa.role, johanes.role, alex.role)