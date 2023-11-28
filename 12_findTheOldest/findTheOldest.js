const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = null;

    people.forEach(person => {
        let currentAge = getAge(person.yearOfBirth, person.yearOfDeath)

        if (currentAge > oldestAge) {
            oldestAge = currentAge;
            oldestPerson = person;
        }
    }
    )
    return oldestPerson;

};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
      }
      return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
