import { Injectable } from '@nestjs/common';
import { ConfigService as IConfigService } from '@nestjs/config';
import { IEnvConfig } from './env-config.interface';

@Injectable()
export class EnvConfigService implements IEnvConfig {
  constructor(private configService: IConfigService) {}

  getAppPort(): number {
    return Number(this.configService.get<number>('PORT'));
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }
}
