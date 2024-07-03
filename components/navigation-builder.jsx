import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'

const NavigationBuilder = ({ items }) => {
  const { pathname } = useRouter()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.children ? (
              <NavigationMenuDropdown item={item} />
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === item.href && 'text-primary',
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const NavigationMenuDropdown = ({ item }) => {
  return (
    <>
      <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
          <li className='row-span-3'>
            <NavigationMenuLink asChild>
              <a
                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                href={item.featured?.href}
              >
                {item.featured?.icon}
                <div className='text-lg mb-2 mt-4 font-medium'>
                  {item.featured?.title}
                </div>
                <p className='text-sm leading-tight text-muted-foreground'>
                  {item.featured?.description}
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          {item.children.map((child, childIndex) => (
            <ListItem key={childIndex} href={child.href} title={child.label}>
              {child.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='text-sm line-clamp-2 leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'

export default NavigationBuilder
