// Chiedi all’utente il suo nome
const firstName = prompt('Qual è il tuo nome?')

// Chiedi all'utente il suo cognome
const lastName = prompt('Qual è il tuo cognome?')

// Chiedi all'utente il suo colore preferito
const color = prompt ('Qual è il tuo colore preferito?')

/* console.log(`${firstName}${lastName}${color}`); */


// Scrivi sulla pagina nomecognomecolorepreferito22

document.getElementById('password').innerHTML = `La tua password è:${firstName}${lastName}${color}22`