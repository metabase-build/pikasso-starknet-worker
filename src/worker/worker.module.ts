import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CORE_SERVICE_NAME, CORE_SERVICE_PACKAGE_NAME } from 'src/protobuf/interface-ts/core-service';
import { HandleProcessor } from './worker.processor';

import * as dotenv from 'dotenv';
dotenv.config();
const { NODE_ENV, CORE_PROTO_PATH, CORE_URL } = process.env;

@Module({
  imports: [
    BullModule.registerQueue({
      name: `${NODE_ENV + '_'}metabuild`,
      processors: [join(__dirname, 'worker.processor.js')],
      limiter: {
        max: 1,
        duration: 1000, // 1 day
        groupKey: 'jobGroupId',
      },
    }),
    ClientsModule.register([
      {
        name: CORE_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: CORE_SERVICE_PACKAGE_NAME,
          protoPath: join(process.cwd(), CORE_PROTO_PATH),
          url: CORE_URL,
        },
      },
    ]),
  ],
  providers: [HandleProcessor],
})
export class WorkerModule {}
