// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from 'helpers/prisma';
import { fetchPostList, fetchPostListRaw } from 'helpers/mdx';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const list = await fetchPostListRaw();
    const data = list.sort((a, b) => a.releasedAt.localeCompare(b.releasedAt))
                     .map(item => ({
                        slug: item.slug,
                        title: item.title,
                        brief: item.brief,
                        published: item.published,
                        publishedAt: item.releasedAt,
                     }));

    
    await prisma.post.deleteMany({ where: { id: { gt: 0 } } });
    const { count } = await prisma.post.createMany({ data });

    res.status(200).send(`${count} posts are created`);
}
