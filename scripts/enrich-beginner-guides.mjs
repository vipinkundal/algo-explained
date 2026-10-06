import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import vm from 'node:vm';

// Curated explanations supplement existing topic-specific traces, never infer an
// algorithm's complexity from the shape of its visualizer.
const descriptions = {
  'time-complexity-basics': ['Time complexity describes how the amount of work grows as the input grows.', 'At n = 8, a full scan uses about 8 visits; comparing every pair uses about 64 comparisons. These are growth models, not milliseconds.'],
  'space-complexity-basics': ['Space complexity describes how much extra memory an algorithm needs as its input grows.', 'Summing 8 numbers needs one running total. Copying them needs 8 extra slots. A recursive call also takes stack space.'],
  'recursion-basics': ['Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.', 'For sum(3), compute 3 + sum(2), then 2 + sum(1), then 1 + sum(0). With sum(0) = 0, the answer is 6.'],
  'hashing-basics': ['Hashing maps a key to a storage location so a value can be found without scanning every entry.', 'A phone book can store name → number pairs. Two keys may choose the same bucket, so collisions must be handled.'],
  'greedy-basics': ['A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.', 'To select the most non-overlapping meetings, choose the meeting that ends earliest, then repeat. Greedy coin choice fails for coins [1, 3, 4] and amount 6: 4 + 1 + 1 loses to 3 + 3.'],
  'backtracking-basics': ['Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.', 'To place queens, try a safe square, continue to the next row, and remove the queen if later rows have no safe square.'],
  'dynamic-programming-basics': ['Dynamic programming saves answers to smaller subproblems so repeated work can be reused.', 'For Fibonacci, save F(0) = 0 and F(1) = 1. Then F(2) = 1, F(3) = 2, and F(4) = 3 reuse earlier answers.'],
  'factorial-recursion': ['Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.', '4! = 4 × 3 × 2 × 1 = 24. The base case is 0! = 1 (and 1! = 1).'],
  'fibonacci-recursion': ['Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.', 'F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3. F(4) and F(3) both need F(2).'],
  'tower-of-hanoi': ['Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.', 'Move 2 disks from A to C: move the small disk A → B, the large disk A → C, then the small disk B → C.'],
  'subsets': ['Subsets lists every selection of elements by deciding whether to include or exclude each element.', 'For [1, 2], the subsets are [], [1], [2], and [1, 2]. There are 2ⁿ subsets for n distinct elements.'],
  'permutations': ['Permutations lists arrangements of elements by trying each unused element in the next position.', 'For [1, 2, 3], both [1, 2, 3] and [2, 1, 3] are different arrangements. There are 3! = 6 arrangements.'],
  'combination-sum': ['Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.', 'With [2, 3] and target 7, [2, 2, 3] works. Keeping choices in a fixed order avoids reporting its rearrangements again.'],
  'generate-parentheses': ['Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.', 'With 2 pairs, (()) and ()() are valid. A prefix like )( is already invalid and can be rejected early.'],
  'n-queens': ['N-Queens places one queen per row so that no two queens share a column or diagonal.', 'On a 4 × 4 board, columns [1, 3, 0, 2] for rows [0, 1, 2, 3] form one valid placement, using zero-based positions.'],
  'rat-in-a-maze': ['A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.', 'In a grid, 1 can mean open and 0 blocked. If a branch reaches a dead end, undo that move and try another open neighbor.'],
  'sudoku-solver': ['A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.', 'If a cell already has 1 in its row, trying 1 is rejected before exploring the next cell.'],
  'word-search': ['Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.', 'For the word CAT, find C, then an adjacent A, then an adjacent T. A matching letter elsewhere on the board is not enough.'],
  'matrix-traversal': ['Matrix traversal visits cells using both a row index and a column index.', 'For [[1, 2], [3, 4]], row-by-row traversal visits 1 → 2 → 3 → 4; column-by-column traversal visits 1 → 3 → 2 → 4.'],
  'flood-fill': ['Flood Fill changes the connected region of cells that share the starting cell’s color.', 'Starting in one blue cell, recolor blue neighbors and their blue neighbors. A red cell blocks that region.'],
  'island-counting': ['Island Counting counts separate connected groups of land cells, marking a whole group before counting another.', 'With four-direction adjacency, [[1, 0], [0, 1]] has 2 islands because the land cells touch only diagonally.'],
  'rotate-matrix': ['Rotating a square matrix by 90 degrees moves each cell into a new row and column.', 'A clockwise rotation turns [[1, 2], [3, 4]] into [[3, 1], [4, 2]]. Transpose, then reverse each row.'],
  'spiral-matrix': ['Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.', 'For [[1, 2, 3], [4, 5, 6], [7, 8, 9]], visit 1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5.'],
  'prefix-sum-matrix': ['A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.', 'For [[1, 2], [3, 4]], the full rectangle totals 10. A subrectangle is found by subtracting the strips above and left, then adding back their overlap.'],
  'search-in-sorted-matrix': ['In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.', 'From the top-right cell, a value larger than the target means move left; a smaller value means move down. This relies on both rows and columns being sorted.'],
  'bit-basics': ['Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.', '6 is 110₂ and 3 is 011₂. Their AND is 010₂ = 2; OR is 111₂ = 7; XOR is 101₂ = 5.'],
  'count-set-bits': ['Counting set bits finds how many binary digits are 1 in an integer.', '13 = 1101₂ has 3 set bits. Repeatedly applying n & (n − 1) clears one set bit at a time.'],
  'bitmasking-subsets': ['A bitmask represents a selection: bit i says whether element i is included.', 'For [a, b, c], mask 101₂ selects a and c. Masks 000₂ through 111₂ cover all 8 subsets.'],
  'fast-power': ['Fast Power computes a power by repeatedly squaring the base and halving the exponent.', '2¹⁰ = (2⁵)² = 1024. When an exponent is odd, keep one extra factor before halving it.'],
  'modular-exponentiation': ['Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.', '3⁴ mod 5 = 81 mod 5 = 1. Reducing after every multiplication avoids building the full power.'],
  'gcd-euclidean': ['The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.', 'gcd(18, 12) → gcd(12, 6) → gcd(6, 0) = 6. Stop when the remainder is zero.'],
  'lcm': ['The least common multiple is the smallest positive number divisible by both input numbers.', 'lcm(6, 8) = 24. Use |(a / gcd(a, b)) × b|; if either input is zero, the LCM is zero.'],
  'modular-inverse': ['A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.', '3 has inverse 4 modulo 11 because 3 × 4 = 12 ≡ 1. An inverse exists only when gcd(a, m) = 1.'],
  'power-of-two': ['A positive power of two has exactly one set bit in its binary representation.', '8 = 1000₂ is a power of two; 10 = 1010₂ is not. Check n > 0 before testing (n & (n − 1)) === 0.'],
  'prime-checking': ['A prime number is an integer greater than 1 with no divisors other than 1 and itself.', 'To check 29, test divisors only through √29. If it had a larger factor, the paired factor would be smaller than √29.'],
  'sieve-of-eratosthenes': ['The sieve finds primes up to a limit by crossing out multiples of each discovered prime.', 'Up to 10, cross out multiples of 2 and 3. The remaining numbers greater than 1 are 2, 3, 5, and 7.'],
  'single-number': ['XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.', '[4, 1, 4] gives 4 XOR 1 XOR 4 = 1. This rule depends on the paired-occurrence assumption.'],
  'xor-tricks': ['XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.', 'a XOR a = 0 and a XOR 0 = a. Thus 5 XOR 2 XOR 5 = 2.'],
  'cpp-accumulate': ['std::accumulate combines a range with an initial value, usually to compute a total.', 'For [2, 3, 4] and initial value 10, accumulation returns 19. The initial value also determines the result type in C++.'],
  'cpp-binary-search': ['std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.', 'In sorted [1, 3, 3, 7], searching for 3 returns true; searching for 4 returns false. It does not return an index.'],
  'cpp-lower-bound': ['std::lower_bound finds the first position whose value is not less than the target in a sorted range.', 'In [1, 3, 3, 7], lower_bound(3) points to index 1. If no value qualifies, it returns the end iterator.'],
  'cpp-upper-bound': ['std::upper_bound finds the first position whose value is greater than the target in a sorted range.', 'In [1, 3, 3, 7], upper_bound(3) points to index 3, after both copies of 3.'],
  'cpp-sort': ['std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.', '[3, 1, 2] becomes [1, 2, 3] with the default ascending comparison. Use stable_sort when equal-key order must be preserved.'],
  'cpp-reverse': ['std::reverse reverses the order of elements inside a range.', '[1, 2, 3, 4] becomes [4, 3, 2, 1], swapping elements from opposite ends.'],
  'cpp-unique': ['std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.', '[1, 1, 2, 1] retains [1, 2, 1]. It does not remove non-adjacent duplicates or shrink a vector; use erase afterward.'],
  'cpp-next-permutation': ['std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.', '[1, 2, 3] becomes [1, 3, 2]. [3, 2, 1] wraps to [1, 2, 3] and the function returns false.'],
  'cpp-max-min-element': ['std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.', 'In [4, 1, 7], the minimum is at index 1 and maximum at index 2. An empty range returns the end iterator.'],
  'cpp-map-set': ['std::map stores ordered key–value pairs; std::set stores ordered unique keys.', 'A set built from [3, 1, 3] contains [1, 3]. A map can associate a name with a score. Lookup is logarithmic in the number of entries.'],
  'cpp-unordered-map-set': ['Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.', 'An unordered_set built from [3, 1, 3] has 2 keys. Lookup is constant time on average, but can be linear in the worst case.'],
  'cpp-priority-queue': ['std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.', 'Push 2, 7, and 4: top() is 7. After pop(), top() is 4. A min-heap comparison makes the smallest value come first.'],
};
const ds = {
'array-adt-binary-search':'Find a value in a sorted array by checking the middle and discarding an impossible half. | Searching for 7 in [1, 3, 5, 7, 9] checks 5, then 7; the answer is index 3.',
'array-adt-check-if-sorted':'Check adjacent values to determine whether an array is in non-decreasing order. | [1, 3, 3] is sorted; [1, 4, 2] fails at 4 > 2.',
'array-adt-creating-array-of-desired-size':'An array keeps a capacity for allocated slots and a length for slots currently holding values. | Capacity 5 and length 3 leaves room for 2 more values.',
'array-adt-deletion':'Delete an array element by shifting later values left and reducing the logical length. | Delete index 1 from [2, 4, 6]: move 6 left to get [2, 6].',
'array-adt-duplicate':'Find repeated array values by comparing entries or recording frequencies. | In [2, 4, 2, 4, 4], 2 occurs twice and 4 occurs three times.',
'array-adt-finding-missing-element':'Find gaps in an expected integer sequence by comparing the given values with that sequence. | In [1, 2, 4, 5], the missing value from 1 through 5 is 3.',
'array-adt-get-set-max-sum':'Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total. | For [2, 4, 6], get(1) is 4, the maximum is 6, and the total is 12.',
'array-adt-inserting-in-sorted-array':'Insert into a sorted array by shifting larger values right before placing the new value. | Insert 3 into [1, 4, 7] to obtain [1, 3, 4, 7].',
'array-adt-linear-search':'Linear search checks array slots one by one until a target matches. | Searching [8, 3, 6] for 3 returns index 1.',
'array-adt-linear-search-transposition':'Transposition moves a found item one slot toward the front to speed up some later searches. | Find 6 in [8, 3, 6] and swap it with 3 to get [8, 6, 3].',
'array-adt-max-and-min':'Find an array’s minimum and maximum by keeping the best values seen during a scan. | In [4, 1, 7], the minimum is 1 and maximum is 7.',
'array-adt-menu':'An array ADT wraps storage and operations behind a menu or interface. | Insert adds a value; delete removes one; display reads the active slots without changing them.',
'array-adt-merging-array':'Merge two sorted arrays by repeatedly taking the smaller front value. | [1, 4] and [2, 3] merge into [1, 2, 3, 4].',
'array-adt-negative-values':'Partition an array so negative and non-negative values occupy separate regions. | [3, −2, 1, −4] can become [−4, −2, 1, 3]; internal order need not be preserved.',
'array-adt-reverse-and-shift-of-an-array':'Reversal changes order; shifting moves values and may discard an end value, while rotation wraps it around. | [1, 2, 3] reversed is [3, 2, 1]; rotated left once is [2, 3, 1].',
'array-adt-set':'Set operations combine collections by membership: union, intersection, and difference. | For {1, 2} and {2, 3}, union is {1, 2, 3}, intersection is {2}, and the first set minus the second is {1}.',
'array-adt-sum-of-k':'Find pairs of array values that add up to a requested total. | With [1, 3, 5, 7] and total 8, pairs (1, 7) and (3, 5) work.',
'array-representation-d-array':'A multidimensional array addresses an element with one index per dimension. | In [[1, 2], [3, 4]], row 1 and column 0 identify 3, using zero-based indexes.',
'array-representation-increasing-array-size':'To grow fixed storage, allocate a larger block, copy existing elements, and replace the old block. | Three values in capacity 3 can be copied into capacity 6 before a fourth is appended.',
'array-representation-static-array-and-dynamic-array':'A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying. | A fixed block of 3 slots cannot hold a fourth item without changing its storage.',
'avl-ll-rotation':'An AVL left-left imbalance is repaired by rotating the unbalanced node right. | Insert 30, 20, 10: rotating right at 30 makes 20 the root with children 10 and 30.',
'binary-tree-creation':'Build a binary tree by linking each node to at most one left child and one right child. | Root 4 with children 2 and 6 has three nodes and two links.',
'binary-tree-level-order':'Level-order traversal visits a binary tree one depth at a time using a queue. | Root 4 with children 2 and 6 is visited as 4 → 2 → 6.',
'binary-tree-traversal':'Tree traversal chooses when to visit a node relative to its left and right children. | For root 4 with children 2 and 6, inorder is [2, 4, 6], preorder [4, 2, 6], and postorder [2, 6, 4].',
'bst-basics':'A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree. | To find 6 under root 4, follow the right link; searching for 2 follows the left.',
'circular-queue':'A circular queue reuses array slots by wrapping front and rear positions around the capacity. | With capacity 4, the position after index 3 is index 0: (3 + 1) mod 4.',
'essential-c-and-cpp-above-program-as-template-class':'A C++ class template reuses a class definition with different types. | Box<int> holds an integer and Box<double> holds a decimal value using the same template.',
'essential-c-and-cpp-array-as-parameter':'An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately. | A function receiving an array of 5 values also needs the length 5 to scan it safely.',
'essential-c-and-cpp-basic-array':'An array stores same-type elements in contiguous slots addressed by index. | For int values[3] = {2, 4, 6}, values[1] is 4; valid indexes are 0 through 2.',
'essential-c-and-cpp-functions':'A function groups a named computation, receives parameters, and may return a result. | area(3, 4) can multiply its two parameters and return 12.',
'essential-c-and-cpp-modular-with-structure-programming-style':'Modular programming separates operations into functions and groups related fields into a structure. | A Rectangle structure stores length and width; an area function reads both fields.',
'essential-c-and-cpp-monolithic-program':'A monolithic program keeps setup, computation, and output together in one function. | Reading rectangle dimensions, calculating area, and printing the answer can all live in main.',
'essential-c-and-cpp-oop-style':'Object-oriented programming groups data with operations in a class. | A Rectangle object stores dimensions and exposes an area() method.',
'essential-c-and-cpp-pointer':'A pointer stores a memory address; dereferencing it accesses the object at that address. | If p = &value, then *p refers to value. Check that the pointer is valid before using it.',
'essential-c-and-cpp-pointer-to-structure':'A pointer to a structure accesses a record through its address. | If p points to a Rectangle, p->length accesses the same field as (*p).length.',
'essential-c-and-cpp-rectangle-class-with-oop':'A rectangle class keeps dimensions and area-related behavior in one object. | Rectangle(3, 4).area() returns 12; changing width changes the area.',
'essential-c-and-cpp-reference':'A C++ reference is an alias for an existing object. | With int& alias = value, assigning alias = 7 changes value to 7 as well.',
'essential-c-and-cpp-structure':'A structure groups named fields into one record. | A Rectangle record with length 3 and width 4 keeps both measurements together.',
'essential-c-and-cpp-structure-as-parameter':'A structure can be passed by value, pointer, or reference, affecting whether a function sees a copy or the original. | Passing a Rectangle by value copies its fields; passing by reference can update the original.',
'heap-creation':'Build a heap so every parent has at least as much priority as its children. | In a max heap built from [2, 7, 4], the root is 7, but the rest of the array need not be fully sorted.',
'linked-list-cdoublell':'A circular doubly linked list has both previous and next links, and its ends link back together. | In a three-node ring, the last node’s next is the first and the first node’s previous is the last.',
'linked-list-circular-linkedlist':'A circular linked list connects its last node back to its first node. | A → B → C → A forms a ring; stop traversal when you return to the start.',
'linked-list-concatenate-and-merge-linked-list':'Concatenation joins lists end to end; sorted merging interleaves nodes by value. | [1, 4] and [2, 3] concatenate to [1, 4, 2, 3], but merge to [1, 2, 3, 4].',
'linked-list-count-and-sum':'Walk a linked list, counting nodes and accumulating their stored values. | For 2 → 4 → 6, the count is 3 and the sum is 12.',
'linked-list-deleting-from-circular-linked-list':'Delete from a circular list by reconnecting neighboring links while preserving the ring. | Removing B from A → B → C → A leaves A → C → A.',
'linked-list-deleting-in-linked-list':'Delete a list node by changing the link before it to skip that node. | Removing B from A → B → C leaves A → C; deleting the head also changes the start pointer.',
'linked-list-display-linked-list':'Display a list by following each next link from the head to the end. | For 2 → 4 → 6 → null, display 2, 4, 6 in that order.',
'linked-list-doubly-ll':'A doubly linked list gives each node both a next link and a previous link. | A ↔ B ↔ C can be traversed in either direction; insertion must repair both link directions.',
'linked-list-insert-circular-linked-list':'Insert into a circular list by linking a new node into the ring. | Insert B between A and C in A → C → A to get A → B → C → A.',
'linked-list-inserting-in-sorted-linked-list':'Find the gap where a new value belongs and reconnect the list around a new node. | Inserting 3 into 1 → 4 → 7 gives 1 → 3 → 4 → 7.',
'linked-list-insertion':'Insert a list node by updating links rather than shifting all later values. | Insert B between A and C: set B.next = C, then A.next = B.',
'linked-list-isloop':'Cycle detection checks whether following next links can return to an earlier node. | A slow pointer takes one step and a fast pointer two; meeting inside the list proves a cycle.',
'linked-list-linear-search':'Search a linked list by following next links and comparing each node value. | To find 6 in 2 → 4 → 6, inspect three nodes.',
'linked-list-linked-list-in-class':'A linked-list class owns the head pointer and exposes operations on the nodes. | Calling insert(4) can create and link a node without callers manipulating the head directly.',
'linked-list-max-linked-list':'Find the largest node value by comparing values while walking the list. | In 3 → 9 → 5, retain 3, replace it with 9, and keep 9 after checking 5.',
'linked-list-middlenode-and-intersection-of-two-ll':'Pointer techniques can locate a list’s middle or find where two lists share the same node. | A slow pointer reaches the middle when a fast pointer reaches the end. Intersection means the same node object, not merely equal values.',
'linked-list-recursively-display-linked-list':'Recursive display processes one list node and calls itself for the next node. | Printing before the call shows 1 → 2 → 3; printing after the call shows 3 → 2 → 1.',
'linked-list-remove-duplicate-data':'Remove duplicate nodes by reconnecting links around repeated values. | In sorted 1 → 1 → 2, skip the second 1 to retain 1 → 2; non-adjacent duplicates need a different strategy.',
'linked-list-reverse-linked-list':'Reverse a linked list by redirecting each next link toward the previous node. | A → B → C → null becomes C → B → A → null; retain the next node before changing a link.',
'linked-list-sorted-checking':'A list is non-decreasing when no node value is larger than its next node value. | 1 → 3 → 3 is sorted; 1 → 4 → 2 fails at the last link.',
'matrix-c-cpp-lower-triangular-matrix':'A lower triangular matrix stores meaningful values on or below the main diagonal. | In a 3 × 3 matrix, cells with row < column are zero; only 6 cells need storage.',
'matrix-diagonal-matrix':'A diagonal matrix has non-zero values only where row and column indexes are equal. | [[2, 0], [0, 5]] can be stored as [2, 5].',
'matrix-diagonal-matrix-with-c-cpp-class':'A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere. | get(0, 1) returns 0; get(1, 1) reads the second stored diagonal entry.',
'matrix-lower-triangular-matrix':'A lower triangular matrix has zeros above its main diagonal. | A 3 × 3 lower triangular matrix needs 3 × 4 / 2 = 6 stored entries instead of 9.',
'queue-array-enqueue-dequeue':'A queue adds at the rear and removes from the front, preserving arrival order. | Enqueue A, then B; the next dequeue returns A.',
'queue-using-linked-list':'A linked queue uses front and rear node pointers to add at one end and remove at the other. | A → B has front A and rear B; enqueue C changes the rear to C.',
'recursion-exponent':'Recursive exponentiation reduces an exponent toward a base case. | 2³ = 2 × 2² = 2 × 2 × 2 = 8; exponent 0 returns 1.',
'recursion-factorial':'Recursive factorial multiplies n by factorial(n − 1) until the base case. | factorial(4) = 4 × 3 × 2 × 1 = 24; factorial(0) = 1.',
'recursion-fibonacci':'Direct Fibonacci recursion adds the results of two smaller calls. | F(4) = F(3) + F(2) = 2 + 1 = 3. Repeated subproblems explain why memoization helps.',
'recursion-first-recursion-program':'A recursive function calls itself with a smaller input and stops at a base case. | count(3) can print 3, call count(2), then count(1), and stop at 0.',
'recursion-indirect-recursion':'Indirect recursion happens when functions call each other in a cycle. | A(3) calls B(2), which calls A(1); a shared progress rule must eventually stop the cycle.',
'recursion-ncr':'The binomial coefficient counts ways to choose r items from n without ordering them. | C(4, 2) = 6; the recurrence C(n, r) = C(n − 1, r − 1) + C(n − 1, r) splits choices by including or excluding one item.',
'recursion-nested-recursion':'Nested recursion uses the result of a recursive call as the input of another recursive call. | In f(f(n − 1)), evaluate the inner call first, then pass its result to the outer call.',
'recursion-static-variable-in-recursion':'A static variable is shared across calls, while an ordinary local variable belongs to one call frame. | If every recursive call increments a static counter, later calls see the accumulated count.',
'recursion-sum-of-first-n-natural-number':'Recursively sum the first n natural numbers by adding n to the sum through n − 1. | sum(4) = 4 + 3 + 2 + 1 = 10; sum(0) = 0.',
'recursion-taylor-series':'A Taylor polynomial approximates a function using a finite sequence of terms. | eˣ ≈ 1 + x + x²/2! + x³/3!; more terms generally improve the approximation near the expansion point.',
'recursion-taylor-series-using-horners-rule':'Horner-style evaluation nests a polynomial to reuse intermediate work. | 1 + x + x²/2 + x³/6 can be written 1 + x(1 + x/2(1 + x/3)).',
'recursion-toh':'Tower of Hanoi moves disks using a smaller transfer before and after moving the largest disk. | Two disks require 3 moves; n disks require 2ⁿ − 1 moves.',
'recursion-tree-recursion':'Tree recursion makes more than one recursive call from a call frame. | A function calling itself twice on n − 1 creates branching work instead of one chain.',
'sparse-matrix-addition':'Add sparse matrices by combining entries at matching row and column positions. | If one matrix has (0, 1, 3) and another (0, 1, 4), their sum stores (0, 1, 7).',
'sparse-matrix-and-polynimial-representation-polynomial-linked-list':'A polynomial linked list stores each term’s coefficient and exponent in a node. | 3x² + 5 can be represented by (3, 2) → (5, 0).',
'sparse-matrix-and-polynimial-representation-sparse-matrix':'A sparse matrix stores non-zero entries with their row and column positions. | A 100 × 100 matrix with 3 non-zero values can store 3 triples instead of 10,000 values.',
'sparse-matrix-creation-and-display-of-sparse-matrix':'Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero. | Storing (0, 1, 5) in a 2 × 2 matrix displays [[0, 5], [0, 0]].',
'sparse-matrix-polynomial-representation':'A polynomial can be represented by coefficient–exponent pairs instead of all possible powers. | 3x⁴ + 2x + 1 uses (3, 4), (2, 1), and (1, 0).',
'sparse-matrix-sparse-matrix-using-c-cpp':'A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples. | A record (1, 2, 7) means row 1, column 2 contains 7; unspecified cells contain zero.',
'stack-infix-to-postfix':'Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence. | a + b * c becomes a b c * + because multiplication happens before addition.',
'stack-infix-to-postfix-2':'Infix-to-postfix conversion places operators after their operands using a stack. | (a + b) * c becomes a b + c *; parentheses control when operators are emitted.',
'stack-parenthesis-is-balanced':'A stack checks brackets by remembering unclosed opening brackets. | (()) is balanced; (() leaves an opening bracket unmatched.',
'stack-parenthesis-is-balanced-extended':'Check several bracket types by matching each closing bracket with the most recent opening bracket. | {[()]} is balanced; ([)] has the right counts but the wrong nesting.',
'stack-postfix-eval':'Evaluate postfix expressions by pushing operands and applying operators to the most recent operands. | 2 3 4 * + evaluates to 2 + (3 × 4) = 14; operand order matters for subtraction and division.',
'stack-stack-using-ll':'A linked stack pushes and pops at the head of a linked list. | Push A, then B: the head is B and the next pop returns B.',
'stack-using-array':'An array stack uses a top index to track the most recently pushed item. | Push A, then B; popping returns B and decreases the top index.',
'string-anagram':'Two strings are anagrams when they have the same character frequencies. | listen and silent are anagrams; repeated letters must also occur equally often.',
'string-changing-case':'Case conversion changes alphabetic characters between uppercase and lowercase. | AbC becomes abc in lowercase and ABC in uppercase. ASCII arithmetic does not cover every Unicode letter.',
'string-comparing-string':'Lexicographic comparison checks characters in order until the first difference. | cat sorts before dog; car sorts before cart because the shared prefix ends first.',
'string-duplicates':'Find duplicate characters by tracking how often each character appears. | In banana, a occurs 3 times and n occurs twice.',
'string-duplicates-with-bitwise-operator':'A bitset can record which characters from a limited alphabet have already appeared. | For lowercase a–z, one bit per letter fits 26 presence flags; seeing an already-set bit identifies a repeat.',
'string-permutation':'String permutations list arrangements of the characters by choosing the next unused character. | For ab, the arrangements are ab and ba. Repeated letters can produce duplicate arrangements.',
'string-permutation-2':'A second permutation strategy swaps characters into each position and then undoes each swap. | For abc, fix a first and arrange bc as bc or cb, then try b and c in the first position.',
'string-reverse-string':'String reversal places the final character first and the first character last. | algorithm reversed is mhtirogla. Unicode combining characters may require grapheme-aware handling.',
'string-string':'A string is an ordered sequence of characters; C strings use a terminating null character. | The C string cat needs four slots: c, a, t, and \\0.',
'string-valid':'String validation checks that every character satisfies a stated rule. | Under an ASCII letters-and-digits rule, abc123 is valid while abc! is rejected.',
'string-vowels-no-of-words':'Scan text to count vowel characters and transitions between words and separators. | With whitespace-separated words, a red apple has 3 words and 4 vowels.',
'trees-height-and-count':'Tree height measures the longest root-to-leaf route; node count totals the nodes. | A root with two leaf children has 3 nodes and height 1 when height counts edges, or 2 when it counts nodes.',
'trees-node':'A binary-tree node stores a value and links to its left and right children. | A leaf has no children; an empty tree has no root node.',
'trees-queue':'A queue remembers tree nodes waiting to be visited in level order. | After processing root 4, enqueue children 2 and 6 so they are visited before their children.',
'trees-stack':'A stack remembers pending tree work for a depth-first traversal. | To visit the left child first using a stack, push the right child before the left child.',
};
for (const [id, text] of Object.entries(ds)) descriptions['ds-' + id] = text.split(' | ');

const families = {
 'array-flow': {name:'Arrays and indexes', idea:'An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.', terms:[['Index','A position in a sequence, usually starting at 0.'],['Boundary','The first or last position still being considered.'],['Invariant','A rule that remains true after each step.']], mistake:'Keep positions and values separate. Check whether the right boundary is included before changing an index.'},
 'tree-operation': {name:'Trees and links',idea:'A tree branches from a root. A child is one level below its parent; a leaf has no children.',terms:[['Root','The starting node of a tree.'],['Subtree','A node together with all of its descendants.'],['Height','The longest downward path; check whether the code counts nodes or edges.']],mistake:'Do not assume a tree is a binary search tree or balanced unless the problem guarantees it.'},
 'graph-flow': {name:'Graphs and connections',idea:'A graph contains vertices (places) and edges (connections). Arrows mean a connection can be followed only in that direction.',terms:[['Vertex','One point in a graph; also called a node.'],['Edge','A connection between vertices.'],['Visited','A record that a vertex has already been discovered.']],mistake:'Mark discovered vertices to avoid repeating work. Check directedness and whether every component must be visited.'},
 'edge-relaxation': {name:'Weighted graphs',idea:'An edge weight is the cost of a connection. A shortest-path algorithm keeps the best cost found so far.',terms:[['Weight','The cost attached to an edge.'],['Relaxation','Replace a distance if a cheaper route is found.'],['Infinity','No route to that vertex has been found yet.']],mistake:'Check the algorithm’s assumptions about negative weights and negative cycles before using a shortest-path result.'},
 'linked-list-flow': {name:'Linked nodes',idea:'A linked list follows arrows from node to node. Unlike an array, its nodes do not need neighboring memory slots.',terms:[['Head','The first node in a list.'],['Next','The link leading to another node.'],['Null','No object or next node is present.']],mistake:'Save the next link before changing it. Handle an empty list and a change to the head; circular lists need a different stop rule.'},
 'matrix-flow': {name:'Rows and columns',idea:'A matrix is a grid. Identify a cell by its row first, then its column.',terms:[['Row','A horizontal sequence of cells.'],['Column','A vertical sequence of cells.'],['Neighbor','A cell reachable under the chosen adjacency rule.']],mistake:'Check row and column bounds separately. State whether diagonal neighbors are allowed.'},
 'stack-queue-flow': {name:'Ordered waiting',idea:'A stack removes the newest item first. A queue removes the oldest item first. A deque allows both ends.',terms:[['Push / enqueue','Add an item to the structure.'],['Pop / dequeue','Remove an item according to the structure’s ordering rule.'],['Peek','Read the next item without removing it.']],mistake:'Check empty and full states, and identify which end an operation changes.'},
 'recursion-flow': {name:'Recursive calls',idea:'Each call remembers its own unfinished work. A base case returns directly; the other calls resume as smaller calls finish.',terms:[['Base case','An input that returns without another recursive call.'],['Call frame','The parameters and local work belonging to one call.'],['Backtracking','Undoing a choice to explore another branch; not every recursion needs it.']],mistake:'Every recursive path must move toward a base case. Count call-stack memory as well as any explicit arrays.'},
 'string-flow': {name:'Characters and positions',idea:'A string is an ordered sequence. A substring occupies consecutive positions; a subsequence can skip positions.',terms:[['Prefix','Characters at the beginning of a string.'],['Substring','A consecutive section of a string.'],['Frequency','How often a character occurs.']],mistake:'Check empty strings and repeated characters. State whether case, spaces, and Unicode characters affect matching.'},
 'state-flow': {name:'State and rules',idea:'State is the information a computation remembers between steps. A transition changes that information; a stop rule ends the computation.',terms:[['State','Values remembered at the current step.'],['Transition','The update that moves to the next state.'],['Base case','A small or finished situation with a known answer.']],mistake:'Check the allowed input and stopping rule before running the routine. A picture of state alone is not a proof of correctness.'},
};
const findData = dir => readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?findData(dir+'/'+e.name):e.name==='data.js'?[dir+'/'+e.name]:[]);
const topicCosts = {
 'time-complexity-basics':['The growth models compare O(1), O(log n), O(n), O(n log n), and O(n²). The demo computes counts; it does not perform those loops.','The count-reporting demo uses O(1) extra state.'],
 'space-complexity-basics':['O(n) to copy n values in the demo.','O(n) for the copy, including the returned storage.'],
 'recursion-basics':['This subset-enumeration demo takes O(n × 2ⁿ) work, including copied paths; recursion alone does not determine complexity.','O(n) call depth plus O(n × 2ⁿ) stored subset output.'],
 'hashing-basics':['Lookup is O(1) on average under a suitable hash distribution, O(n) in the worst case.','O(n) for n stored entries.'],
 'greedy-basics':['This sort-then-select demo takes O(n log n) work under a standard comparison-sort model. Other greedy problems have different costs.','O(n) for the sorted copy and selected output.'],
 'backtracking-basics':['O(n × 2ⁿ) for this demo, which enumerates and copies all subsets.','O(n) active path and call depth, plus O(n × 2ⁿ) stored output.'],
 'dynamic-programming-basics':['O(n) for this cumulative-total demo. In general: number of distinct states × work per state.','O(n) for this demo’s stored totals. Other DP routines store a different number of states.'],
 'factorial-recursion':['O(n) for n recursive multiplications in this number-based demo.','O(n) active call frames. JavaScript Number loses exact integer precision for sufficiently large factorials.'],
 'fibonacci-recursion':['O(2ⁿ) as a simple upper bound for direct recursion without saved results.','O(n) maximum recursion depth; the two branches do not all stay active together.'],
 'tower-of-hanoi':['Θ(2ⁿ) moves; exactly 2ⁿ − 1 for n disks.','O(n) call depth; storing all moves also needs Θ(2ⁿ) output space.'],
 'subsets':['O(n × 2ⁿ) when each subset is copied into the output.','O(n) recursion state, plus O(n × 2ⁿ) stored output.'],
 'permutations':['O(n × n!) when n-element arrangements are copied into the output.','O(n) recursion/choice state, plus O(n × n!) stored output.'],
 'generate-parentheses':['Proportional to valid outputs and the work of constructing each length-2n string.','O(n) active path; storing all valid strings costs additional output space.'],
 'matrix-traversal':['O(R × C) for R rows and C columns.','O(1) traversal state; collecting all cells uses O(R × C) output space.'],
 'flood-fill':['O(R × C) in the worst case for a rectangular R-by-C grid.','O(R × C) for a queue, visited set, or recursion stack in the worst case.'],
 'island-counting':['O(R × C) for a rectangular grid.','O(R × C) for traversal state in the worst case.'],
 'rotate-matrix':['O(n²) to rotate an n-by-n matrix.','O(1) auxiliary state for in-place rotation, or O(n²) for a separate output matrix.'],
 'spiral-matrix':['O(R × C) to visit each cell once.','O(1) boundary state, plus O(R × C) if storing the traversal output.'],
 'prefix-sum-matrix':['O(R × C) preprocessing, then O(1) per rectangle-sum query.','O(R × C) prefix table.'],
 'search-in-sorted-matrix':['O(R + C) for a corner walk with both rows and columns sorted.','O(1) auxiliary state.'],
 'bit-basics':['O(1) for each operation on the fixed-width integers used by JavaScript bitwise operators.','O(1). JavaScript bitwise operators coerce Number values to 32-bit integers.'],
 'count-set-bits':['O(b) where b is the number of set bits when clearing one set bit per iteration.','O(1) for fixed-width integers.'],
 'bitmasking-subsets':['O(n × 2ⁿ) to inspect n flags for all masks and materialize the subsets.','O(n) for one subset, plus the stored output.'],
 'fast-power':['O(log e) multiplications for positive integer exponent e, ignoring growth of numeric precision.','O(1) in an iterative version; O(log e) call frames in a recursive version.'],
 'modular-exponentiation':['O(log e) modular multiplications for exponent e, treating arithmetic as constant cost.','O(1) in an iterative version. Large exact inputs require appropriate integer arithmetic.'],
 'gcd-euclidean':['O(log min(|a|, |b|)) remainder steps for positive inputs, treating arithmetic as constant cost.','O(1) in an iterative version.'],
 'lcm':['Dominated by the GCD calculation.','O(1) in an iterative version.'],
 'modular-inverse':['O(log m) arithmetic steps with extended Euclid; other implementations depend on their exponentiation method.','O(1) iterative state or logarithmic recursion depth. The inverse exists only for coprime inputs.'],
 'power-of-two':['O(1) for a fixed-width bit test.','O(1). Require n > 0 and observe the integer width of the implementation.'],
 'prime-checking':['O(√n) trial divisions in the basic method.','O(1) auxiliary state.'],
 'sieve-of-eratosthenes':['O(n log log n) for the standard sieve through n.','O(n) primality flags.'],
 'single-number':['O(n) for one XOR scan when all other values occur exactly twice.','O(1) auxiliary state for fixed-width integers.'],
 'xor-tricks':['O(1) per fixed-width XOR, or O(n) for a scan of n values.','O(1) scan state.'],
 'cpp-accumulate':['O(n) applications of the combining operation.','O(1) auxiliary state for numeric addition.'],
 'cpp-binary-search':['O(log n) comparisons; iterator movement can be linear for non-random-access iterators.','O(1) auxiliary state. The range must satisfy the ordering/partition requirements.'],
 'cpp-lower-bound':['O(log n) comparisons; iterator movement can be linear for non-random-access iterators.','O(1) auxiliary state with an iterative implementation.'],
 'cpp-upper-bound':['O(log n) comparisons; iterator movement can be linear for non-random-access iterators.','O(1) auxiliary state with an iterative implementation.'],
 'cpp-sort':['O(n log n) comparisons for std::sort.','Implementation dependent; the JavaScript companion is not a measurement of C++ library storage.'],
 'cpp-reverse':['O(n) work (approximately n/2 swaps).','O(1) auxiliary state.'],
 'cpp-unique':['O(n) comparisons for a range of n elements.','O(1) auxiliary state; the container still needs erase to shrink.'],
 'cpp-next-permutation':['O(n) work in the worst case.','O(1) auxiliary state.'],
 'cpp-max-min-element':['O(n) comparisons to scan the range.','O(1) auxiliary state.'],
 'cpp-map-set':['O(log n) lookup, insertion, or removal in ordered associative containers.','O(n) stored entries.'],
 'cpp-unordered-map-set':['O(1) average lookup/insertion; O(n) worst case for one operation.','O(n) stored entries and buckets.'],
 'cpp-priority-queue':['O(1) top access; O(log n) push or pop.','O(n) stored elements.'],
};
families.dp={name:'Saved subproblems',idea:'A dynamic-programming state names a smaller question. A recurrence explains how its answer uses answers you already know.',terms:[['State','One precisely defined subproblem.'],['Recurrence','A rule for computing a state from smaller states.'],['Base case','A known answer that starts the table or recursion.']],mistake:'Define what each table entry means before filling it. Check base cases, evaluation order, and whether a choice can be reused.'};
families.bits={name:'Binary digits',idea:'Each binary position represents a power of two. A mask uses those positions as on/off flags.',terms:[['Bit','One binary digit, either 0 or 1.'],['Mask','Bits used to select, record, or test positions.'],['XOR','An operation that gives 1 where two input bits differ.']],mistake:'JavaScript bitwise operators on Number use 32-bit integers. Check non-negative input assumptions and use suitable integer arithmetic for larger values.'};
families.number={name:'Arithmetic structure',idea:'Arithmetic properties can reduce a search: factors come in pairs, remainders shrink GCD problems, and squaring reduces exponent work.',terms:[['Remainder','What remains after integer division.'],['Modulo','Keeping a value’s remainder under a chosen modulus.'],['Divisor','An integer that divides another integer exactly.']],mistake:'Handle zero, one, negative values, and invalid domains explicitly. Large Number calculations can lose exact integer precision.'};
families.cpp={name:'Storage and ownership',idea:'C/C++ separates a value from the memory that stores it. Pointers and references explain how a function can access an existing object.',terms:[['Pointer','A value representing a memory address.'],['Reference','A C++ alias for an existing object.'],['Lifetime','The interval during which an object exists and may be accessed.']],mistake:'Do not use a pointer after its object’s lifetime ends. Passing by value copies an object; passing by pointer or reference can access the original.'};
function parameterPurpose(name,page) {
 const key=name.replace(/=.*/, '').trim().toLowerCase();
 const meanings={array:'The values to inspect. Keeping them as a parameter lets the same function work on different arrays.',values:'The collection to process. Its length tells the routine how many input items are available.',numbers:'The numeric values used by the computation.',target:'The value or total the operation is trying to locate or reach.',matrix:'The input grid, addressed by row and column.',grid:'The cells and their values; the routine decides which neighbors to follow.',text:'The characters to inspect or transform.',pattern:'The character sequence to look for within the text.',mod:'The modulus; reducing by it keeps only the remainder needed by modular arithmetic.',capacity:'The allowed capacity, used to decide whether a choice fits.',root:'The starting tree node; following child links reaches smaller subtrees.',graph:'The graph’s connections; the routine uses them to discover neighboring vertices.',start:'The vertex or position where exploration begins.',value:'The number to compute with; recursive routines pass a smaller value to the next call.',choices:'The available decisions to try when constructing a path.',n:'The input size or numeric limit; check the function signature and sample to see its role here.'};
 return meanings[key] || 'An input to the computation. Compare its position in the function signature with the corresponding sample argument.';
}
function localPurpose(name,source) {
 const declaration=source.split('\n').find(line=>new RegExp('(?:const|let)\\s+'+name+'\\s*=').test(line))||'';
 if(/Array\.isArray/.test(declaration))return 'Chooses the provided array or a fallback sample so the following collection operations have an array to read.';
 if(name==='inputSize')return 'Keeps the number of input items so growth formulas depend on input size rather than the values themselves.';
 if(/\.reduce\(/.test(declaration))return 'Combines input items into one accumulated answer, so the result can be returned or reused.';
 if(/\.length/.test(declaration))return 'Remembers how many items are present; this supports bounds, size reporting, or the stopping rule.';
 if(/new Map|new Set/.test(declaration))return 'Records keys or membership so later steps can look them up without scanning the original collection again.';
 if(/\.sort\(/.test(declaration))return 'Holds ordered values so later comparisons or selections can rely on their order.';
 if(/\[\.\.\./.test(declaration))return 'Holds a separate copy of the values so working changes do not overwrite the caller’s array.';
 if(name==='path')return 'Remembers the current partial choice sequence; backtracking restores it before trying a sibling branch.';
 if(name==='result' || name==='state')return 'Stores completed answers or computed states so they can be returned and, where needed, reused.';
 if(name==='low' || name==='high')return 'Marks one end of the candidate range. Changing a boundary removes positions that no longer need to be considered.';
 if(name==='mid')return 'Chooses an interior position from the current boundaries so a comparison can reduce the remaining range.';
 if(name==='total' || name==='running')return 'Remembers the accumulated total instead of recomputing it from all earlier items.';
 if(name==='counts')return 'Remembers a frequency for each key, allowing another occurrence to update an existing count.';
 if(/=\s*\{/.test(declaration))return 'Groups named values and relationships into a record that the companion can inspect and report.';
 if(/=\s*\[/.test(declaration))return 'Keeps a sequence of sample or working values for the following operations.';
 return 'Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations.';
}
const report=[];
for (const file of findData('src/algorithms')) {
 const page = JSON.parse(readFileSync(file,'utf8').match(/export const algorithmPage = ([\s\S]*);\s*$/)[1]);
 const custom=descriptions[page.id];
 const family = page.category === 'Dynamic Programming' || page.id==='dynamic-programming-basics' ? families.dp
  : page.id.includes('essential-c-and-cpp') ? families.cpp
  : page.category === 'Number Theory and Bit Manipulation' ? (/bit|xor|single-number|power-of-two/.test(page.id)?families.bits:families.number)
  : page.id.includes('recursion') || page.category === 'Foundations' && page.id.includes('backtracking')
  ? families['recursion-flow'] : page.id.includes('polynomial') ? families['state-flow'] : families[page.animation?.type] || families['state-flow'];
 const summary=custom?.[0] || page.problem;
 if (!summary || /solves a .*problem by maintaining|explains the .*state model|taught here|technique focused/.test(summary)) throw Error('Missing concrete description: '+page.id);
 page.visualizerCaption = `Explore ${page.title} through a sample teaching model, then compare it with the runnable result.`;
 page.meaning=summary;
 page.relatedLinks=(page.relatedLinks||[]).map(link=>link.id==='array-patterns'?{id:'linear-search',title:'Linear Search',label:'Start with indexed array values'}:link).filter((link,i,links)=>links.findIndex(other=>other.id===link.id)===i);
 if (custom) {
  page.problem=summary;page.concept=summary;
  page.logicSummary=summary;page.transitionSummary=custom[1];page.codeInsight=summary;
  page.realLifeExample=custom[1];page.whenToUse=summary;
  page.memoryTrick=custom[0];
  page.logicSteps=[{title:'Identify what the operation means',text:summary},{title:'Work through a small case',text:custom[1]},{title:'Check the boundary cases',text:family.mistake}];
  page.visualizerCaption=page.originalCodePath?'Inspect a representation of the structure, then compare it with the C/C++ reference.':'Follow the teaching model, then run the JavaScript sample to check its result.';
 }
 if(topicCosts[page.id]) page.complexity={time:topicCosts[page.id][0],space:topicCosts[page.id][1]};
 const source=readFileSync(resolve(page.codePath),'utf8');
 if(custom) {
  const params=source.match(/export function\s+\w+\(([^)]*)\)/)?.[1].split(',').map(p=>p.trim()).filter(Boolean)||[];
  const locals=[...new Set([...source.matchAll(/(?:const|let)\s+(\w+)\s*=/g)].map(m=>m[1]))].slice(0,6);
  page.dryRun=[
   {label:'Topic',title:'Understand the operation',note:summary,activeLine:Math.max(1,source.split('\n').findIndex(l=>/export function/.test(l))+1),codeInsight:summary},
   {label:'Example',title:'Reason through the example',note:custom[1],activeLine:Math.max(1,source.split('\n').findIndex(l=>/return /.test(l))+1),codeInsight:summary},
  ];
  page.variables=[...params.map(name=>({name,purpose:parameterPurpose(name,page)})),...locals.map(name=>({name,purpose:localPurpose(name,source)}))];
  if(!page.variables.length) page.variables=[{name:'return',purpose:'The function returns a value or snapshot. Open the JavaScript source to inspect the fixed sample.'}];
 }
 let result, sampleError='';
 try {
  const name=source.match(/export function\s+(\w+)/)?.[1];
  const context=vm.createContext({sampleArgs:page.runnerInput||[],console:{log(){}}});
  result=new vm.Script(source.replace(/export /g,'')+'\n'+name+'(...sampleArgs)').runInContext(context,{timeout:1000});
  result=JSON.parse(JSON.stringify(result) ?? 'null');
 } catch(e) {sampleError=e.message;}
 page.learningGuide={
  mentalModel:family.idea,
  family:family.name,
  example:custom?.[1] || page.logicSteps.map(s=>`${s.title}: ${s.text}`).join(' '),
  sampleInput:page.runnerInput || [],
  ...(sampleError?{}:{sampleResult:result}),
  sampleScope:page.id==='recursion-basics'?'This JavaScript sample lists subsets with include/exclude recursive branches. The sum example above introduces recursion with a simpler call chain.'
   :page.id==='dynamic-programming-basics'?'This JavaScript sample saves cumulative totals. The Fibonacci example above illustrates another way to reuse earlier answers.'
   :page.id==='greedy-basics'?'This JavaScript sample sorts numbers and chooses values within a capacity. Its behavior is meaningful for non-negative values; the meeting and coin examples above illustrate why the optimization goal and assumptions matter.'
   :page.originalCodePath?'This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.':'This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.',
  terms:family.terms,
  pitfall:family.mistake,
  checkpoint:`Explain this in your own words: ${summary}`,
 };
 if (/Which state|state choice|algorithm-specific|borrowed|own state|state and transition/i.test(JSON.stringify(page.quiz))) {
  const distractorA = page.animation?.type==='recursion-flow'?'Every recursive function must try every possible arrangement and undo every call.':'The position of a value is always identical to the value stored there.';
  const distractorB = page.animation?.type==='matrix-flow'?'All grid problems allow diagonal movement without checking bounds.':'The method works for every input, even when its required ordering or structure is absent.';
  const correctIndex=report.length % 3;
  const answers=[distractorA,distractorB];answers.splice(correctIndex,0,summary);
  page.quiz={question:`Which explanation best describes ${page.title}?`,options:answers.map((text,i)=>({key:'ABC'[i],text,correct:i===correctIndex})),correctText:`Correct. ${summary}`,incorrectText:`Try again. ${summary} Compare the small example in the lesson with your choice.`};
 }
 writeFileSync(file,readFileSync(file,'utf8').split('export const algorithmPage = ')[0]+'export const algorithmPage = '+JSON.stringify(page,null,2)+';\n');
 report.push({id:page.id,route:page.route,file,family:page.animation?.type,sampleError});
}
// The old English locale duplicated outdated lesson metadata. Keep data.js as
// the English source of truth; retain existing translations and correct their
// backtracking complexity formulas without inventing translated prose.
const englishPath='src/i18n/en.json';
const english=JSON.parse(readFileSync(englishPath,'utf8'));
english.algorithmPages={};
writeFileSync(englishPath,JSON.stringify(english,null,2)+'\n');
for(const file of readdirSync('src/i18n').filter(f=>f.endsWith('.json')&&f!=='en.json')) {
 const localePath='src/i18n/'+file;
 const locale=JSON.parse(readFileSync(localePath,'utf8'));
 if(locale.algorithmPages?.['backtracking-basics']) {
  locale.algorithmPages['backtracking-basics'].complexity={time:'O(n × 2ⁿ)',space:'O(n) + O(n × 2ⁿ)'};
  writeFileSync(localePath,JSON.stringify(locale,null,2)+'\n');
 }
}
writeFileSync('docs/learning-page-inventory.json' ,JSON.stringify(report,null,2)+'\n');
console.log(`Enriched ${report.length} pages; sample failures: ${report.filter(p=>p.sampleError).length}`);
