import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const TestimonialsSection = ({ testimonials }) => {
  return (
    <div className='grid grid-cols-1 gap-6 p-8 md:grid-cols-2'>
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardHeader>
            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{testimonial.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>"{testimonial.quote}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default TestimonialsSection
