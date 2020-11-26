type WorkDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
type Weekend = 'Sunday' | 'Saturday';
type Weekday = WorkDay | Weekend;

function doesWeHaveDicsountsToday(day: Weekday): boolean {
    const discountDays: Weekday[] = ['Tuesday', 'Thursday']

    return discountDays.includes(day);
}

function shouldIPrayToday(day: Weekend): boolean {
    return day === 'Sunday';
}

console.log(doesWeHaveDicsountsToday('Monday'));
console.log(doesWeHaveDicsountsToday('Saturday'));
console.log(doesWeHaveDicsountsToday('Fryday'));

console.log(shouldIPrayToday('Sunday'));
console.log(shouldIPrayToday('Tuesday'));


type NumericDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type NumericMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

function doSomethingWithDay(dayNumber: NumericDay): void {
    console.log(dayNumber);
}
doSomethingWithDay(0);
doSomethingWithDay(7);