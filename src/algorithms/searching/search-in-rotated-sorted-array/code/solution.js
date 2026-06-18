// SPECIFIC ALGORITHM SOLUTION
// Search in Rotated Sorted Array
// Route: /algorithms/searching/search-in-rotated-sorted-array

export function searchInRotatedSortedArray(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) return mid;
    if (array[low] <= array[mid]) {
      if (array[low] <= target && target < array[mid]) high = mid - 1;
      else low = mid + 1;
    } else if (array[mid] < target && target <= array[high]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
