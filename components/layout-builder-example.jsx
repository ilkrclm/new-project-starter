import LayoutBuilder from './layout-builder'

const ExampleLayoutBuilder = () => {
  const pageLayout = [
    {
      type: 'hero',
      title: 'Hero Section',
      content: {
        heading: 'Welcome to Our Site',
        subheading: 'Discover amazing features and services',
        ctaText: 'Get Started',
        ctaLink: '/signup',
        image: '/bg.jpg',
      },
    },
    {
      type: 'features',
      title: 'Features',
      content: {
        features: [
          { title: 'Feature 1', description: 'Description of feature 1' },
          { title: 'Feature 2', description: 'Description of feature 2' },
          { title: 'Feature 3', description: 'Description of feature 3' },
        ],
      },
    },
    {
      type: 'testimonials',
      title: 'Testimonials',
      content: {
        testimonials: [
          {
            name: 'John Doe',
            avatar: '/avatars/john.jpg',
            quote: 'This product is amazing!',
          },
          {
            name: 'Jane Smith',
            avatar: '/avatars/jane.jpg',
            quote: 'I love using this service.',
          },
        ],
      },
    },
    {
      type: 'cta',
      title: 'Call to Action',
      content: {
        heading: 'Ready to get started?',
        subheading: 'Sign up now and enjoy our services',
        ctaText: 'Sign Up',
        ctaLink: '/signup',
      },
    },
  ]

  return <LayoutBuilder sections={pageLayout} />
}

export default ExampleLayoutBuilder
