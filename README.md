# gatsby-plugin-tagmanager

## Description
This GatsbyJS plugin allows to define tags that should be inserted in the head or body
of a page. Using `gatsby-plugin-tagmanager` you can add any thrird party tool with ease to your site
and do not need to edit the default-html.js directly or create plugins just to add your tools.

By following a few simple rules `gatsby-plugin-tagmanager` is a powerful helper to speed
up your develoment process.

## How to install

### Install the plugin through npm
The installation of `gatsby-plugin-tagmanager` is done the same way as you would install other plugins.
Refer to [Using a plugin in your site](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-plugin-in-your-site/) for a detailed guide.
Note that you need `npm` to use this plugin. You might also use another prefered package manager that you currently use.

Run the following commandto install `gatsby-plugin-tagmanager`:
```
npm install gatsby-plugin-tagmanager
```

### Load the plugin
Put the plugin into your `gatsby-config.js`. The order of the plugins in your `gatsby-config.js` specifies 
their load order. If you want your tags to be at the top of all other plugins that insert tags, put `gatsby-plugin-tagmanager`
at the top of your plugin list and vice versa.


```javascript
module.exports = {
    plugins: [
        ...
        {
            `gatsby-plugin-tagmanager`,
            options: {
                ...
            }
        },
        ...
    ]
};
```

## Available options

**TBD**

## Examples of usage

**TBD**

## How to develop locally

#### Prerequisites
To develop locally you need the following tools:
 - NodeJS (recommended version: 14.15.4)
 - NPM

#### Setup
To set the project up, simply let npm install your dependencies as always:
```bash
npm install
```

#### Building the project
To build the project use the build script provided by npm:
```bash
npm run build
```
Note that building will also run eslint and jest tests.

If you want to collect coverage while building, use the following script instead:
```bash
npm run buildCoverage
```

#### Compiling the project
To compile the project run the following npm script:
```bash
npm run compile
```

#### Clean compile output
To clean the compiled output (which lays in the root directory), run:
```bash
npm run clean
```

## How to run tests
The project uses eslint as linter and jest as the testing framework.
You can run the tools using npm.

#### Run linting and testing suites
Use the following npm command to run eslint and jest:
```bash
npm run test
```

#### Run only eslint
Use the following npm command to run eslint:
```bash
npm run lint
```

#### Run only jest
Use the following npm command to run jest:
```bash
npm run test
```

## How to contribute
You are welcome to contribute to `gatsby-plugin-tagmanager`! Refer to Contributing for information about issues and code contributions.
