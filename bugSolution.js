// Function to update user data in Firebase using transactions
async function updateUser(userId, newData) {
  const userRef = db.ref(`users/${userId}`);

  // Using transactions for atomic updates
  await userRef.transaction(currentData => {
    if (currentData) {
      return { ...currentData, ...newData };
    } else {
      return newData;
    } 
  });
}

// Alternative - if you want to know the result of the transaction
async function updateUser(userId, newData) {
    const userRef = db.ref(`users/${userId}`);
    return userRef.transaction(currentData => {
        if (currentData) {
            return { ...currentData, ...newData };
        } else {
            return newData;
        }
    });
}

// Example usage:
updateUser('user123', { name: 'New Name', age: 30 });