// Hent alle hullene fra HTML-dokumentet
const holes = document.querySelectorAll('.hole');

// Hent scoreboard-elementet fra HTML-dokumentet
const scoreBoard = document.querySelector('.score');

// Initialiser score-variabel
let score = 0;

// Initialiser timeUp-variabel
let timeUp = false;

// Funktion for å generere et tilfeldig tidspunkt mellom min og max
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Funktion for å velge et tilfeldig hull
function randomHole(holes) {
    // Finn indeksen til et tilfeldig hull
    const idx = Math.floor(Math.random() * holes.length);
    
    // Hent hullet fra indeksen
    const hole = holes[idx];
    
    // Hvis det forrige hullet er det samme som dette, velg et nytt hull
    if (hole === lastHole) {
        console.log('duplicate hole');
        return randomHole(holes);
    }
    
    // Lagre det forrige hullet
    lastHole = hole;
    
    // Returner hullet
    return hole;
}

// Funksjon for å starte spillet
function startGame() {
    // Nullstill scoreboard
    scoreBoard.textContent = 0;
    
    // Nullstill timeUp-variabel
    timeUp = false;
    
    // Nullstill score-variabel
    score = 0;
    
    // Start peep-funksjonen
    peep();
    
    // Afslutt spillet etter 10 sekunder
    setTimeout(() => timeUp = true, 10000);
}

// Funksjon for å håndtere klikk på hullene
function whack(e) {
    // Hvis klikket ikke er pålitelig (f.eks. fra en bot), returner funksjonen
    if (!e.isTrusted) return;
    
    // Øk score
    score++;
    
    // Fjern 'up'-klassen fra hullet for å skjule det
    this.parentNode.classList.remove('up');
    
    // Oppdater scoreboard-elementet med den nye score-verdien
    scoreBoard.textContent = score;
}

// Legg til klikk-hendelseslytter på alle hullene
holes.forEach(hole => hole.addEventListener('click', whack));