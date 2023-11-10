import * as openApi from 'openapi-typescript-codegen';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';

const generateOpenApiTypes = async () => {
  console.log('Exporting Angular OpenApi types...');
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule]
  }).compile();
  const app = moduleRef.createNestApplication();
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, options, {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  });
  fs.writeFileSync('openapi.json', JSON.stringify(document, null, 2));

  const apiGenerationOptions = {
    input: './openapi.json',
    output: '../client/src/open-api',
    exportSchemas: false,
    exportServices: true,
    exportCore: true
  };

  await openApi.generate(apiGenerationOptions);
  await app.close();
  console.log('Done');
};

// eslint-disable-next-line
generateOpenApiTypes().then().catch(err => console.log(err));
