import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import google from '@/components/svgs/google.svg'

const SVGS = {
  google,
}

const Icon = ({ name, ...props }) => {
  if (dynamicIconImports[name]) {
    const LucideIcon = dynamic(dynamicIconImports[name])
    return <LucideIcon {...props} />
  }

  if (SVGS[name]) {
    const SvgIcon = SVGS[name]
    return <SvgIcon {...props} />
  }

  return null
}

export default Icon
