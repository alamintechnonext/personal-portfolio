'use client';

import { blog_post as BLOG } from '@/local-data/blog';
import { BlogPostDataProps } from '@/types/globalTypes';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogPage = () => {
  const router = useParams();
  const id = router.slug;

  const [blogPost, setBlogPost] = useState<BlogPostDataProps | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (() => {
      setLoading(true);
      const find_post = BLOG.find((i) => String(i.id) === String(id));
      setBlogPost(find_post);
      setLoading(false);
    })();
  }, [id]);

  return (
    <div className='container py-12'>
      {blogPost && !loading ? (
        <div className=''>
          <h2 className='mb-2 text-[35px] font-semibold leading-tight text-black dark:text-white md:mb-0 lg:text-[50px]'>
            {blogPost.title}
          </h2>
          <div className='text-sm text-muted-foreground'>
            <time dateTime={blogPost.date}>
              {new Date(blogPost.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className='mx-2'>·</span>
            <span>{blogPost.readTime}</span>
          </div>
          <p className='pt-5 text-xl text-black dark:text-white'>
            {blogPost.details}
          </p>
        </div>
      ) : loading ? (
        <div>
          <div className='h-[400px] w-full animate-pulse bg-gray-300'></div>
        </div>
      ) : (
        <div>
          <h1 className='py-4 text-center text-4xl font-bold text-black dark:text-white lg:py-8'>
            Result is not found
          </h1>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
