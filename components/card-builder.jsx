import React from 'react'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const CardBuilder = ({ type, data, className, ...props }) => {
  const cardTypes = {
    product: ProductCard,
    info: InfoCard,
    profile: ProfileCard,
    feature: FeatureCard,
  }

  const CardComponent = cardTypes[type] || DefaultCard

  return <CardComponent data={data} className={className} {...props} />
}

const DefaultCard = ({ data, className, ...props }) => (
  <Card className={cn('w-full', className)} {...props}>
    <CardHeader>
      <CardTitle>{data.title}</CardTitle>
      {data.description && (
        <CardDescription>{data.description}</CardDescription>
      )}
    </CardHeader>
    {data.content && <CardContent>{data.content}</CardContent>}
    {data.footer && <CardFooter>{data.footer}</CardFooter>}
  </Card>
)

const ProductCard = ({ data, className, ...props }) => (
  <Card className={cn('w-full max-w-sm', className)} {...props}>
    <CardHeader>
      <img
        src={data.image}
        alt={data.title}
        className='mb-4 h-48 w-full rounded-md object-cover'
      />
      <CardTitle>{data.title}</CardTitle>
      <CardDescription>{data.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className='flex items-center justify-between'>
        <span className='text-2xl font-bold'>${data.price}</span>
        <Badge>{data.category}</Badge>
      </div>
    </CardContent>
    <CardFooter>
      <Button className='w-full'>Add to Cart</Button>
    </CardFooter>
  </Card>
)

const InfoCard = ({ data, className, ...props }) => (
  <Card className={cn('w-full', className)} {...props}>
    <CardHeader>
      <CardTitle>{data.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{data.content}</p>
    </CardContent>
    <CardFooter>
      <Button variant='outline' asChild>
        <a href={data.linkUrl}>{data.linkText}</a>
      </Button>
    </CardFooter>
  </Card>
)

const ProfileCard = ({ data, className, ...props }) => (
  <Card className={cn('w-full max-w-md', className)} {...props}>
    <CardHeader>
      <div className='flex items-center space-x-4'>
        <Avatar>
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.role}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p>{data.bio}</p>
    </CardContent>
    <CardFooter className='flex justify-between'>
      <Button variant='outline' asChild>
        <a href={`mailto:${data.email}`}>Contact</a>
      </Button>
      <Button variant='outline' asChild>
        <a href={data.profileUrl}>View Profile</a>
      </Button>
    </CardFooter>
  </Card>
)

const FeatureCard = ({ data, className, ...props }) => (
  <Card className={cn('w-full', className)} {...props}>
    <CardHeader>
      <div className='flex items-center space-x-2'>
        {data.icon}
        <CardTitle>{data.title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p>{data.description}</p>
    </CardContent>
  </Card>
)

export default CardBuilder
