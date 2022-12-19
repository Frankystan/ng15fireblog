// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    //   firebase: {
    //     projectId: 'workfield-50192',
    //     appId: '1:353485738633:web:296c3a8b39b6fee74b6c58',
    //     storageBucket: 'workfield-50192.appspot.com',
    //     apiKey: 'AIzaSyAI_AURZVA58Xw2hbHGW-IzqzCzKo3IClI',
    //     authDomain: 'workfield-50192.firebaseapp.com',
    //     messagingSenderId: '353485738633',
    //   },
    recaptcha: {
        siteKey: "6Lc04xQUAAAAACQ7vQYUfQqF-SI16BD9g3rtt7bt",
        clientKey: "6Lc04xQUAAAAAHGgj0DaIVLzJrQUmr_-oXrbhbu5"
    },
    uploadFolder: "uploads",
    defaultLanguage: "es-ES",
    supportedLanguages: ["en-US", "es-ES"],
    supportedLanguagesEquivalence: [
        { "en-US": "English" },
        { "es-ES": "Español" }
    ],
    firebase: {
        apiKey: "AIzaSyC9P9HaXL13KEvjpObGD6hXMofhVi1wrQ4",
        authDomain: "ng14fireblog.firebaseapp.com",
        projectId: "ng14fireblog",
        storageBucket: "ng14fireblog.appspot.com",
        messagingSenderId: "666659177961",
        appId: "1:666659177961:web:e263d7441b9bffc9883778",
        measurementId: "G-3K3SL7G8NL"
    },
    production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
