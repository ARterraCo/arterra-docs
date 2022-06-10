# OAuth2

ARterra Labs API provides OAuth 2.0 compatible authentication workflow.

OAuth 2.0, is a standard designed to allow applications to access resources hosted by other web apps on behalf of a user.
OAuth 2.0 provides consented access and restricts actions of what the client app can perform on resources on behalf of the user,
without ever sharing the user's credentials.

:::info
Comprehensive information about OAuth 2.0 can be found [here](https://auth0.com/intro-to-iam/what-is-oauth-2/).

For detailed description you can check [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) standard.
:::

## ARterra API OAuth2 connect example
We prepared several JS [examples](https://github.com/ARterraCo/arterra-oauth2-connect-example)
on how to integrate ARterra Labs OAuth2 flow to your application.

- API requests performed with axios without any libraries: `src/app-raw-axios-auth.js`
- passport with passport-oauth2 express middlewares: `src/app-passport-oauth2-auth.js`

These examples will give you a basic understanding how to receive access_token and use it to fetch NFT Collectibles
and private user information. 

For detailed information check README file.

Because ARterra Labs API follows RFC it is possible to use any compatible libraries for your programming language, e.g.:
- [Node passport-oauth2](http://www.passportjs.org/packages/passport-oauth2/)
- [JavaScript](https://oauth.net/code/javascript/)
- [NodeJS](https://oauth.net/code/nodejs/)
- [PHP](https://oauth.net/code/php/)
- [Java](https://oauth.net/code/java/)

## OAuth2 Sign Up (register)
1. Check that business partner is created and has assigned root user (BP ADMIN)
2. Authorize as BP ADMIN and copy client id and client secret for your application
3. Go to OAuth2 register page (https://staging.arterra.co/oauth2-login?client_id=client_2ac52934&response_type=signup&redirect_uri=http://127.0.0.1:3002&state=some-state )
    - `response_type` should be `signup` to open registration form
    - use your `client_id`
    - `redirect_uri` must match defined URL in BP settings
    - pass any value in `state` query param to transfer through auth flow, e.g. user id or some security token to verify authorization integrity
4. User registers on ARterra platform
5. After successful registration, the user is redirected back to your platform. You can warn him to verify the email.
6. User checks his email and verifies his email
7. ARterra platform preserves verification state and redirects user to your application
8. User has to sign in perform any actions

## OAuth2 Sign In (login)
1. Check that business partner is created and has assigned root user (BP ADMIN)
2. Authorize as BP ADMIN and copy client id and client secret for your application
3. Go to OAuth2 login page (https://staging.arterra.co/oauth2-login?client_id=client_2ac52934&response_type=code&redirect_uri=http://127.0.0.1:3002&state=some-state )
    - use your `client_id`
    - `redirect_uri` must match defined URL in BP settings
    - pass any value in `state` query param to transfer through auth flow, e.g. user id or some security token to verify authorization integrity
4. User authenticates on ARterra platform
5. After successful authentication user is redirected back to your application with authorization code (`code` query param)
    - `code` is valid for one time use during 3 minute
    - `state` keeps value passed on step 3
6. Exchange authorization code for access token
    - https://staging.arterra.co/api/api/#/auth/AuthController_issueAccessToken
7. Perform any action on behalf of the user using your API
