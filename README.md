# Path2Tech Weather Application

[Description](#description) | [Demo](#demo) | [Important Git/Github Expectations](#important-gitgithub-expectations) | [Recommended APIs](#recommended-apis) | [Getting Started](#getting-started) | [Requirements](#getting-started) | [Bonuses](#bonuses)

## Description

You will be building a React appliction similar to the demo below. This application will enhance your existing knowledge of the React basics (components, JSX, props, event handling, using forms, making API calls, basic hooks) and allow you to practice with React best practices.
<br>
Below you will see a demo of the Weather Application that will load data from the OpenWeatherAPI based on a location of choice. The application will display the weather for the current day.

## Demo

** Your project does not need to look 100% like the images below, but it is encouraged to aim for it**
![Weather App Initial Component](weather_image_one.webp "Initial Component")
![Weather App User Input](weather_image_two.webp "User Input")
![Weather App Weather Details](weather_image_three.webp "Weather Details")

## Important Git/GitHub Expectations:

- [ ] Set up a GitHub repository for your group, after the repository is set up add [branch protections](https://docs.github.com/en/enterprise-server@3.2/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) that require at least one PR approval before merging into `main`
- [ ] All your work should be done within branches, and code only should be moved to `main` after a teammate has approved a pull request. As you wrk, do regular adds/commits to give yourself multiple "save points" just in case something goes wrong.
- [ ] <strong>It is very important that you create a new branch off of the updated `main` branch every time you start a new feature. This branch should be used to complete the functionality associated with that branch and should be named accordingly</strong> Once the feature/functionality in this branch is finished, a PR can be made to merge the branch into `main`, and a new branch can be created for your next task. <strong>This process is crucial to minimize mere conflicts and mimicking the workfow you'll use once you join a development team.</strong>
- [ ] Use clear, descriptive, and professional commit messages. (This will make things easier if you ever have to revert to a prior commit, and it looks great to potential employers!)
- [ ] Reference the [Git Collaboration Workflow Document](https://github.com/scullenDev/git-collaboration-workflow) for a list of Git best practices!

## Recommended APIs

Geolocator: to get the coordinates and pass your latitude and longitude to get the weather of your location.
<br>
[Geolocator API Link](https://developers.google.com/maps/documentation/geolocation/overview)
<br>
OpenWeatherAPI: to get the weather based on coordinates and display the data to the user
<br>
[OpenWeatherAPI Link](https://openweathermap.org/api)

## Important Notes on APIs:

Begin searching a weather API ([OpenWeather](https://openweathermap.org/api) is an option)

<strong>Notes on the OpenWeather API:</strong>

If you choose to use the OpenWeather API, you will discover quickly that the API's free tier limits you to 1000 requests per day. This should be more than enough, but if the limit is hit, then the cooldown period of each call is 24 hours.

When using OpenWeather API, the main endpoint is: `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${APIKEY}`, where APIKEY is an environment variable.

<strong>Choosing an API:</strong>

- Make sure the API is free or has a free tier.
- <strong>Make sure the API allows LOTS of free requests.</strong>
- Make sure the API either requires no authentication or simple authentication, else it may not be workable in a front-end only app.
- Make sure the API returns data in JSON format.
- Make sure the API has good documentation.
- <strong>Make sure that the API outputs the data your app needs.</strong>

### CORS (Cross-Origin Resource Sharing)

Since your application will be front-end only (with no back-end server), there are some APIs that will not work for you due to a lack of CORS permissions on the API server. Learn more about CORS below and take a look at one potential workaround:

- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [What are CORS proxies, and when are they safe?](https://httptoolkit.com/blog/cors-proxies/)
- [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo) - this is one of those less-than-ideal and somewhat risky resource, but for a simple project like this one with no secure data being transmitted, it's okay in a pinch.

## Getting Started

- [ ] Take time to read through the [core requirements](#requirements) below, and think through what components your app will need, what data you'll need to access, what you might store in state, etc.
- [ ] Consider using [Trello](https://trello.com/) to create a project board to track tasks, priorities and deadlines, and for visibility into project progress and remaining priorities. [See here](https://trello.com/b/WjhFXOdJ/demo-project-board) for an example of how one might be organized.
- [ ] Fork, Download, Pull, or Clone from this GitHub Repository
- [ ] Dig into the React or JavaScript documentation if you get stuck!
- [ ] When you run into a bug or other unexpected behavior, use your debugging tools wisely: read error messages critically, set breakpoints, use `console.log()` and watch variables, use your Google Fu, etc.
- [ ] Challenge yourself to use ES6 syntax whenever possible: arrow functions, destructuring, the spread operator, object property value shorthand, template literals, etc

## Requirements

- [ ] <strong>No code should be merged into `main` until all console and terminal errors and warnings are corrected</strong>
- [ ] Upon initial render, your app should load a one-day weather details for the default location of your choice.
- [ ] Your app should have a search bar that allows a user to specify a new location to search in. After user search, the app should render weather forecast data for the new location.
- [ ] The user of your app should be able to enter either a city/state, a zip code, an address, or a landmark for their search term. If your weather API relies on a lat/lon for search, use a geocoder to convert the human-friendly search into location coordinates.
- [ ] Each component's props should be destructured for component readibility.
- [ ] Pull data from your external APIs using `axios` or `fetch`
- [ ] Hide any API keys using a `.env.local` file
- [ ] Your app should have multiple components. Use props to pass data from parent components into child components to allow customization of the child components. (Sometimes it's easiest to start with one or two big components, and to break code out into smaller, more specific components after the core functionality is in place.)
- [ ] Make your code as DRY (<strong>D</strong>on't <strong>R</strong>epeat <strong>Y</strong>ourself) as possible!

## Bonuses

- [ ] Use a React-speciic CSS framework like reactstrap or React Materialize to jumpstart your styling, and to ensure mobile responsiveness
- [ ] Disable the search button until the user has entered a search value.
- [ ] Install React Router and route users to a separate page to view forecast details.
- [ ] Have your app auto-detect a user's location on render (if that feature is enabled on the user's end) and use this location to render the initial weather forecast.
- [ ] Consider implementing autocomplete functionality on your location search field. (Use an autocomplete API for this.)
- [ ] Deploy your application and share the url with the team so we can all try it!
- [ ] Write a detailed README.md file using best practices: [README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [ ] Look into using [Storybook](https://storybook.js.org/docs/get-started/install) as a tool for build, standardizing, and documenting your React components in isolation

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
