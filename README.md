# BUYIT 🛍️🌐
<!-- DESCRIPTION -->
_BUYIT is a powerful eCommerce application developed using state-of-the-art web development technologies. It represents an innovative and user-friendly web application designed for selling products online. The primary goal of the project is to provide users with a convenient and secure online shopping experience._

Deployment Link: [BUYIT]([https://buyit-shop-f.netlify.app/](https://679e53ce181de31c5e6975c9--buyit-shop-f.netlify.app/))

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#technology-stack">Technology Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<!-- TECHNOLOGY STACK -->
## Technology Stack
The project uses the following technologies:

- **React:** A popular JavaScript library for building user interfaces. It enables the creation of dynamic and responsive web applications.

- **React Router:** A library for managing routing and navigation in React applications, making it easy to create single-page applications.

- **TypeScript:** A statically typed superset of JavaScript that helps catch errors early and improve code quality.

- **Jest:** A JavaScript testing framework used for unit testing React components and ensuring code reliability.

- **Material-UI:** A widely used UI framework that provides a set of customizable components and styles for creating beautiful and consistent user interfaces.

- **Axios:** A promise-based HTTP client for making network requests and handling API communication.

- **Formik:** A library for building forms in React applications with ease, simplifying form validation and management.

- **Yup:** A JavaScript schema validation library often used with Formik to define and validate form schemas.

- **Notistack:** A notification library for displaying messages and alerts in a user-friendly way.

- **Dayjs:** A minimalistic date and time library for parsing, formatting, and manipulating dates in JavaScript.

- **Slick Carousel:** A responsive carousel/slider library that enhances the presentation of images and content on your website.

- **ESLint:** A tool for identifying and fixing problems in your JavaScript code, ensuring code consistency and best practices.

- **Prettier:** An opinionated code formatter that automatically formats your code to follow a consistent style.

- **Husky:** A tool that helps enforce code quality and standards by running scripts (e.g., linting) before commits are made.

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you can run a project locally. Follow these simple steps as an example.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:yevheniiorhanistyi/eCommerce-Application.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Running the Application

To run the application, use the following command:
```
   npm start
```
The application will be launched in development mode and can be accessed at [http://localhost:3000](http://localhost:3000).


### Code Formatting and Linting

This project uses ESLint and Prettier for code formatting and linting. Husky is also configured to run pre-commit hooks to ensure code quality. Before committing changes, the pre-commit hooks will automatically format the code using Prettier and check for linting errors using ESLint.

To format the code using Prettier manually, use the following command:
```
   npm run prettier
```
To run ESLint for TypeScript and JSX files, use the following command:
```
   npm run lint
```

### Testing

To run tests, use the following command:
```
   npm test
```

### Building the Project

To create an optimized production build of the project, use the following command:
```
   npm run build-prod
```

## Preview

Before running the preview, make sure you have a production build ready by running the `npm run build-dev` or  `npm run build-prod`  command.

To preview the build and see how the application works in production mode, use the following command:
```
   npm run preview
```

## Available Commands
In the BUYIT application, there are also other commands available that can be useful

- `npm run pretty:fix`: To automatically fix Prettier formatting for TypeScript, JSX, and JSON files.
- `npm run lint:fix`: To automatically fix ESLint errors for TypeScript and JSX files.
- `npm run build-dev`: To build the project without minification.
- `npm run test:coverage`: To run tests with code coverage report.

<!-- CONTRIBUTORS -->
## Contributors

- [Alexander Samak](https://github.com/alxndrsmk)
- [Kostiantyn Kikinov](https://github.com/kikinovk)
- [Yevhenii Orhanistyi](https://github.com/yevheniiorhanistyi)
