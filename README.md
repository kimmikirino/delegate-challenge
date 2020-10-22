# `Delegate/Athena works front-end challenge` 

The goal of this challenge is to build a user list, user detail and user update.

## Assignment:

- Build a page layout shown below to build a master detail application to display and
update person data.
- Use the following public rest api at: https://reqres.in/ to consume their user api endpoint
https://reqres.in/api/users?page=1 to get a list of persons.
- Display the results in the person's grid and implement the pagination for it.
- Display the person data details in person detail section when selecting a row in the grid
- Select first row on initial load of page
- Update the person data and call the update api endpoint at: https://reqres.in/
- Reflect the changes in the person detail section and the persons grid.
- Write unit tests to validate above functionality. (or just explain how and what you would
test)

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
