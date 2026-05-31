import prisma from '@/lib/prisma'

export async function listCaseStudies({ take = 20, skip = 0 } = {}) {
    return prisma.caseStudy.findMany({
        take,
        skip,
        where: { deletedAt: null },
        orderBy: { createdAt: 'desc' as const },
    })
}

export async function getCaseStudyBySlug(slug: string) {
    return prisma.caseStudy.findUnique({ where: { slug } })
}

export async function createCaseStudy(data: any) {
    return prisma.caseStudy.create({ data })
}
