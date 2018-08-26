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

function distanceTravelledInFeet (startBlock, endBlock) {
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264;
  }
}

/*
function calculatesFarePrice (startBlock, endBlock) {
  if () {
    'cannot travel that far'
  } else if {

  }
}
*/
