import { EnvironmentConfigInterface } from 'src/app/modules/exercise3/interfaces/environment.config.interface';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: EnvironmentConfigInterface = {
  hashLocationStrategy: true,
  /** Refresh-rate time-string
   * like: '2min 10s' Gets parsed using
   * https://www.npmjs.com/package/timestring
   */
  refreshRate: '15s',
  /** Property containing the name of the environment */
  name: 'Production Environment',
  /** This is an optimized production build */
  production: true,
  /**
   * Flag set from environment configuration to run
   * powerbot in debug mode and enable additional and/or
   * experimental features
   */
  debug: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
