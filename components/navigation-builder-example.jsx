import { Settings2Icon } from 'lucide-react'
import NavigationBuilder from './navigation-builder'
import { Button } from './ui/button'
import Link from 'next/link'

const Header = () => {
  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Products',
      children: [
        {
          label: 'Product A',
          href: '/products/a',
          description: 'Description for Product A',
        },
        {
          label: 'Product B',
          href: '/products/b',
          description: 'Description for Product B',
        },
        {
          label: 'Product C',
          href: '/products/c',
          description: 'Description for Product C',
        },
      ],
      featured: {
        title: 'New Product',
        description: 'Check out our latest product release!',
        href: '/products/new',
        icon: <Settings2Icon className='h-6 w-6' />,
      },
    },
    { label: 'Services', href: '/services' },
    {
      label: 'Resources',
      children: [
        {
          label: 'Blog',
          href: '/blog',
          description: 'Read our latest articles',
        },
        {
          label: 'Documentation',
          href: '/docs',
          description: 'Learn how to use our products',
        },
        {
          label: 'FAQ',
          href: '/faq',
          description: 'Find answers to common questions',
        },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className='container mx-auto px-4 py-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Logo />
          <NavigationBuilder items={navigationItems} />
        </div>
        <Button>Sign In</Button>
      </div>
    </header>
  )
}

const Logo = () => (
  <Link href='/' className='text-2xl font-bold'>
    Your Logo
  </Link>
)

export default Header
