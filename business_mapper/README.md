To execute deployment of the application, first open the Business_Mapper folder and delete the "package-lock.json" file, the "yarn.lock" file, and the "node_modules" folder (if they exist). Then, open the "dist" folder and right-click on the "Main.js" file. Select "Open Developer Command Prompt" and run the command "yarn install". 

After the command execution is complete, try running "yarn start". If that is successful, run the command "yarn test".


### /* OPTIONAL */     IF YOU ARE RECEIVING ERRORS IN "yarn test" OR "yarn start":

If you are receiving an error regarding babel-loader compatability, run the following:
  "npm ls babel-loader"   // to see the dependency versions you maintain
  "npm r babel-loader"    
  "npm start"
  "npm test"
  
  If you are still running into errors about babel-loader, follow these steps: 
  - Delete the package-lock.json file, the "yarn.lock" file, and the "node_modules" folder. 
  - Go to the "package.json" file and delete the line with "babel-loader" as a dependency
  - Run the command "yarn install" in the developer prompt
  - After that is done, try running the commands "yarn start" and "yarn test"
  
  ### /* END OF OPTIONAL SECTION */
  
  
  If the command "yarn test" executes successfully, then the app is ready to be deployed. Now, we run the command "yarn build".
  "Yarn build" will build the app for us that will be used for deployment. It correctly bundles React in production mode and opts 
  the build for the best performance. After a successful build execution, the app is ready to be deployed.
  
  
  To initiate deployment, we first need to create a local server for us to run our app on. To accomplish this, we stay in the 
  same developer command prompt and run the following commands:
  
  1. npm install -g serve     // Installs the package for us to create a local server
  2. serve --listen 3000      // Initiates a server that runs on localhost:3000
    
  
  Now that we have a local server running pointed to the "main.js" file in the "Business_Mapper" --> "div" directory, we can now build 
  our app. Once again, open Visual Studio and open a new Developer Command Prompt by clicking on the same "main.js" file that the server 
  is running in, and run the command "yarn build".
  
  After a successful build, we can open a web broswer app (i.e. Google Chrome, Firefox, etc.) and visit the "localhost:3000" URL.
  If our build is functional, we should see the Perspecta app homepage. 

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
