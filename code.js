// Create a function that takes two dates and returns
//  the number of days between the first and second date


//Creating 2 variables to make dates using Date Object

let date1 = new Date('October 19, 1997 12:00:00')

let date2 = new Date('October 27, 2000 12:00:00')

//Creating a Variable that Must Convert the dates 
// down to milliseconds using .getTime() to get the 
// differnce in milliseconds

let differnceTime = date2.getTime() - date1.getTime()

//Reconverting the miliseconds to days 

let differneceDays = differnceTime / (1000 * 60 * 60 * 24)

function getDays(date1, date2) {
    let day1 = new Date(date1)
    let day2 = new Date(date2)

    let timeDif = day1.getTime() - day2.getTime()

    let dayDif = timeDif / (1000 * 60 * 60 * 24)

    return dayDif
}

console.log(getDays('October 19, 2000 12:00:00', 'October 18, 2000 12:00:00'))