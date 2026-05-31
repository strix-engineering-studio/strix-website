import prisma from '@/lib/prisma'

export async function listProducts({ take = 20, skip = 0 } = {}) {
    return prisma.product.findMany({
        take,
        skip,
        where: { deletedAt: null },
        orderBy: { createdAt: 'desc' as const },
    })
}

export async function getProductBySlug(slug: string) {
    return prisma.product.findUnique({ where: { slug } })
}

export async function createProduct(data: any) {
    return prisma.product.create({ data })
}

export async function updateProduct(id: string, data: any) {
    return prisma.product.update({ where: { id }, data })
}

export async function deleteProduct(id: string) {
    return prisma.product.update({ where: { id }, data: { deletedAt: new Date() } })
}
