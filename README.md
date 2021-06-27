# MealPlanner

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed11233f-a3d9-432a-bb66-3cf6732faee3/deploy-status)](https://app.netlify.com/sites/suspicious-hoover-c66ee2/deploys)

View the live site: [https://suspicious-hoover-c66ee2.netlify.app](https://suspicious-hoover-c66ee2.netlify.app) 

It is powered on the backend by the [MealPlanner API](https://github.com/msandula12/meal-planner-server).

## Getting started

To run this project locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run start` to run it (add `:local` if you're serving the [backend](https://github.com/msandula12/meal-planner-server) locally)

## Code Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dependencies

- [axios](https://github.com/axios/axios) - For HTTP requests
- [dayjs](https://github.com/iamkun/dayjs) - For parsing/formatting dates
- [jwt-decode](https://github.com/auth0/jwt-decode) - For decoding JWT tokens
- [react-icons](https://github.com/react-icons/react-icons) - For iconography (specifically the `BoxIcons` module)
- [react-redux](https://github.com/reduxjs/react-redux) - For managing application state (specifically [Redux Toolkit](https://redux-toolkit.js.org/))
- [typescript](https://github.com/microsoft/TypeScript) - For type safety
