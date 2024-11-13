'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: 'Message Sent!',
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='container py-12'>
      <h1 className='mb-8 text-4xl font-bold'>Get in Touch</h1>

      <div className='grid gap-8 md:grid-cols-2'>
        <div>
          <h2 className='mb-4 text-2xl font-semibold'>Contact Information</h2>
          <div className='space-y-6'>
            <Card className='p-4'>
              <div className='flex items-center space-x-3'>
                <Mail className='h-5 w-5 text-primary' />
                <div>
                  <p className='font-medium'>Email</p>
                  <p className='text-sm text-muted-foreground'>
                    your.email@example.com
                  </p>
                </div>
              </div>
            </Card>
            <Card className='p-4'>
              <div className='flex items-center space-x-3'>
                <Phone className='h-5 w-5 text-primary' />
                <div>
                  <p className='font-medium'>Phone</p>
                  <p className='text-sm text-muted-foreground'>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </Card>
            <Card className='p-4'>
              <div className='flex items-center space-x-3'>
                <MessageSquare className='h-5 w-5 text-primary' />
                <div>
                  <p className='font-medium'>Social Media</p>
                  <div className='text-sm text-muted-foreground'>
                    <a
                      href='https://linkedin.com'
                      className='transition-all duration-300 hover:text-primary'
                    >
                      LinkedIn
                    </a>
                    <span className='mx-2'>·</span>
                    <a
                      href='https://twitter.com transition-all duration-300'
                      className='hover:text-primary'
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2 className='mb-4 text-2xl font-semibold'>Send a Message</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <input
                type='text'
                placeholder='Your Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='focus:shadow-outline block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-3 leading-normal hover:border-blue-400 focus:border-blue-400 focus:outline-none dark:bg-transparent'
              />
            </div>
            <div>
              <input
                type='email'
                placeholder='Your Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='focus:shadow-outline block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-3 leading-normal hover:border-blue-400 focus:border-blue-400 focus:outline-none dark:bg-transparent'
              />
            </div>
            <div>
              <input
                placeholder='Subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                className='focus:shadow-outline block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-3 leading-normal hover:border-blue-400 focus:border-blue-400 focus:outline-none dark:bg-transparent'
              />
            </div>
            <div>
              <textarea
                placeholder='Your Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                className='focus:shadow-outline block min-h-[150px] w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-3 leading-normal hover:border-blue-400 focus:border-blue-400 focus:outline-none dark:bg-transparent'
              />
            </div>
            <Button type='submit' className='w-full'>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
