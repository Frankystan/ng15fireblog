// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	firebase: {
		projectId: "ng15fireblog-fd04a",
		appId: "1:942933187233:web:27cb892cf9ab331eb4aee0",
		storageBucket: "ng15fireblog-fd04a.appspot.com",
		locationId: "europe-west2",
		apiKey: "AIzaSyBaK9KEkAhVvEVhIeTWmTsKC_PpQ2Ii4Yw",
		authDomain: "ng15fireblog-fd04a.firebaseapp.com",
		messagingSenderId: "942933187233",
		measurementId: "G-92WGT8FS6V",
	},
	recaptcha: {
		siteKey: "6Lc04xQUAAAAACQ7vQYUfQqF-SI16BD9g3rtt7bt",
		clientKey: "6Lc04xQUAAAAAHGgj0DaIVLzJrQUmr_-oXrbhbu5",
	},
	uploadFolder: "uploads",
	defaultLanguage: "es-ES",
	supportedLanguages: ["en-US", "es-ES"],
	supportedLanguagesEquivalence: [
		{ "en-US": "English" },
		{ "es-ES": "Español" },
	],
	production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
