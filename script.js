//your code here!
document.addEventListener('DOMContentLoaded', () => {
  const infiList = document.getElementById('infi-list');

  // Function to add list items
  const addListItems = (numItems) => {
    const currentItemCount = infiList.children.length;
    for (let i = 0; i < numItems; i++) {
      const li = document.createElement('li');
      li.textContent = `List Item ${currentItemCount + i + 1}`;
      infiList.appendChild(li);
    }
  };

  // Add initial 10 items
  addListItems(10);

  // Function to check if user is near the bottom of the list
  const isNearBottom = () => {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
  };

  // Event listener for scroll
  window.addEventListener('scroll', () => {
    if (isNearBottom()) {
      addListItems(2);
    }
  });
});

