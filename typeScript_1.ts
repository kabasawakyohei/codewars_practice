export function getRealFloor(n: number): number {
  let floor: number;
  if (n < 1) {
    floor = n;
  } else if (n < 13) {
    floor = n - 1;
  } else {
    floor = n - 2;
  }
  return floor;
}