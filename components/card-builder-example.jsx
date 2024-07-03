import { RocketIcon, LightningBoltIcon, StarIcon } from '@radix-ui/react-icons'
import CardBuilder from './card-builder'

const ExampleCardBuilder = () => {
  const productData = {
    title: 'Premium Headphones',
    description: 'High-quality noise-cancelling headphones',
    image: '/bg.jpg',
    price: 199.99,
    category: 'Electronics',
  }

  const infoData = {
    title: 'Did You Know?',
    content:
      'The average person spends 6 months of their life waiting for red lights to turn green.',
    linkText: 'Learn More',
    linkUrl: '/facts',
  }

  const profileData = {
    name: 'Jane Doe',
    role: 'Senior Developer',
    avatar: '/images/jane-doe.jpg',
    bio: 'Passionate about creating user-friendly web applications and solving complex problems.',
    email: 'jane.doe@example.com',
    profileUrl: '/team/jane-doe',
  }

  const featureData = [
    {
      title: 'Lightning Fast',
      description: 'Our product delivers results in milliseconds.',
      icon: <LightningBoltIcon className='h-6 w-6' />,
    },
    {
      title: 'Easy to Use',
      description: 'Intuitive interface that anyone can master quickly.',
      icon: <RocketIcon className='h-6 w-6' />,
    },
    {
      title: 'Award Winning',
      description: 'Recognized for excellence in our industry.',
      icon: <StarIcon className='h-6 w-6' />,
    },
  ]

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl mb-8 font-bold'>Card Examples</h1>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <CardBuilder type='product' data={productData} />
        <CardBuilder type='info' data={infoData} />
        <CardBuilder type='profile' data={profileData} />
      </div>

      <h2 className='text-2xl mb-6 mt-12 font-bold'>Feature Cards</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {featureData.map((feature, index) => (
          <CardBuilder key={index} type='feature' data={feature} />
        ))}
      </div>
    </div>
  )
}

export default ExampleCardBuilder
