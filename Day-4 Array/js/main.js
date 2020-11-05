const empytArry = []
console.log(`${empytArry} is a empty array`)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

console.log(countries) // Array
console.log(countries.length) // Array length
const middle = countries.length

console.log(`First Country = ${countries[0]} | Middle Country = ${countries[Math.floor(middle/2)]} | Last Country = ${countries[-1]}`)

const classX = [
    'Red Group',
    10,
    true,
    {
        numberOfPresentStudent : 6,
        nameOfPresentStudent:["Jai", "Joyti", "Kanchan", "Jone", "Himansu", "Hunny"]
    },
    {
        numberOfAbsentStudenr: 4, 
        nameOfAbsentStudent:["Neha", "Prachi", "Shaalu", "Priyum"]
    },
    {
        address : [
            city = "Lucknow" ,
            state = "Uttar Pradesh",
            country = "India"
        ]
    }
]

console.log((classX[0]))
console.log(classX)