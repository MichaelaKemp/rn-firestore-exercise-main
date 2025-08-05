# React Native & Firebase Firestore Exercise

## Setup Instructions
1. Clone/Fork this GitHub repository and create a new branch called _<YourName>-db_

2. Install all the required dependencies:
   ```bash
     npm install
   ```

## Activity Requirements
Now that you have a basic start for the implementation of Firebase Firestore, you will need to continue implementing the following:

### 1. Set up Firebase Services (by yourself)
Using the [documentation](https://docs.expo.dev/guides/using-firebase/), install and set up the Firebase configuration of your project. You need to do this before starting the practical exercise in the lecture recording. Link your _classwork_ Firebase project appropriately.

### 2. Navigation to Details
Complete the navigation implementation to the details screen. You will be required to parse the information of each item to the details screen in some way (refer to the [React Navigation documentation](https://reactnavigation.org/docs/params/)).

### 3. Mark Completed
On the details screen, you will need to be able to click the “Mark Completed” button, which should update the DB accordingly. If an item has been marked completed, the button on the detail screen should be disabled and should say “Already done”. The item’s text should also be striked through on the list screen.

### 4. Delete
Add functionality that will delete an item from your database on your details screen.

#### Real-time data (BONUS)
Not required, but if you have time, see how you can implement the real-time capabilities of Firestore (we will do it in class next week). Just be careful to not create an endless loop (monitor your usage).

## Outcome: 
**Learn basic CRUD functionality with Firebase Firestore in React Native.**

## Video Lecture:
[Lecture 4: Firestore CRUD Functionality](https://www.loom.com/share/52e2d43e5268471883146483dafcf6d5?sid=abf82380-434c-495f-bcb9-fc970d739c5e)

> [!NOTE]  
> _This video was recorded last year, so please refer to the official documentation to ensure the code is still up to date (the functionality should work the same). The example project in the video is written in JavaScript, whereas the boilerplate you'll be working with is in TypeScript. Be sure to adjust your code accordingly to account for type definitions and TypeScript conventions._

