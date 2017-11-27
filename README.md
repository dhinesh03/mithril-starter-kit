# Mithril Starter Kit
A boilerplate Mithril application using ES6, Babel, Webpack 3, Sass/SCSS, Webpack dev server hot reload and eslint

### How to use
```shell
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
```
## Directory Structure:
```shell
├── dist/                         # Compiled files
│     ├── css/
│     │    ├──main.css
│     │    └──vendor.css
│     ├── fonts/
│     ├── images/
│     ├── main-bundle.js
│     ├── vendor-bundle.js
│     └── index.html
│
├── node_modules/                 # 3rd-party libraries
│
├── src/                          # Application source files 
│     │
│     ├── styles/                 
│     │     ├── components/       # Generic .scss files
│     │     ├── images/           # Image files that are copied to build production output (e.g. favicon.ico)
│     │     ├── app.scss          # Your application specific .scss goes here
│     │     └── vendor-scss.js    # Import all vendor .scss/css here [e.g. require('font-awesome/scss/font-awesome.scss')]  
│     │
│     ├── views/                  # All your application view logic files
│     │     ├── components/
│     │     ├── your-pages.js
│     │     └── ...
│     │
│     ├── index.html            
│     └── index.js                # Application entry point
│   
├── eslintrc.js                   # To configuring ESLint
└── package.json                  # NPM scripts list
```
