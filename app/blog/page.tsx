'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { blog_post } from '@/local-data/blog';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blog_post.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className='container py-12'>
      <div className='mb-8 items-start justify-between sm:flex'>
        <h1 className='mb-8 text-center text-4xl font-bold lg:text-start'>
          Blog & Insights
        </h1>
        <div className='relative sm:max-w-md'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <input
            type='text'
            id='name'
            placeholder='Search posts...'
            className='focus:shadow-outline block w-[100%] appearance-none rounded-md border border-gray-300 bg-white px-3 py-3 pl-10 leading-normal hover:border-blue-400 focus:border-blue-400 focus:outline-none dark:bg-transparent'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className='grid gap-6'>
        {filteredPosts?.length ? (
          filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className='group border p-6 py-12 transition-all duration-300 hover:border-blue-400'>
                <div className='mb-4 flex flex-col justify-between md:flex-row'>
                  <h2 className='mb-2 text-2xl font-semibold transition-all duration-300 group-hover:text-blue-500 md:mb-0'>
                    {post.title}
                  </h2>
                  <div className='text-sm text-muted-foreground'>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className='mx-2'>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <p className='mb-4 text-muted-foreground'>
                  {post.shortDescription}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag, i) => (
                    <div
                      className='group me-1 rounded-full border-[1px] border-transparent bg-gray-200 px-2 py-1 text-[13px] transition-all duration-300 group-hover:border-blue-300 dark:border-blue-400 dark:bg-transparent dark:text-white'
                      key={i}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <div>
            <h1 className='pt-5 text-center text-4xl font-bold dark:text-white lg:pt-12'>
              No data if found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
