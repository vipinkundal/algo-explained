// REFERENCE ALGORITHM SOLUTION
// Tower of Hanoi
// Route: /algorithms/recursion/tower-of-hanoi

export function towerOfHanoi(disks, from = "A", to = "C", helper = "B") {
  const moves = [];
  function move(n, source, target, spare) {
    if (n === 0) return;
    move(n - 1, source, spare, target);
    moves.push([source, target]);
    move(n - 1, spare, target, source);
  }
  move(disks, from, to, helper);
  return moves;
}
