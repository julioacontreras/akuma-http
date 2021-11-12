import { Config } from './config';
import { Action } from 'akuma-microservice-framework/lib/adapters/action-protocol/transport/action';
import { SecurityAccess } from 'akuma-microservice-framework/lib/adapters/action-protocol/security-access';
export declare const initializeHTTP: (config: Config, actions: Map<string, Action>, securityAccess: SecurityAccess, app: any) => void;
