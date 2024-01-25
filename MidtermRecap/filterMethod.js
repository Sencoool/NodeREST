const people = [
    {
        name: "Jake",
        age: "24",
        money: 25000
    },
    {
        name: "Annie",
        age: "24",
        money: 200
    },
    {
        name: "Ashe",
        age: "29",
        money: 19000
    }
]

const adult = people.filter(a => a.money >= 15000)

if(adult[0].money > adult[1].money){
    temp = adult[1].money
    adult[1].money = adult[0].money
    adult[0].money = temp
}

console.log(adult[0].money);

console.log(adult);

const Test = [100,43,5600,342]

const Testfilter = Test.filter(a => a <= 100)

console.log(Testfilter);

const numbers = [1,2,3,1,3,3,4,5,7,9,9]

const morefive = numbers.filter(a => a > 5)

console.log(morefive);

const nums = numbers.filter((value,index,numb) => {
    return numb.indexOf(value) === index; //indexOf return position of first index that u want to find
})

console.log(nums);