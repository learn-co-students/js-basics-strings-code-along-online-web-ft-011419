// Write your code in this file!

const currentUser = 'Grace Hopper';
// const currentUser = "Grace Hopper"

const welcomeMessage =  'Welcome to Flatbook, ' + currentUser + '!';
// const welcomeMessage = {string} + currentUser + !

const excitedWelcomeMessage = welcomeMessage.toUpperCase() + currentUser + "!";
// const excitedWelcomeMessage = welcomeMessage .toUpperCase + currentUser + !
// WELCOME TO FLATBOOK, currentUser !

const shortGreeting = 'Welcome, ' + currentUser.slice(0, 1) + '!';
// const shortGreeting = string + first initial of currentUser + !
// Welcome, G!