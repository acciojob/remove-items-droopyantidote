document.addEventListener("DOMContentLoaded", function() {
    // Get references to the select element and the button
    var colorSelect = document.getElementById("colorSelect");
    var removeButton = document.querySelector("input[type='button']");

    // Add event listener to the button
    removeButton.addEventListener("click", function() {
        // Get the selected option
        var selectedOption = colorSelect.options[colorSelect.selectedIndex];
        
        // Check if any option is selected
        if (selectedOption) {
            // Remove the selected option from the dropdown
            colorSelect.removeChild(selectedOption);
        }
    });
});
