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

1. Example 1
```js
// Notes: Number of coordinates in polygon is more than 2 (and last coordinate should equal to first), max is unlimited,

const polygon_point = ["lat lng","lat lng","lat lng","lat lng","lat lng"];
const coordinates = "lat lng";
isInsidePolygon(coordinate, polygon_point);
```
2. Example 2
```js
const polygon_point = ["12 11","0 10","0 0","10 0","12 11"];
const coordinates = "5 5";
isInsidePolygon(coordinate, polygon_point);
```

# Demo
- [replit](https://replit.com/@firdaushishamud/polygonChecker#index.js)

## Author
- [Neonexxa](https://github.com/neonexxa)