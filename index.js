// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//Use array.prototype.filter to find a matching name to the drivers array
function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

console.log(findMatching(drivers, 'bobby'));
console.log(findMatching(drivers, 'Sammy'))
console.log(findMatching(drivers, 'Susan'))

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(driver){
        return driver.toLowerCase().startsWith(name.toLowerCase())
    });
}

console.log(fuzzyMatch(drivers, 'Sa'));

function matchName(drivers, name) {
    return drivers.filter(function(driverName){
        return driverName.name === name;
    })
}
console.log(matchName(drivers, 'Bobby'))
