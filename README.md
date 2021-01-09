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

### `head` (optional, no default value)
Can be used to add tags to the head of the generated pages.
The value is an array that contains JSONs in the format specified under `Tag configuration`
which is a sub heading of `Available options`.

Example value: [{...tag in the defined format}, {...tag in the defined format},]

### `preBody` (optional, no default value)
Can be used to add tags to the start of the body of the generated pages.
The value is an array that contains JSONs in the format specified under `Tag configuration`
which is a sub heading of `Available options`.

Example value: [{...tag in the defined format}, {...tag in the defined format},]

### `postBody` (optional, no default value)
Can be used to add tags to the end of the body of the generated pages.
The value is an array that contains JSONs in the format specified under `Tag configuration`
which is a sub heading of `Available options`.

Example value: [{...tag in the defined format}, {...tag in the defined format},]

### Tag configuration

#### `type` (required)
The type of the tag. This can be something like `link` or `script` for example.

Example value: "link"

#### `name` (optional)
A internal name that can be set. Has to be unique and can collide with other values on the page
if a wrong value is set. This value is used as the `key` of the React component.

Example value: "my-script"

#### `attributes` (optional)
The attributes that should be set on the tag. Has to be in JSON format.
Can be used for things like defining the type of a script and other common HTML attributes.

Example value:
```javascript
{
    type: "text/css",
    rel: "stylesheet"
}
```

#### `content` (optional, cannot be used together with `dangerousContent`)
The content to put into the tag. Note that this content is being escaped properly and is safe to use.
Note: Cannot be used to insert JavaScript into an script tag. You should use `dangerousContent` for that.

Example value: "Hello World!"

#### `dangerousContent` (optional, cannot be used together with `content`)
Allows to insert some custom HTML as content for an tag. Can be used for example to include some external JavaScript snippet.
Note that if `dangerousContent` and `content` is set, `content` is the property that will be used and overwrite this property.

Example value: "console.log('Hello World!');"

## Examples of usage

### Usage without content
```javascript
{
    resolve: "../gatsby-plugin-tagmanager",
    options: {
        head: [
            {
                type: "link",
                name: "some-css",
                attributes: {
                    type: "text/javascript",
                    "data-somedata": "MyData",
                    href: "/my.css"
                },
            }
        ]
    }
},
```

### Usage with content
```javascript
{
    resolve: "../gatsby-plugin-tagmanager",
    options: {
        preBody: [
            {
                type: "h1",
                name: "some-h1",
                content: "This is my website!"
            }
        ]
    }
},
```

### Usage with dangerousContent
```javascript
{
    resolve: "../gatsby-plugin-tagmanager",
    options: {
        preBody: [
            {
                type: "script",
                name: "custom-script",
                attributes: {
                    type: "text/javascript"
                }
                dangerousContent: "console.log('Hello World');"
            }
        ]
    }
},
```

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
