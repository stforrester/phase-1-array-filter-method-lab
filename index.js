// Code your solution here

function findMatching(array, name) {
    return array.filter((element) => {
        return element.toUpperCase() === name.toUpperCase();
    });
}

function fuzzyMatch(array, letters) {
    return array.filter((element) => {
        return (element.slice(0, (letters.length)) === letters);
    });
}

function matchName(array, name) {
    return array.filter((element) => {
        return element.name === name;
    });
}

