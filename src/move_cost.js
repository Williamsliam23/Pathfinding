

const g = 0;
const h = Math.abs((currentLocation.x - endLocation.x)) + Math.abs((currentLocation.y - endLocation.y)); // manhattan distance
const f = g + h; //total estimated movement cost