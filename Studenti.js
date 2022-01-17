
let studenti = [
    {
    nome : 'Sergio',
    cognome : 'Minissale',
    eta: 24,
    },
    
    {
    nome : 'Lauro',
    cognome : 'De Marinis',
    eta: 31,
    },

    {
    nome : 'Fabio',
     cognome : 'Rizzo',
     eta: 42,
    },

    {
    nome : 'Davide',
    cognome : 'De Luca',
    eta: 33,
    },
]

studenti.push(studenti);

for(let i = 0; i < studenti.length; i++){
    let totStudenti = studenti[i];
console.log('nome: ' + totStudenti.nome);
console.log('cognome: ' + totStudenti.cognome);

}

let nome = prompt('Inserisci il nome dello studente: ');
let cognome = prompt('Inserisci il cognome dello studente: ');
let eta = prompt('Inserisci l età dello studente: ');

studenti.push({
    nome: nome,
    cognome: cognome,
    eta: eta

})

for(let i = 0; i < studenti.length; i++){
    let totStudenti = studenti[i];
console.log('nome: ' + totStudenti.nome);
console.log('cognome: ' + totStudenti.cognome);
console.log('età: ' + totStudenti.eta);
}
