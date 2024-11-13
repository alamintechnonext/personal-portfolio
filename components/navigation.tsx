'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const routes = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-[80px] items-center'>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'
            >
              <Menu className='h-9 w-9' />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='pl-1 pr-0'>
            <div className='px-5'>
              <Link
                href='/'
                className='flex items-center'
                onClick={() => setOpen(false)}
              >
                <span className='text-2xl font-bold uppercase'>Jon</span>
              </Link>
            </div>
            <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
              <div className='flex flex-col space-y-2'>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'text-xl text-muted-foreground transition-colors hover:text-primary',
                      pathname === route.href && 'text-primary'
                    )}
                  >
                    <p className='mb-4'>{route.label}</p>
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <div className='flex w-full justify-between'>
          <div className='hidden lg:flex'>
            <Link href='/' className='mr-6 flex items-center space-x-2'>
              <span className='me-5 text-xl font-bold uppercase'>Jon</span>
            </Link>
            <nav className='flex items-center space-x-6 text-sm font-medium'>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'relative text-xl transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:text-primary after:hover:w-full dark:after:bg-white',
                    pathname === route.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex items-center'>
            <Button
              variant='ghost'
              size='icon'
              aria-label='Toggle Theme'
              className=''
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
