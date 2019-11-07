export default function leap(year) {
    const divisible_4 = Number.isInteger(year /4)    
    const divisible_100 = Number.isInteger(year /100)    
    const divisible_400 = Number.isInteger(year /400)
    if ( divisible_100 ) {
        return divisible_100 && divisible_400;
    } 
    return divisible_4 || divisible_400;
}