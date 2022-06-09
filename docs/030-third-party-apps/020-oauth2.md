# OAuth2

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
