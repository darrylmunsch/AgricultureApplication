*****4/8/20 DM
-New Native App Started
-Added Folders: Components, Functions, Screens
-Added StyleSheets.js File
    -Use this file to store styles and export the relevant styles for a specific component.
    -Tips on how to do so can be found at the top of the file.
-Added routing to the app.
    -To do so, we are using "React Navigation"
    -The docs can be found here: https://reactnavigation.org/docs/getting-started
    -Note: this also uses a few other packages, found in the docs under the "Getting Started" page.
-Added empty HomeScreen.js and TicketScreen.js to show how we can navigate between screens using props.
    -Note: I used class components to show how it can be done, the docs have examples
     of using it with functions
    -These components also implement basic styling as reference to how it can be done as well.
-Dependencies installed:
    -react-native-community/masked-view
    -react-navigation/native
    -react-navigation/stack
    -react-native-gesture-handler
    -react-native-reanimated
    -react-native-safe-area-context
    -react-native-screens

*****4/9/20 DM
-Added Constants.js to main project
-Added LoginScreen.js to Screens
-Added Button.js and FormTextInput.js to Components folder
    -These are template functions to be reused in many cases
-Added Resources folder for images, etc.
-Added Storage.js to Functions folder. Stores multiple AsyncStorage functions to be used across app.
-LoginScreen successfully authorizes a valid login.
    -Need to finish passing data to/from screens via AsyncStorage.








