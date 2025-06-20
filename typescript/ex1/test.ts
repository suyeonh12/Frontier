const msg: string = "Hello, world!";
console.log(msg);

/**
 * 지정된 최소값과 최대값 사이의 랜덤 정수를 반환합니다.
 * @param min - 랜덤 숫자의 최소값 (포함)
 * @param max - 랜덤 숫자의 최대값 (포함)
 * @returns 최소값과 최대값 사이의 랜덤 정수
 */
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 10));
