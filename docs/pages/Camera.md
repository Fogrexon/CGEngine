# Camera
カメラ機能を提供するクラス

## PerspectiveCamera
```javascript
new PerspectiveCamera(
  angle: number,
  aspect: number,
  near: number,
  far: number,
);
```
- angle: 視野角
- aspect: 縦横比
- near: nearクリップ(最小描画距離)
- far: farクリップ(最大描画距離)

### attributes
- `angle`
- `aspect`
- `near`
- `far`
  - コンストラクタと同じ
- `transform`
  - カメラの位置情報
- `updateProjectionMatrix()`
  - angle, aspect, near, farのいずれかを更新したときに呼び出し、必要な行列を更新する。
- `getMatrix(): { vMatrix: Matrix4, pMatrix: Matrix4, uCameraPos: Vector3 }`
  - view行列、projection行列、カメラの座標の計算済みの値を返す


## OrthographicCamera
```javascript
new OrthographicCamera(
  height: number,
  aspect: number,
  near: number,
  far: number
);
```
- height: 描画範囲の高さ
- aspect: 縦横比
- near: nearクリップ(最小描画距離)
- far: farクリップ(最大描画距離)

### attributes
- `height`
- `aspect`
- `near`
- `far`
  - コンストラクタと同じ
- `transform`
  - カメラの位置情報
- `updateProjectionMatrix()`
  - height, aspect, near, farのいずれかを更新したときに呼び出し、必要な行列を更新する。
- `getMatrix(): { vMatrix: Matrix4, pMatrix: Matrix4, uCameraPos: Vector3 }`
  - view行列、projection行列、カメラの座標の計算済みの値を返す

