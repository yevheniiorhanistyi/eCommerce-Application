# eCommerce Application

_The eCommerce Application is an online store built using modern web development technologies. It represents an innovative and user-friendly web application designed for selling products and services online. The main objective of the project is to provide users with a convenient and secure online shopping experience._


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

- React.js
- TypeScript
- Jest (testing)

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
To automatically fix Prettier formatting for TypeScript, JSX, and JSON files, use the following command:
```
   npm run pretty:fix
```
To run ESLint for TypeScript and JSX files, use the following command:
```
   npm run lint
```
To automatically fix ESLint errors for TypeScript and JSX files, use the following command:
```
   npm run lint:fix
```

### Testing

To run tests, use the following command:
```
   npm test
```
To run tests with code coverage report, use the following command:
```
   npm run test:coverage
```

### Building the Project

To create an optimized production build of the project, use the following command:
```
   npm run build-prod
```

To build the project without minification, use the following command:
```
   npm run build-dev
```

## Preview

Before running the preview, make sure you have a production build ready by running the `npm run build-dev` or  `npm run build-prod`  command.

To preview the build and see how the application works in production mode, use the following command:
```
   npm run preview
```

<!-- CONTRIBUTORS -->
## Contributors

- [Alexander Samak](https://github.com/alxndrsmk)
- [Kostiantyn Kikinov](https://github.com/kikinovk)
- [Yevhenii Orhanistyi](https://github.com/yevheniiorhanistyi)
