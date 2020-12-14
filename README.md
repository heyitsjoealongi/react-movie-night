
# react-movie-night

![React Movie Night: Banner](/img/react-movie-night.jpg)

This application connects "[The Movie Database](https://www.themoviedb.org/)" API with a React interface and Node runtime to create a filtered search for movies, ratings, descriptions, and posters through a [Fetch](https://javascript.info/fetch) network request.

*This application was built with React, runs on Node, and connects to "The Movie Database"
 API*

## Contents
* [About](#about)
* [Build](#build)
* [Overview](#overview)
  * [Requirements](#requirements)
  * [Installation](#installation)
* [Scripts](#scripts)
* [Additional](#additional)

## About

A good movie is hard to find and sometimes you only remember part of the title, whichever the example, find the movie you were looking for with relevant suggestions, ideas, and titles. From a massive archive of movies, titles, and motion pictures connected to an efficiently programmed application that runs in your browser.

Make movie nights more enjoyable with a simple and scalable application to enhance the movie nights the way you like, for the way you watch.

#### Solution:
* Movies are searched through an API connected to a movie database.
* Relative titles and movies are included based on search context.
* Descriptions, ratings, and posters provide improved recognition of search.

Connecting to the API with event-based actions allows the developer to build upon the simplistic application to define the more views, searches, and features with integration as a simple outcome of component addition.

## Build
This application is built using React & Node with a Fetch request/promise and functional JavaScript components, providing the ability to adapt to increased usability with iteration.
* ["The Movie Database" API](https://www.themoviedb.org/documentation/api)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)

## Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) which means all components, classes, and functions work within an unejected react application. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/). To get started fork, download, or git clone this repository to retrieve the codebase.

### Requirements

This application and its components were built through Yarn, with React, and run on Node.js all prerequisites are listed below, the rest are active in the directory of the project file and become accessible with the script `yarn install`.
* Yarn
* Node


### Installation

1. Create your *The Movie Database* account & signup for an API.
[https://developers.themoviedb.org](https://developers.themoviedb.org/3/getting-started/introduction)

2. Install Yarn Package Manager
https://yarnpkg.com/

3. Clone the repo
    ```sh
    git clone https://github.com/collectedview/react-movie-night.git
    ```

4. Create a new file in your project folder titled `.env`

5. Enter your *API Key* into `.env`
    ```JS
    REACT_APP_NOT_SECRET_CODE=ReplaceWithYourAccessToken
    ```
5. Install the directory through yarn in your console
    ```sh
    yarn install
    ```

## Scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Additional
Enhancing the use of React Movie Night, the search functionality could have actions to filter the choices, explore based on genres, and view movies based on ratings.

 - Increased functionality: [JavaScript Filter](https://www.w3schools.com/jsref/jsref_filter.asp)

Added event handlers and defining more logic along with event pooling, could be deployed to create a more interactive solution. Conditional based logic could improve the experience when searching for a movie.

Integrating packages to handle more in-depth searches and indexing could allow for less browser rendering, and increase the proficiency of movie identification. Building a recommendation engine begins with connecting search-based crawlers that identify logged searches and improved terms. 

- React [Event Handling](https://reactjs.org/docs/handling-events.html)
- React [Pooling](https://reactjs.org/docs/events.html)
- Smart Search & Recommendation: [Elastic Search](https://www.elastic.co/site-search/)

### Acknowledgments
[Scrimba](https://scrimba.com/course/greactmovie)
