**PROJECT NAME:**

**KEY:**  Lines in italics are a maybe (secondary) feature

**PROJECT TYPE:** Open-Source is the new Sauce

**ESTIMATED DURATION:** 3 MONTHS

**PROJECT OVERVIEW:** This project it to be a PWA bootstrapped with GatsbyJs to be built on [ALOC EXAM ENDPOINTS](https://github.com/Seunope/aloc-endpoints) API which is an API for 5,000 past questions api end-points for POST-UTME, UTME, WASSCE, NECO questions.

**PROJECT AIM:** To provide a free online CBT practice centre for Prospective Secondary School Leavers which uses minimal data.

**DEPLOYMENT:** PWA => Web

**PROJECT EDGE-CASES:**

1. No Adverts
2. Providing offline usability to already downloaded questions
3. Seamless navigation between questions to avoid network errors while changing questions

**TECHNOLOGIES:**

GatsbyJs => Generate React PWA: Front-End UI,

Redux => State management,

Test => Mocha

_Express-Node => Server to save user points and create a leaderboard_

**FRAMEWORKS:** Bootstrap or Material UI

**DEPLOYMENT PLATFORMS:**

Dev: Heroku

Production:

**COLLABORATION RULES:**

Upstream Branch: dev

Adding a new feature/screen:

1. Create a branch from dev with the feature/screen name you want to add
2. Write test for every feature/screen. It&#39;ll only be accepted if your score is above 80
3. Create a PR to dev branch, would be reviewed by all other devs, comments would be made. Make Balanced, Amaz and Choice as reviewers and only when the three of them accepts the PR before you merge to the dev branch.
4. Update the Collaborators list in the README.md file

Merging to master branch would be done only by either Balanced or Amaz

Master branch would be hosted on dev server.

**COLLABORATORS**
- [Balanced](https://github.com/Balanced02)


**PROJECT BOILERPLATE**

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    npm run develop
    ```
    **OR**

    ```sh
    yarn run develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `exam` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.