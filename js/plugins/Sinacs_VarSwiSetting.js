/*:
* @plugindesc 변수 및 스위치 호출 및 세팅의 구문을 줄여서 쓸 수 있게 해줌
* @author 시낵스
* 
* @param 파라미터 없음
* @default
* 
* @help 
* 다음 내용들은 스크립트란에 작성합니다.
*  
* 변수의 경우:
* $var(id) -> id번 변수의 값을 가져옵니다.
* $setVar(id, value) -> id번 변수의 값을 value로 설정합니다.
* 
* 스위치의 경우:
* $swi(id) -> id번 스위치의 값을 가져옵니다.
* $swiOn(id) -> id번 스위치를 켭니다.
* $swiOff(id) -> id번 스위치를 끕니다.
* $swiSwap(id) -> id번 스위치의 상태를 반전합니다.
*/

function $var(id) {
    return $gameVariables.value(id);
}

function $setVar(id, value) {
    $gameVariables.setValue(id, value);
}

function $swi(id) {
    return $gameSwitches.value(id);
}

function $swiOn(id) {
    $gameSwitches.setValue(id, true);
}

function $swiOff(id) {
    $gameSwitches.setValue(id, false);
}

function $swiSwap(id) {
    var i = $gameSwitches.value(id);
    $gameSwitches.setValue(id, !i);
}