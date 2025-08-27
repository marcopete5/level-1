var peopleWhoWantToSeeMadMaxFuryRoad = [
    { name: 'Mike', age: 12, gender: 'male' },
    { name: 'Madeline', age: 80, gender: 'female' },
    { name: 'Cheryl', age: 22, gender: 'female' },
    { name: 'Sam', age: 30, gender: 'male' },
    { name: 'Suzy', age: 4, gender: 'female' }
];

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        var pronoun =
            peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female'
                ? "SHE'S"
                : "HE'S";
        console.log(
            peopleWhoWantToSeeMadMaxFuryRoad[i].name +
                ' is old enough. ' +
                pronoun +
                ' good to see Mad Max Fury Road.'
        );
    } else {
        var pronoun =
            peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female'
                ? 'HER'
                : 'HIM';
        console.log(
            peopleWhoWantToSeeMadMaxFuryRoad[i].name +
                " is not old enough to see Mad Max Fury Road, don't let " +
                pronoun +
                ' in.'
        );
    }
}
