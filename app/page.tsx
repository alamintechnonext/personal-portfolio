import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Award, BookOpen, BriefcaseIcon, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container px-4 py-12 md:py-24'>
      {/* Hero Section with Image */}
      <section className='group mb-16 flex flex-col-reverse items-center gap-12 md:flex-row'>
        <div className='flex-1 text-center md:text-left'>
          <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
            Project management professional
          </h1>
          <p className='mb-8 max-w-[700px] text-xl text-muted-foreground'>
            Certified Scrum Master (CSM) with 5+ years of experience in Product
            & Project Management, specializing in Agile methodologies and team
            leadership.
          </p>
          <div className='flex justify-center gap-4 md:justify-start'>
            <Button asChild size='lg'>
              <Link href='/projects'>View Projects</Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='/contact'>Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className='relative h-[280px] w-[280px] overflow-hidden rounded-full border-8 border-muted transition-all duration-300 group-hover:border-gray-300 md:h-[400px] md:w-[400px]'>
          <Image
            src='https://images.unsplash.com/photo-1560250097-0b93528c311a'
            alt='Professional Profile'
            fill
            className='object-cover object-top'
            priority
          />
        </div>
      </section>

      {/* Key Areas Section */}
      <section className='mb-16'>
        <h2 className='mb-12 text-center text-3xl font-bold'>
          Key Areas of Expertise
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <Card className='group p-6 transition-all duration-300 hover:border-blue-400'>
            <BriefcaseIcon className='mb-4 h-12 w-12 text-primary transition-all duration-300 group-hover:text-[#4db5ff] dark:group-hover:text-primary' />
            <h3 className='mb-2 text-xl font-semibold'>Project Management</h3>
            <p className='text-muted-foreground'>
              Expert in planning, scheduling, and delivering complex projects on
              time and within budget.
            </p>
          </Card>
          <Card className='group p-6 transition-all duration-300 hover:border-blue-400'>
            <Users className='mb-4 h-12 w-12 text-primary transition-all duration-300 group-hover:text-[#4db5ff] dark:group-hover:text-primary' />
            <h3 className='mb-2 text-xl font-semibold'>Team Leadership</h3>
            <p className='text-muted-foreground'>
              Skilled in team building, mentoring, and fostering a collaborative
              work environment.
            </p>
          </Card>
          <Card className='group p-6 transition-all duration-300 hover:border-blue-400'>
            <Award className='mb-4 h-12 w-12 text-primary transition-all duration-300 group-hover:text-[#4db5ff] dark:group-hover:text-primary' />
            <h3 className='mb-2 text-xl font-semibold'>Agile & Scrum</h3>
            <p className='text-muted-foreground'>
              Certified Scrum Master with extensive experience in Agile
              methodologies and practices.
            </p>
          </Card>
          <Card className='group p-6 transition-all duration-300 hover:border-blue-400'>
            <BookOpen className='mb-4 h-12 w-12 text-primary transition-all duration-300 group-hover:text-[#4db5ff] dark:group-hover:text-primary' />
            <h3 className='mb-2 text-xl font-semibold'>Strategic Planning</h3>
            <p className='text-muted-foreground'>
              Expertise in developing and executing strategic initiatives
              aligned with business goals.
            </p>
          </Card>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-3xl font-bold'>Featured Projects</h2>
          <Button asChild variant='ghost'>
            <Link href='/projects'>View All Projects →</Link>
          </Button>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <Card className='group p-6 transition-all duration-300 hover:border-blue-400'>
            <h3 className='mb-2 text-xl font-semibold'>
              Enterprise Digital Transformation
            </h3>
            <p className='mb-4 text-muted-foreground'>
              Led a team of 15 in implementing a company-wide digital
              transformation initiative, resulting in 40% improved operational
              efficiency.
            </p>
            <Button asChild variant='outline'>
              <Link href='https://google.com' target='_blank'>
                Learn More
              </Link>
            </Button>
          </Card>
          <Card className='group p-6 transition-all duration-300 hover:border-blue-400'>
            <h3 className='mb-2 text-xl font-semibold'>
              Agile Implementation Program
            </h3>
            <p className='mb-4 text-muted-foreground'>
              Successfully introduced Agile methodologies across 5 departments,
              reducing project delivery time by 30%.
            </p>
            <Button asChild variant='outline'>
              <Link href='https://google.com' target='_blank'>
                Learn More
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
