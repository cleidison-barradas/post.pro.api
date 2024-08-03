import { Module } from '@nestjs/common';
import { CategoryModule } from './category/v1/category.module';

@Module({
  imports: [CategoryModule]
})
export class AppModule { }
