// Code your solution in this file!
// let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// let newArray;

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return integer * fare;
    }
} 

const fareDoubler = createFareMultiplier(2); // 2 here is integer from createFareMultiplier

const fareTripler = createFareMultiplier(3);

selectDifferentDrivers = (drivers, returnLastTwoDrivers) => returnLastTwoDrivers(drivers);

