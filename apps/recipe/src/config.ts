import { env, loadEnvFile } from '@recipes/config';

loadEnvFile();

export const config = {
  grpcUrl: `0.0.0.0:${env('RECIPE_GRPC_PORT', '50052')}`,
  /** Shared with the gateway, which verifies the tokens (see `pnpm secret`) */
  mongoUrl: env('MONGO_RECIPE_URL', 'mongodb://localhost:27019'),
  tokenTtl: env('TOKEN_TTL', '1h'),
};
