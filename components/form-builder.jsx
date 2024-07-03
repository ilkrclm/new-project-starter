import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export const FormBuilder = ({ fields, onSubmit }) => {
  const schema = z.object(
    fields.reduce((acc, field) => {
      acc[field.name] = field.validation || z.any()
      return acc
    }, {}),
  )

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                type={field.type}
                placeholder={field.placeholder}
                onChange={onChange}
                value={value || ''}
              />
            )}
          />
        )
      case 'checkbox':
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox checked={value} onCheckedChange={onChange} />
            )}
          />
        )
      case 'radio':
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup onValueChange={onChange} value={value}>
                {field.options?.map((option) => (
                  <div
                    key={option.value}
                    className='flex items-center space-x-2'
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={`${field.name}-${option.value}`}
                    />
                    <Label htmlFor={`${field.name}-${option.value}`}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />
        )
      case 'select':
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select onValueChange={onChange} value={value}>
                <SelectTrigger>
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )
      case 'textarea':
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Textarea
                placeholder={field.placeholder}
                onChange={onChange}
                value={value || ''}
              />
            )}
          />
        )
      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      {fields.map((field) => (
        <div key={field.name} className='space-y-2'>
          <Label htmlFor={field.name}>{field.label}</Label>
          {renderField(field)}
          {errors[field.name] && (
            <p className='text-sm text-red-500'>
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}
      <Button
        type='submit'
        disabled={isSubmitting}
        className={cn(isSubmitting && 'opacity-50')}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}
