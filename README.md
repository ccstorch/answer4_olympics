# Kitman Labs Frontent Test

I know the test was simple, but I decided to go with react and redux to give more of a large app structure.

## Access the app in production:

Since the app uses some npm dependencies I deployed to make it easier to test:

[https://kitmanlabsolympics.herokuapp.com/](https://kitmanlabsolympics.herokuapp.com/)

**The app was deployed using a free heroku option, so it may take a few seconds to "wake" the server**

## To run the project:

```
// On the app folder
npm install
npm start
```

Then open [http://localhost:8080/](http://localhost:8080/) to see the app.


## To run the tests:
```
npm test
```

## Project structure:
```
answer4_olympics/
  app/
    api/            // External api calls, for this example is just reading the json file
    components/     // Dumb reusable components
    helpers/        // Helpers functions and logic, like formatting and sorting the countries
    styles/         // Main sass files, styles related with components are in the components folders
    views/          // Smart components, views and pages, also there is actions and reducers related to the views
    index.js        // Main js file
    reducers.js     // Redux reducers config
    router.js       // Routes config and declaration
    store.js        // Redux store config
  data/             // Folder with external data (json)
  test/             // Follows the same structure that the app folder. All test files has an extension of *.test.js
    fixtures/       // Data generator for the tests
```

The app has the following naming conventions:
 - **React components files:** Camel case with first letter capitalize (e.g. Counter.js, LayoutHeader.js)
 - **Logic files:** Camel case with first letter in lowercase and with the category as a file extension (e.g. countries.helpers.js, listCountries.actions.js)
 - **CSS classes:** Follows the components name, but with first letter in lowercase (e.g. counter, layoutHeader)
 - **Folders name:** Camel case with first letter in lowercase (e.g. counter, medalsGrid)

## Main stack:
 - React
 - Redux
 - React Router
 - SASS
 - Webpack
 - Mocha
