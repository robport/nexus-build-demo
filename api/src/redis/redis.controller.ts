import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RedisClientType, createClient } from 'redis';

@ApiTags('redis')
@Controller('redis')
export class RedisController {

  redisClient: RedisClientType;

  constructor() {
  }

  private async connect() {
    if (!this.redisClient) {
      this.redisClient = createClient({
        url: process.env['REDIS_URL'],
        password: process.env['REDIS_PASSWORD']
      });
      await this.redisClient.connect();
    }
  }

  @Get()
  async getAllKeys(
    @Param() key: string
  ): Promise<string[]> {
    await this.connect();
    return await this.redisClient.keys('*');
  }

  @Get(':key')
  async getKey(
    @Param('key') key: string
  ): Promise<string> {
    await this.connect();
    return await this.redisClient.get(key);
  }

  @Post()
  async post(
    @Body() body: {
      key: string,
      value: string
    }
  ) {
    await this.connect();
    await this.redisClient.set(body.key, body.value);
  }
}
