[user_grid]: ./docs/images/user_grid.jpg
[user_detail]: ./docs/images/user_detail.jpg

# `Delegate/Athena works front-end challenge` 

The goal of this challenge is to build a user list, user detail and user update.

## Result

https://kimmikirino.github.io/delegate-challenge/

## Assignment x Development:

- Build a page layout shown below to build a master detail application to display and
update person data. <br />
<i>Jaqueline: created a SPA with just one page to show the user information and detail.</i>

- Use the following public rest api at: https://reqres.in/ to consume their user api endpoint
https://reqres.in/api/users?page=1 to get a list of persons.<br />
<i>Jaqueline: axios was used to make REST API call.</i>

- Display the results in the person's grid and implement the pagination for it.<br />
<i>Jaqueline: Table component from Antd lib.</i>
![User grid][user_grid]

- Display the person data details in person detail section when selecting a row in the grid<br />
<i>Jaqueline: All components from Antd lib.</i>
![User detail][user_detail]

- Select first row on initial load of page<br />
<i>Jaqueline: First row will be selected in every change page too.</i>

- Update the person data and call the update api endpoint at: https://reqres.in/<br />
<i>Jaqueline: When clicking on the Save button, API will be called using axios and PUT data type. The reqres API accepts any body request and always returns successfully, so it will send all information from the form.</i>

- Reflect the changes in the person detail section and the persons grid.<br />
<i>Jaqueline: After the PUT API call went well the data will be saved locally (React Context API). However, when changing pages, a new request will be sent where the saved data will be replaced by data from the API.</i>

- Write unit tests to validate above functionality. (or just explain how and what you would test)<br />
<i>Jaqueline: I could not write unit tests, but I would use react-testing-library to test an interaction of the component, such as a click and check if the component has changed as expected.</i>

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
