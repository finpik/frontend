import { Align } from './Align'
import { ArrowDown, ArrowUp } from './Arrow'
import { ArrowBackIos } from './ArrowBackIos'
import { Calendar } from './Calendar'
import { Check1Default, Check1Selected } from './Check1'
import { Check2Default, Check2Selected } from './Check2'
import { Close } from './Close'
import { Compare } from './Compare'
import { Delete } from './Delete'
import { EllipseLong, EllipseShort } from './Ellipse'
import { Error } from './Error'
import { Go } from './Go'
import { More } from './More'
import { Mydata } from './Mydata'
import { RadioDefault, RadioSelected } from './Radio'
import { Search } from './Search'
import { Sort } from './Sort'
import { StarDefault, StarFilled } from './Star'
import { Trash } from './Trash'
import { Triangle1Down, Triangle1Up } from './Triangle1'
import { Triangle2Down, Triangle2Up } from './Triangle2'
import { Up } from './Up'

export interface IconProps {
  color?: string
  size?: number
}

export const iconMap = {
  mydata: Mydata,
  search: Search,
  'arrow-back-ios': ArrowBackIos,
  up: Up,
  compare: Compare,
  go: Go,
  more: More,
  trash: Trash,
  error: Error,
  sort: Sort,
  close: Close,
  calendar: Calendar,
  align: Align,
  delete: Delete,
  'star-default': StarDefault,
  'star-filled': StarFilled,
  'ellipse-short': EllipseShort,
  'ellipse-long': EllipseLong,
  'triangle1-down': Triangle1Down,
  'triangle1-up': Triangle1Up,
  'triangle2-down': Triangle2Down,
  'triangle2-up': Triangle2Up,
  'radio-selected': RadioSelected,
  'radio-default': RadioDefault,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'check1-default': Check1Default,
  'check1-selected': Check1Selected,
  'check2-default': Check2Default,
  'check2-selected': Check2Selected,
}

export interface IconComponentProps extends IconProps {
  name: keyof typeof iconMap
}

export const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = iconMap[name]

  return <IconComponent {...props} />
}
