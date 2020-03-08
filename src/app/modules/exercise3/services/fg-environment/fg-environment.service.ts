import { Injectable } from '@angular/core';
import { EnvironmentConfigInterface } from 'src/app/interfaces/interface.export';
import { environment } from '../../../../../environments/environment';
/**
 * Create base Interface and Class to allow to inject angular-environment variables as
 * service for usage in application and to allow override during unit/e2e-testing
 * https://stackoverflow.com/questions/48495665/extending-this-in-typescript-class-by-object-assign
 * */
interface BaseEnvironment extends EnvironmentConfigInterface {}
class BaseEnvironment implements EnvironmentConfigInterface {
  constructor(){
    Object.keys( environment ).forEach( key => this[ key ] = environment[ key ] );
  }
}
// BaseEnvironment.prototype.production = environment.production;
/**
 * Service to allow injection of angular environment-variables for
 * usage within the application
 */
@Injectable({ providedIn: 'root'})
export class FgEnvironmentService extends BaseEnvironment {}
