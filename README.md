# Firebase Data Race Condition

This repository demonstrates a common yet subtle bug in Firebase data handling: a race condition during data updates. The bug arises when attempting to update data based on a previously fetched snapshot, without considering concurrent modifications.

## Bug Description
The `updateUser` function attempts to update user data by first reading the existing data, merging it with new data, and then updating the Firebase entry. However, another client or function could modify the data in between the read and update operations, resulting in data loss or unexpected values.

## Solution
The solution involves using Firebase's transaction functionality to ensure atomic updates.  This guarantees that only the latest data is used in the update process.

## Usage
Clone the repository and run the provided JavaScript files. The `bug.js` file showcases the problematic implementation, while `bugSolution.js` demonstrates the correct approach using transactions.