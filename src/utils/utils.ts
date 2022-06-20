function randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomArray(min: number, max: number, num: number): number[] {
  const arr: number[] = [];

  do {
    for (let i = 0; i < num - arr.length; i++) {
      const random = randomInteger(min, max);
      if (arr.indexOf(random, 0) == -1) {
        arr.push(random);
      } else {
        break
      }
    }
  } while (arr.length < num)

  return arr
}