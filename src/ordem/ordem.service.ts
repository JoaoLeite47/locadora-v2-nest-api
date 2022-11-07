import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle.error.utils';
import { CreateOrdemDto } from './dto/create-ordem.dto';

@Injectable()
export class OrdemService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOrdemDto: CreateOrdemDto) {
    const data: Prisma.OrdemCreateInput = {
      usuario: {
        connect: {
          id: createOrdemDto.usarioId,
        },
      },
      loja: {
        connect: {
          number: createOrdemDto.lojaNumber,
        },
      },
      veiculos: {
        createMany: {
          data: createOrdemDto.veiculos.map((CreateOrdemVeiculoDto) => ({
            veiculoId: CreateOrdemVeiculoDto.productId,
            quantity: CreateOrdemVeiculoDto.quantity,
            description: CreateOrdemVeiculoDto.description,
          })),
        },
      },
    }; // status 422

    return this.prisma.ordem
      .create({
        data,
        select: {
          id: true,
          loja: {
            select: {
              number: true,
            },
          },
          usuario: {
            select: {
              name: true,
            },
          },
          veiculos: {
            select: {
              veiculo: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      })
      .catch(handleError);
  }

  findAll() {
    return this.prisma.ordem.findMany({
      select: {
        id: true,
        loja: {
          select: {
            number: true,
          },
        },
        usuario: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            veiculos: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.ordem.findUnique({
      where: { id },
      include: {
        usuario: {
          select: {
            name: true,
          },
        },
        loja: {
          select: {
            number: true,
          },
        },
        veiculos: {
          select: {
            veiculo: {
              select: {
                id: true,
                name: true,
                price: true,
                image: true,
                description: true,
              },
            },
          },
        },
      },
    });
  }
}
