1번 픽쳐는 **배경으로 사용하는 픽쳐**이며, 2번 픽쳐부터 21번 픽쳐는 **눌러야 하는 노트**를 나타내는 픽쳐

변수 ID : 1 ~ 20 => 각 n번째의 노트가 눌러야 하는 키

(값이 1이면 아래, 2면 왼쪽, 3이면 오른쪽, 4면 위, 5는 결정 키, 6은 취소 키)

---

`Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);`

minCeiled 이상 maxFloored 이하의 무작위 정수 반환

---

```js
let shouldFrame = 180;					// 제일 먼저 쳐야 하는 노트의 제한 시간
let destinX = 224;					// 제한 시간의 기준이 되는 X좌표
for (let i=2;i<=21;i++) {				// 픽쳐가 20개, 21 - 2 + 1 = 20
  let pic = $gameScreen.picture(i);
  let picDiff = pic.x() - 224;				// 각 픽쳐 마다 제한 X좌표로부터 얼마나 떨어져 있는지 계산
  let firstPicDiff = $gameScreen.picture(2).x() - 224;	// 2번 픽쳐(초기 픽쳐)의 노트의 X좌표가 제한 X좌표랑 얼마나 떨어져 있는지 계산
  let frameDiff = picDiff / firstPicDiff; 		// 비율을 구하기 (2번 픽쳐의 경우 제일 가까우므로 1이 기준)
  let frames = Math.ceil(shouldFrame * frameDiff);	// 올림 계산으로 소숫점 제거
  $gameScreen.movePicture(i, 1, 224, 562, 100, 100, 255, 0, frames);
}
```

---

