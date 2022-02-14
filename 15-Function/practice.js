const  marks = [12, 14, 19, 20, 16, 16, 20];

function average(numbers) {
    let sum = 0 ;
    for (let i = 0; i < numbers.length ; i++) {
        sum += marks[i];
    }
    let ave = sum / numbers.length;
    let round = ave.toFixed(2)
    if (ave >= 12) {
        console.log(`pass with marks ${round}`)
    }else {
        console.log(`down with marks ${round}`)
    }
}

average(marks);
