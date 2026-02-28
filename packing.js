function addItem() {
    const input = document.getElementById("itemInput");
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Please enter an item!");
        return;
    }

    // create list item
    const li = document.createElement("li");
    li.textContent = itemText;

    // add remove feature
    li.onclick = function () {
        li.remove();
    };

    // add to list
    document.getElementById("packingList").appendChild(li);

    // clear input
    input.value = "";
}