import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../../../../prisma.service";

@Injectable()
export class CreateCategoryUseCase {
  constructor(private readonly prisma: PrismaService) { }

  async execute(input: Prisma.CategoryCreateInput) {
    try {
      const { name, type } = input;

      const category = await this.prisma.category.create({
        data: {
          name,
          type,
          updatedAt: new Date(),
        }
      });

      return category;

    } catch (error) {
      throw error;
    }
  }
}