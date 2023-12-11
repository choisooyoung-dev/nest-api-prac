import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  // service 쓰려면 꼭 provider 통해 의존성 주입을 해야한다.
  providers: [BoardsService],
})
export class BoardsModule {}
