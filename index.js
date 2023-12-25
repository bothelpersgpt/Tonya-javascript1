// player.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to check and rename accounts with the word "john"
    function checkAndRenameAccounts() {
        var profileSection = document.getElementById("profileSection");
        var usernameDiv = profileSection.querySelector(".username");
        var bioTextarea = profileSection.querySelector(".bio-textarea");

        if (usernameDiv) {
            var currentUsername = usernameDiv.innerHTML.replace("Username: ", "").trim();

            // Check if the username contains the word "john"
            if (currentUsername.toLowerCase().includes("john")) {
                // Rename the account to "Account Deleted"
                var editedUsername = "Account Deleted";
                usernameDiv.innerHTML = "Username: " + editedUsername;

                // Block the bio and set it to "Account Deleted"
                if (bioTextarea) {
                    bioTextarea.value = "Account Deleted From the User-aim site we know that you're were hacking the site  causing the username admin to be account Deleted you been Deleted if it happen to our site you may get IP-Banned";
                    bioTextarea.readOnly = true;
                }
            }
        }
    }

    // Call the function when the page is loaded
    checkAndRenameAccounts();
});
