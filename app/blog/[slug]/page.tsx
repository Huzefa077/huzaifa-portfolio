import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import PostContent from '@/components/Blog/PostContent';
import ReadingProgress from '@/components/Blog/ReadingProgress';
import ShareButton from '@/components/Blog/ShareButton';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { readImageSize, readPostImageSizes } from '@/lib/imageSize';
import { sharedOpenGraph, sharedTwitter } from '@/lib/metadata';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import {
  blogPostingNode,
  breadcrumbNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';
import { AUTHOR_NAME, formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const url = `${SITE_URL}/blog/${post.slug}/`;
  const pageTitle = `${post.title} | ${AUTHOR_NAME}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      ...sharedOpenGraph,
      type: 'article',
      title: pageTitle,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [AUTHOR_NAME],
    },
    twitter: {
      ...sharedTwitter,
      title: pageTitle,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/blog/${post.slug}/`;
  const blogUrl = `${SITE_URL}/blog/`;
  const imageSizes = readPostImageSizes(post.content);
  const coverSize = post.image ? readImageSize(post.image) : null;

  return (
    <PageWrapper mainClassName="page-main--blog">
      <SchemaGraph
        nodes={[
          blogPostingNode(post),
          breadcrumbNode(url, [
            { name: 'Home', url: HOME_URL },
            { name: 'Blog', url: blogUrl },
            { name: post.title, url },
          ]),
        ]}
      />
      <ReadingProgress />
      <article className="post-page">
        <header className="post-header">
          <time className="post-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-description">{post.description}</p>
          <div className="post-header-actions">
            <ShareButton title={post.title} url={url} className="post-share" />
          </div>
        </header>
        {post.image && post.imageAlt && coverSize ? (
          <figure className="post-cover">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={coverSize.width}
              height={coverSize.height}
              priority
              sizes="(max-width: 735px) 100vw, 46rem"
            />
          </figure>
        ) : null}
        <div className="prose">
          <PostContent content={post.content} imageSizes={imageSizes} />
        </div>
      </article>
    </PageWrapper>
  );
}
