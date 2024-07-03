import * as z from 'zod'
import { FormBuilder } from './form-builder'

const ParentComponent = () => {
  const fields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      validation: z.string().min(2, 'Name must be at least 2 characters'),
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      validation: z.string().email('Invalid email address'),
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      validation: z.string().min(8, 'Password must be at least 8 characters'),
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      placeholder: 'Enter your age',
      validation: z.number().min(18, 'You must be at least 18 years old'),
    },
    {
      name: 'terms',
      label: 'I agree to the terms and conditions',
      type: 'checkbox',
      validation: z
        .boolean()
        .refine((val) => val === true, 'You must agree to the terms'),
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
      validation: z.string().min(1, 'Please select a gender'),
    },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      placeholder: 'Select your country',
      options: [
        { label: 'United States', value: 'us' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'Canada', value: 'ca' },
      ],
      validation: z.string().min(1, 'Please select a country'),
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
      placeholder: 'Tell us about yourself',
      validation: z.string().max(500, 'Bio must not exceed 500 characters'),
    },
  ]

  const handleSubmit = async (data) => {
    try {
      // Send data to API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Handle successful submission
      console.log('Form submitted successfully')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl mb-4 font-bold'>Registration Form</h1>
      <FormBuilder fields={fields} onSubmit={handleSubmit} />
    </div>
  )
}

export default ParentComponent
