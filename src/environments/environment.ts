// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAnr-s2-1Rg9AlYIC-TadAqurW-5X-y7RE",
    authDomain: "whoqol-app.firebaseapp.com",
    databaseURL: "https://whoqol-app.firebaseio.com",
    projectId: "whoqol-app",
    storageBucket: "whoqol-app.appspot.com",
    messagingSenderId: "109335354180"
  }
};
