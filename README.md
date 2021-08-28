# points-in-polygons

### To install

yarn
```sh
yarn add points-in-polygons
```
npm
```sh
npm install points-in-polygons
```

### To use

1. Template
```js
// Notes: Number of coordinates in polygon is more than 2 (and last coordinate should equal to first), max is unlimited,

const polygon_point = ["lat lng","lat lng","lat lng","lat lng","lat lng"];
const coordinates = "lat lng";
console.log(isInsidePolygon(coordinate, polygon_point)); // true || false
```
2. Example
```js
const polygon_point = ["12 11","0 10","0 0","10 0","12 11"];
const coordinates = "5 5";
console.log(isInsidePolygon(coordinate, polygon_point)); // true || false
```

# Demo
- [replit](https://replit.com/@firdaushishamud/polygonChecker#index.js)

## Author
- [Neonexxa](https://github.com/neonexxa)