
/*
Description: The polygonChecker, JS version checking a point inside a polygon or outside of it.
Author: Neonexxa
Version: 1.0

MIT License

Copyright (c) [2021] [Neonexxa]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const DEBUG = false;
const isOdd = (num) => num % 2;

const StrToCoord = ([x, y]) => ({ x, y});

const isInsidePolygon = (userCoordinate, polygon) => {

  // Transform string coordinates into arrays with x and y values
  let point = StrToCoord(userCoordinate.split(" "));
  const vertices = polygon.map(vertex => StrToCoord(vertex.split(" ")))
  
  // Check if the point sits exactly on a vertex
  let isPointOnVertex = vertices.find(({x, y}) => x === point.x && y === point.y);
  if (isPointOnVertex) return true;
  // console.log('polygons', vertices)
  // console.log('coordinate', point)
  let intersections = 0;
  for (i = 1; i < vertices.length; i++) {
    if(DEBUG) console.log('Intersections Count: ', intersections)
    // vertex setting in loop
    if(DEBUG) console.log("=== VERTEX SETTING ===")
    let vertex1 = vertices[i-1]; 
    if(DEBUG) console.log('vertex1 ', vertex1)
    let vertex2 = vertices[i];
    if(DEBUG) console.log('vertex2 ', vertex2)
    let isY_VertexAlign = vertex1['y'] === vertex2['y'];
    if(DEBUG) console.log('isY_VertexAlign ', isY_VertexAlign)
    let isX_VertexAlign = vertex1['x'] === vertex2['x'];
    if(DEBUG) console.log('isX_VertexAlign ', isX_VertexAlign)
    let isY_VertexAlignWithPoint = vertex1['y'] === point['y'];
    if(DEBUG) console.log('isY_VertexAlignWithPoint ', isY_VertexAlignWithPoint)
    
    // minMax Setting
    if(DEBUG) console.log("=== MINMAX SETTING ===")
    let minOfX_Vertex = Math.min(vertex1['x'], vertex2['x'])
    if(DEBUG) console.log('minOfX_Vertex ', minOfX_Vertex)
    let minOfY_Vertex = Math.min(vertex1['y'], vertex2['y'])
    if(DEBUG) console.log('minOfY_Vertex ', minOfY_Vertex)
    let maxOfX_Vertex = Math.max(vertex1['x'], vertex2['x'])
    if(DEBUG) console.log('maxOfX_Vertex ', maxOfX_Vertex)
    let maxOfY_Vertex = Math.max(vertex1['y'], vertex2['y'])
    if(DEBUG) console.log('maxOfY_Vertex ', maxOfY_Vertex)

    // comparison Highlow
    if(DEBUG) console.log("=== COMPARISON ===")
    let xIsMoreThanVertexMin = point['x'] > minOfX_Vertex;
    if(DEBUG) console.log('xIsMoreThanVertexMin', xIsMoreThanVertexMin)
    let yIsMoreThanVertexMin = point['y'] > minOfY_Vertex;
    if(DEBUG) console.log('yIsMoreThanVertexMin', yIsMoreThanVertexMin)
    let xIsLessThanVertexMax = point['x'] < maxOfX_Vertex;
    if(DEBUG) console.log('xIsLessThanVertexMax', xIsLessThanVertexMax)
    let yIsLessThanVertexMax = point['y'] < maxOfY_Vertex;
    if(DEBUG) console.log('yIsLessThanVertexMax', yIsLessThanVertexMax)
    let xIsLessThanVertexMaxOrEqual = point['x'] <= maxOfX_Vertex;
    if(DEBUG) console.log('xIsLessThanVertexMaxOrEqual', xIsLessThanVertexMaxOrEqual)
    let yIsLessThanVertexMaxOrEqual = point['y'] <= maxOfY_Vertex;
    if(DEBUG) console.log('yIsLessThanVertexMaxOrEqual', yIsLessThanVertexMaxOrEqual)
    let yVertexNotEqual = vertex1['y'] !== vertex2['y'];
    if(DEBUG) console.log('yVertexNotEqual', yVertexNotEqual)
    

    let isPointOnHorizontalBoundary = isY_VertexAlign && isY_VertexAlignWithPoint && xIsMoreThanVertexMin && xIsLessThanVertexMax;
    if(DEBUG) console.log('isPointOnHorizontalBoundary ', isPointOnHorizontalBoundary)
    if (isPointOnHorizontalBoundary) return "boundary";
    
    if (yIsMoreThanVertexMin && yIsLessThanVertexMaxOrEqual && xIsLessThanVertexMaxOrEqual && yVertexNotEqual) { 
      let xinters = Number(point['y'] - vertex1['y']) * Number(vertex2['x'] - vertex1['x']) / Number(vertex2['y'] - vertex1['y']) + Number(vertex1['x']); 
      if(DEBUG) console.log('Check if point is on the polygon boundary (other than horizontal)')
      if (xinters === point['x']) return "boundary";
      if (isX_VertexAlign || point['x'] <= xinters) intersections++;
    } 
  }

  // If the number of edges we passed through is odd, then it's in the polygon. 
  if(DEBUG) console.log('intersections is Odd', isOdd(intersections))
  if (isOdd(intersections)) { return true;} 
  else { return false;}
};
module.exports = { isInsidePolygon }