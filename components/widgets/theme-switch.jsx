import { useTheme } from 'next-themes'
import { Switch } from '../ui/switch'

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <Switch
        onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </>
  )
}
