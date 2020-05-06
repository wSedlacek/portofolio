// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  gitlabAPI: 'https://gitlab.com/api/v4',
  userId: '4406562',
  contentful: {
    space: 'i3zt395gkmh6',
    accessToken: 'Z2QnZtAWySeSo99iyKn9MygaIRLCalVQaTaddE8PVYo',

    contentTypeIds: {
      about: 'about',
      activity: 'activity',
    },
  },
};

/**
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
