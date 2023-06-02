var express = require('express');
var router = express.Router();
const SVG = require('@svgdotjs/svg.js');

 
/* GET users listing. */
router.get('/use1', function(req, res, next) {
  res.send('Enumerating objects: 18, done');
});

app.get('/', (req, res) => {
  // Create an SVG canvas
  const canvas = SVG().size(400, 400);

  // Generate a random shape
  const shapeType = getRandomShapeType();
  const shape = createRandomShape(shapeType);

  // Add the shape to the canvas
  canvas.add(shape);

  // Set the response header to indicate SVG content
  res.set('Content-Type', 'image/svg+xml');

  // Send the SVG as the response
  res.send(canvas.svg());
});

// Function to generate a random shape type
function getRandomShapeType() {
  const shapeTypes = ['circle', 'rect', 'ellipse', 'polygon'];
  const randomIndex = Math.floor(Math.random() * shapeTypes.length);
  return shapeTypes[randomIndex];
}

// Function to create a random shape
function createRandomShape(shapeType) {
  const shape = SVG().size(200, 200);

  switch (shapeType) {
    case 'circle':
      shape.circle(100).fill('red').move(50, 50);
      break;
    case 'rect':
      shape.rect(150, 100).fill('blue').move(25, 50);
      break;
    case 'ellipse':
      shape.ellipse(150, 80).fill('green').move(25, 60);
      break;
    case 'polygon':
      shape.polygon('100,50 50,150 150,150').fill('orange');
      break;
    default:
      break;
  }

  return shape;
}

module.exports = router;
