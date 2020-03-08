import { EnvironmentConfigInterface } from 'src/app/modules/exercise3/interfaces/environment.config.interface';

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
