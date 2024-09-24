# Project Overview
This application leverages Redux Toolkit for efficient state management of comments, allowing users to interact seamlessly with the application. The state of comments is persisted across page reloads using redux-persist, ensuring a smooth user experience.

We fetch comments from the API at https://dummyjson.com/comments using Axios, making it easy to retrieve and display data dynamically. Users can effortlessly add new comments via an intuitive form and delete existing ones with a single click.

One of the standout features of this application is its ability to maintain the scroll position and preserve input text, even when the page is refreshed, enhancing user interaction.


react-hook-form: This library streamlines form handling and validation, enabling efficient management of form state. With react-hook-form, we minimize unnecessary re-renders, which boosts application performance and provides a better user experience.

MUI (Material-UI): We utilize MUI to create a visually appealing and responsive user interface. MUI's pre-designed components follow Material Design principles, ensuring consistency and enhancing the overall aesthetic of the application. The use of buttons, text fields, and other UI elements contributes to a polished and user-friendly experience.


## Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

