import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0985651795Az',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    OrderModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
