# Mithril Starter Kit
A boilerplate Mithril application using ES6, Babel, Webpack 4, Sass/SCSS, Webpack dev server hot reload and eslint

### How to use
By using [degit](https://github.com/Rich-Harris/degit)
```shell
npx degit dhinesh03/mithril-starter-kit mithril-starter-kit
or
git clone https://github.com/dhinesh03/mithril-starter-kit
```
or
[Download the source](https://github.com/dhinesh03/mithril-starter-kit/zipball/master)
```shell
cd mithril-starter-kit

npm install

npm start
  # Webpack dev server will run and opens the app on the browser with HRM,
npm run build
  # Compiles the app for production and all compiled files lies on dist dir.
  # To deploy an the application simply transfer the dist to a web server's public directory.
npm run build:analyze
  # Compiles the app for production and we will have a report and stats for the bundle on dist folder.
```

## Directory Structure:
```shell
├── dist/                         # Compiled application
│     ├── css/
│     │     ├── *.css
│     │     └── *.css.map
│     ├── fonts/
│     ├── images/
│     ├── js/
│     │     ├── *.js
│     │     └── *.js.map
│     └── index.html
│
├── src/                          # Application source files 
│     │
│     ├── images/                 # Image files that are copied to build production output (e.g. favicon.ico)
│     │
│     ├── view/                   # All your application view logic files
│     │     │
│     │     ├── components/             # All your view components
│     │     │     │
│     │     │     ├── your-component/       # A single view component
│     │     │     │     ├── index.js            # The view component code
│     │     │     │     ├── styles.scss         # The view component styles
│     │     │     │     └── ...  
│     │     │     └── ...
│     │     │
│     │     ├── pages/                   # All your top level page components
│     │     │     ├── your-pages.js      
│     │     │     └── ...
│     │     │
│     │     └── routes.js               # Application routing definition
│     │
│     ├── index.html              # Application HTML template
│     └── index.js                # Application entry point
│   
├── eslintrc.js                   # ESLint configuration
├── package.json                  # NPM configuration and scripts
├── config/environment/env.*      # Holding environment variables 
└── config/webpack.*.js           # Webpack configuration
```
