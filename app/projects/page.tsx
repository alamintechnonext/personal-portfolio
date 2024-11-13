import { Card } from '@/components/ui/card';
import { projects_data } from '@/local-data/projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className='container py-12'>
      <h1 className='mb-8 text-center text-4xl font-bold lg:text-start'>
        Project portfolio
      </h1>
      <div className='grid gap-6'>
        {projects_data.map((project, index) => (
          <Link
            key={project.id}
            href={project.liveURL ? project.liveURL : '#'}
            target='_blank'
          >
            <Card className='group border p-6 transition-all duration-300 hover:border-blue-400'>
              <div className='mb-4 flex flex-col justify-between md:flex-row'>
                <h2 className='mb-2 text-2xl font-semibold md:mb-0'>
                  {project.title}
                </h2>
                <span className='text-muted-foreground'>
                  Duration: {project.duration}
                </span>
              </div>
              <p className='mb-4 text-muted-foreground'>
                {project.description}
              </p>
              <div className='mb-4'>
                <h3 className='mb-2 font-semibold'>Key Impacts:</h3>
                <ul className='list-inside list-disc space-y-1 text-muted-foreground'>
                  {project.impact.map((impact, i) => (
                    <li key={i}>{impact}</li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag, i) => (
                  <div
                    key={i}
                    className='group me-1 rounded-full border-[1px] border-transparent bg-gray-200 px-2 py-1 text-[13px] transition-all duration-300 group-hover:border-blue-300 dark:border-blue-400 dark:bg-transparent dark:text-white'
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
