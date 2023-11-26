
const promt = require("prompt-sync")();

const  ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
        A:2,
        B:4,
        C:6,
        D:8,

}

const SYMBOLS_VALUE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,

}

const deposit = () => {
    
    while(true){

     const depositAmount = promt("Enter a deposit amount: ");
     const numberDepositAmount = parseFloat(depositAmount);

     if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount , try again")
     }
     else{
        return numberDepositAmount;
     }
    }
};


const getNumberOfLines = () => {
    while(true){

        const lines = promt("Enter the number of lines to bet on (1 - 3): ");
        const numberOfLines = parseFloat(lines);
   
        if(isNaN(numberOfLines)|| numberOfLines <= 0 || numberOfLines > 3) {
               console.log("Invalid amount , try again")
        }
        else{
           return numberOfLines;
        }
       }

};


const getBet = (balance) => {
    while(true){

        const bet = promt("Enter the bet per line ");
        const numberBet = parseFloat(bet);
   
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance ){
               console.log("Invalid bet , try again")
        }
        else{
           return numberBet;
        }
       }   
};


const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i =0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    // Rest of your code...




    const reels = [[],[],[]];
        for(let i = 0;i < COLS;i++){
            const reelSymbols = [...symbols];
         for (let j = 0;j < ROWS;j++){
                const randomIndex = Math.floor(Math.random()* reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
         }
        }
        return reels;


};


const transpose = (reels) => {
    const rows = [];
    for(let i = 0;i < ROWS;i++){
        rows.push([]);
        for(let j = 0;j < COLS;j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows;
}

const printRows = (rows) => {
    for (const row of rows){
        let rowString = "";
        for(const[i,symbol]of rows.entries()){
            rowString+= symbol
            if(i != rows.length -1){
                rowString += "|"

            }
        }
        console.log(rowString);
    }
    
};

const getWinnings = (rows,bet,lines) =>{
    let winnings = 0;


    for(let row = 0;row < lines;row++){
        const symbols = rows[row];
        let allSame = true;

        for (const sybol of symbols){
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if (allSame){
            winnings += bet * SYMBOLS_VALUE[symbols[0]]
        }
    }
    return winnings;

}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
const reels = spin();
const rows = transpose(reels);
printRows(rows);
const winnings = getWinnings();
console.log("you won,$" + winnings.toString());


 
