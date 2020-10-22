[user_grid]: ./docs/images/user_grid.jpg
[user_detail]: ./docs/images/user_detail.jpg

# `Delegate/Athena works front-end challenge` 

The goal of this challenge is to build a user list, user detail and user update.

## Assignment x Development:

- Build a page layout shown below to build a master detail application to display and
update person data. 
Jaqueline: created a SPA with just one page to show the user information and detail.

- Use the following public rest api at: https://reqres.in/ to consume their user api endpoint
https://reqres.in/api/users?page=1 to get a list of persons.
Jaqueline: axios was used to make REST API call.

- Display the results in the person's grid and implement the pagination for it.
![User grid - Table component from Antd lib][user_grid]

- Display the person data details in person detail section when selecting a row in the grid
![User detail - All components from Antd lib][user_detail]

- Select first row on initial load of page
Jaqueline: First row will be selected in every change page too.

- Update the person data and call the update api endpoint at: https://reqres.in/
Jaqueline: When clicking on the Save button, API will be called using axios and PUT data type. The reqres API accepts any body request and always returns success, so it will send all information from the form.

- Reflect the changes in the person detail section and the persons grid.
Jaqueline: After the PUT API call went well the data will be saved locally (React Context API). However, when changing pages, a new request will be sent where the saved data will be replaced by data from the API.

- Write unit tests to validate above functionality. (or just explain how and what you would test)
Jaqueline: I could not write unit tests, but I would use react-testing-library to test an interaction of the component, such as a click and check if the component has changed as expected.

## Result

https://kimmikirino.github.io/delegate-challenge/

## Technologies

The project  was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Libraries installed:
- Reactjs - create UI interfaces
- Antd - React UI library components
- Axios - http requests from the browser
- gh-pages - publish aplication to the github pages

## Requirements

Programs to have installed in your computer:

- nodejs (latest stable version)
- npm/yarn
- Git

## Development enviroment

- To run the application locally you have to clone this repository, access `delegate-challenge` folder and install the dependencies:

```shell
git clone https://github.com/kimmikirino/delegate-challenge.git
cd delegate-challenge
npm install
```

- After that you can run the project by executing the following command:

```
npm start
```

## Production enviroment

- To build the application:

```
npm run build
```

- To deploy the application:

```
npm run deploy
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
