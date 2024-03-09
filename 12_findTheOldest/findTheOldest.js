const findTheOldest = function(people) {
    people.forEach((person) => { 
        if(person.yearOfDeath === undefined)
            person.yearOfDeath = new Date().getFullYear();
        });
    people.forEach((person) => person.age = person.yearOfDeath - person.yearOfBirth);
    console.log(people);
    const oldestPerson = people.reduce((initValue, currentValue) => {
        if(initValue.age < currentValue.age)
            initValue = currentValue        
        return initValue;
    }) 
    return oldestPerson;
};

//name: "Carly",
//yearOfBirth: 1942,
//yearOfDeath: 1970,

// Do not edit below this line
module.exports = findTheOldest;
