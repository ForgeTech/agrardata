export interface EnvironmentConfigInterface {
    /** Use hash-based navigation strategy */
    hashLocationStrategy: boolean;
    /** Refresh-rate time-string
     * like: '2min 10s' Gets parsed using
     * https://www.npmjs.com/package/timestring
     * */
    refreshRate: string;
    /** Property containing the name of the environment */
    name: string;
    /** This is an optimized production build */
    production: boolean;
    /**
     * Flag set from environment configuration to run
     * powerbot in debug mode and enable additional and/or
     * experimental features
     */
    debug: boolean;
}
