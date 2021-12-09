/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Go thru array and see if what I see now, is something I've seen before.
    // If item is never seen before, put it memory 
    // If item is seen before, return true.
// Create a memory (hashmap) to store the values I've seen before.
var containsDuplicate = function(nums) {
    
    let memory = {};

    for (let i=0; i<nums.length; i++) {
        if (memory[nums[i]] === undefined) {
            memory[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;

};