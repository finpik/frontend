import { Icon, iconMap } from '../components/Icon'

const meta = {
  title: 'Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: '아이콘 컴포넌트입니다.',
      },
    },
  },
}

export default meta

const icons = Object.keys(iconMap)

export function Default() {
  return (
    <div className="grid grid-cols-4 bg-gray-3">
      {icons.map((key) => (
        <div key={key} className="flex-align">
          <Icon key={key} name={key as keyof typeof iconMap} />
          <p className="c1">{key}</p>
        </div>
      ))}
    </div>
  )
}
