export function splitString(input: string): string {
  return input.split('_').join(' ');
}

export function concatenateStrings(str1: string, str2: string): string {
  return str1 + str2;
}

export function isLeap(year: number): boolean {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

export function secretHandshake(number: number): string[] {
  const actions = [
    { bit: 1, action: "wink" },
    { bit: 2, action: "double blink" },
    { bit: 4, action: "close your eyes" },
    { bit: 8, action: "jump" }
  ];
  let result: string[] = [];

  for (const a of actions) {
    if ((number & a.bit) !== 0) {
      result.push(a.action);
    }
  }

  if ((number & 16) !== 0) {
    result = result.reverse();
  }

  return result;
}