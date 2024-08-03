import { Body, Controller, Post } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CreateCategoryUseCase } from "./use-cases/create-category-usecase/create-category.usecase";

@Controller("/v1/categories")
export class CategoryController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase
  ) { }

  @Post("/create")
  async create(
    @Body() input: Prisma.CategoryCreateInput
  ) {
    return this.createCategoryUseCase.execute(input);
  }
}