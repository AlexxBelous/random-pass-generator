import './main.scss'



// 1. Get elements from the page

// * Find the password generation button.
// * Find the input field.
// * Find the copy icon.
// * Find the alert container.








// 2. Create the createPassword() function

// * Create a string containing all allowed characters:
//   0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ

// * Set the password length to 14 characters.

// * Create an empty string for the password.

// * Start a loop that runs 14 times.

// * On each iteration:
//   * generate a random number between 0 and 1;
//   * multiply it by the length of the characters string;
//   * get an integer index;
//   * get the character at that index;
//   * add the character to the password.

// * Put the generated password into the input field.

// * Change the alert container text to:
//   password + " copied!".








// 3. Create the copyPassword() function

// * Select the text inside the input field.

// * Set the selection range
//   from the beginning to the end of the text.

// * Copy the input value
//   to the clipboard.








// 4. Handle the button click

// * When the button is clicked, call:
//   createPassword()







// 5. Handle the copy icon click

// * When the icon is clicked, call:
//   copyPassword()

// * Check if there is a password in the input field.

// * If there is a password:
//   * add the "active" CSS class to the alert container;
//   * after 2 seconds, remove the "active" CSS class.