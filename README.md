**https://docs.arterra.co** is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Local Development

```shell
# Install dependencies
yarn

# This command starts a local development server and opens up a browser window.
# Most changes are reflected live without having to restart the server.
yarn start

# Build command generates static content into the `build` directory 
# and can be served using any static contents hosting service.
yarn build
```

## Deployment

1. Create MR to `dev` branch.
2. When new changes are added to `dev` branch GitHub Actions will build and deploy new version to `https://docs.arterra.co`.

### Deployment from local machine

These commands generate static web files and deploy to `gh-pages` branch on [Github](https://github.com/ARterraCo/arterraco.github.io)  

```shell
# Using SSH:
USE_SSH=true yarn deploy


# Not using SSH (You will be promoted to use your PAT):
GIT_USER=<Your GitHub username> yarn deploy
```
