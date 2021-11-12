import {Action} from 'akuma-microservice-framework/lib/adapters/action-protocol/transport/action';
import {SecurityAccess} from 'akuma-microservice-framework/lib/adapters/action-protocol/security-access';
import {ProtocolServerAdapter} from 'akuma-microservice-framework/lib/adapters/action-protocol/transport/server';
import {initializeHTTP} from './http';
import {Config} from './config';

export const HTTPServer = {
  create: (
    actions: Map<string, Action>,
    configInstance: unknown,
    securityAccess: SecurityAccess,
    app: any
  ) => {
    const config = configInstance as Config;
    initializeHTTP(config, actions, securityAccess, app);
  },
} as ProtocolServerAdapter;
