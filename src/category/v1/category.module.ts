import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CreateCategoryUseCase } from "./use-cases/create-category-usecase/create-category.usecase";
import { PrismaService } from "../../prisma.service";

@Module({
  controllers: [CategoryController],
  providers: [
    PrismaService,
    CreateCategoryUseCase
  ],
})
export class CategoryModule { }