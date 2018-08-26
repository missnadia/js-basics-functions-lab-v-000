function distanceFromHqInBlocks (someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue
  }
}

function distanceFromHqInFeet (someValue) {
  distanceFromHqInBlocks(someValue);
  return distanceFromHqInBlocks(someValue) * 264
}
/*
function distanceTravelledInFeet (startBlock, endBlock) {
  let result;
    if (startBlock > endBlock) {
      result = (startBlock - endBlock) * 264;
    } else {
      result = (endBlock - startBlock) * 264;
    }
    return result
}

function calculatesFarePrice (startBlock, endBlock) {
  if () {
    'cannot travel that far'
  } else if {

  }
}
*/
