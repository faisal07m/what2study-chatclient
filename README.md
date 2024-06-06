### what2study - chat client

#### To run Locally with the webportal (https://github.com/faisal07m/what2studyWebsite.git)
1. Install dependencies:

```bash
npm i  --legacy-peer-deps
```

2. Run build and serve command to serve js and css for the chat client
```bash
npm run build
npm run serve
``` 

#### To view the chat client on any website:

1. **Copy the contents** of the file `./chat/what2StudyLoader.js` and paste in browser console of the website you wish to view on.

## To publish NPM Package:

1. Ensure that `npmPackageConfig` is enabled in `rollup.config.js`
1. Run `npm run build`
1. Change the version in `package.json` and run `npm publish`
