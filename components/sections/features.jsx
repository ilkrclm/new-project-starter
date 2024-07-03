import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const FeaturesSection = ({ features }) => {
  return (
    <div className='grid grid-cols-1 gap-6 p-8 md:grid-cols-3'>
      {features.map((feature, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FeaturesSection
