# Getting Started
## build engine
```cli
$ npm i
$ npm run build
```
## install engine
### commonjs
`build/commonjs/*`をプロジェクトにコピー
```javascript
const CGEngine = require('./**/main.js')
```
### ESModules
`build/esm/*`をプロジェクトにコピー
```javascript
import * as CGEngine from './**/main.js';
```
### umd
`build/umd/cg-engine.js`をプロジェクトにコピー
```html
<script src="./**/cg-engine.js"></script>
```
## Setup Renderer
```javascript
const canvas = document.getElementById('cnv');

const renderer = new CGEngine.Renderer({
  canvas,
  clearColor: new CGEngine.Color(0.0, 0.0, 0.0, 1.0),
  clearDepth: 1,
});
```

## Setup Camera
```javascript
// 視野角, 縦横比, near, far
const camera = new CGEngine.PerspectiveCamera(Math.PI * 0.5, 1, 0.01, 1000);

// 平行投影法 描画範囲の高さ, 縦横比, near, far
const camera = CGEngine.OrthographicCamera(10, 1, 0.01, 1000);

// transformのセット
camera.transform.position.set(0, 0, -10);
caemra.transform.lookAt(new CGEngine.Vector3(0.0, 0.0, 0.0));
```

## Setup Scene

### Create Cube
```javascript
const pbrShader = CGEngine.ShaderPrimitives.PhysicalFragment(
  CGEngine.PBRPrimitivevs.CookTorrance,
);
const geometry = CGEngine.GeometryPrimitives.Cube();
const material = new CGEngine.Material(
  CGEngine.ShaderPrimitives.BasicVertex,
  pbrShader,
  {
    albedo: new CGEngine.Vector4(1, 0, 0, 1),
    metallic: 0.5,
    roughness: 0.4,
  },
)
const entity = new CGEngine.Entity(geometry, material);

// transformの変更
entity.transform.position.set(0, 0, 0);
entity.transform.scale.set(1, 1.5, 0.8);
entity.transform.rotation.eularAngle(Math.PI * 0.2, Math.PI * 0.1, Math.PI * 0.7);
```

### Create Light
```javascript
const light = new CGEngine.LightPrimitives.Directional(new CGEngine.Color(0.1, 0.1, 0.1, 1));
light.transform.rotation.eularAngle(new CGEngine.Vector3(0, 0, -Math.PI * 0.15));
```

### Create Scene Root
```javascript
const root = new CGEngine.Empty();
root.children.push(entity);
root.children.push(light);

renderer.addEntities(root);
```

## Render
```javascript
renderer.render(camera);
```