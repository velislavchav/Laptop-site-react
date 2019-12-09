This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project description

The theme of the project is "User's laptops management system", where you should register and login to see the whole functionality in the site because it has public part and private part. There are validations in the create product form, register form and edit user form.
If you successfully registered user you will be redirected to login page. If you login with the correct data you will be redirected to home page adn you will see the private part of the site.
The public part give you access to home page, gallery, about us, register and login form. The private part(user area) holds the whole functionality - home page, gallery, about us, profile, logout, create product form, products, products info and etc.
In the home page you can see our title of the site and the basic image. In the products page you can see the products in my database(used kinvey for backend and database) and if you click at one product, it will display you the whole info of the product.
If the logged user created this product, you will have 2 buttons - back to all products and delete this product. If someone else created the clicked product it will be just one button - back to all products.
Create product page render one form, where you can input your information/data and if the data match the validations you will be redirected to the home page. 
Profile page is the place you can find logged user information and can edit your user information. At the bottom of the page you will see the last 3 laptops created by this user (if there are any).
In the about us page you can see the company contact info and where is our location(google maps). Our gallery page is slider with some interesting photos. Hope you will enjoy it!
Made by Velislav Chavdarov.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# React project - Software university
