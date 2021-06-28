# ![riso.dev](assets/svg/logo.svg)

This repository includes the source code of the websites <https://erick2280.github.io>, <https://erickalmeida.com.br/>, and <https://cin.ufpe.br/~eaor>.

The project uses the Vue framework [Nuxt.js](https://nuxtjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Running the website locally

To run locally, you need the latest LTS version of [Node.js](https://nodejs.org).

First, install the project dependencies. Run the following command in the repository's root folder through the terminal:

    npm install

Then, run:

    npm run dev

Go to `http://localhost:3000` in your browser to view the site. As you make changes to the source files, Nuxt.js updates the website and forces a browser refresh.

## Building a production version

From the repository's root folder, run:

    npm run generate

Static website files will be available in the newly created `dist` folder in the repository.
