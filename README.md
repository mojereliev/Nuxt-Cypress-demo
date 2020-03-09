# Nuxt Demo

 This is an example from Vue Mastery Nuxt course https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/why-use-nuxt with added Cypress tests and configuration setup for deployment to IIS

## Build Setup

create .env in root with auth0 data

```
AUTH0_CLIENT_ID=""
AUTH0_DOMAIN=""
```

create cypress.env.json in root with auth0 data

```
{
  "auth_audience": "https://yourdomain.auth0.com/api/v2/",
  "auth_url": "https://yourdomain.auth0.com/oauth/token",
  "auth_client_id": "",
  "auth_client_secret": "",
  "auth_username": "",
  "auth_password": ""
}
```

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# run e2e tests with cypress - (You must start server before this)
$ npm run e2e

# run and open e2e tests with cypress - (You must start server before this)
$ npm run e2e:open
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Test assignment

1. Add Auth0 authentication using https://github.com/nuxt/example-auth0 as an example
2. Make page 'Create event' accessible only by authenticated users
3. If not authenticated user tries to open a page which requires authentication, the user should be prompted for login and after successful authentication shown original page (hint: https://auth0.com/docs/protocols/oauth2/redirect-users, you can pass redirect url as open parameter - security is not a priority for this test task)
4. Add new tests to cover new functionality (hint: Cypress does not support redirects)

The aim of this assigmnet is to validate your Vue/Nuxt knowledge, ability to figure out how authentication and testing work.

Test assigment is consdered as successfully done if one can get the latest version from a fork of this repository run commands from section Build Setup and make sure that
* application is running correctly
* tests are running correctly and covering new test scenario (open public page as anonymous - success, open private page as anonymous - login prompt, open private page as authenticated - success)
