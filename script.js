document.getElementById("itemForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from refreshing page

  const input = document.getElementById("itemInput");
  const item = input.value.trim();

  if (item) {
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("itemList").appendChild(li);
    input.value = ""; // Clear input
  }
});
