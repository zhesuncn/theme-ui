import { ReactComponent as Check } from './check.svg'
import { ReactComponent as CheckCircle } from './check-circle.svg'
import { ReactComponent as PlusCircle } from './plus-circle.svg'
import { ReactComponent as Trash } from './trash.svg'
import { ReactComponent as Loading } from './loading.svg'
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Close } from './close.svg'
import { ReactComponent as Edit } from './edit.svg'
import { ReactComponent as ChevronLeft } from './chevron-left.svg'
import { ReactComponent as ChevronRight} from './chevron-right.svg'
import { ReactComponent as Spinner } from './Spinner.svg'
import { ReactComponent as Form } from './Form.svg'
import { ReactComponent as Help } from './Human_Help.svg'
import { ReactComponent as MinusCircle } from './minus-circle.svg'
import { ReactComponent as Paperclip } from './paperclip.svg'
import { ReactComponent as Read } from './read.svg'
import { ReactComponent as ToggleLeft } from './toggle-left.svg'
import { ReactComponent as ToggleRight } from './toggle-right.svg'
import { ReactComponent as Facebook } from './facebook.svg'
import { ReactComponent as Instagram } from './instagram.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
import { ReactComponent as Twitter } from './twitter.svg'
import { ReactComponent as Youtube } from './youtube.svg'

const svgs = {
  check: Check,
  plus_circle: PlusCircle,
  trash: Trash,
  loading: Loading,
  spinner: Spinner,
  check_circle: CheckCircle,
  arrow: Arrow,
  close: Close,
  edit: Edit,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  form: Form,
  help: Help,
  minus_circle: MinusCircle,
  paperclip: Paperclip,
  read: Read,
  toggle_left: ToggleLeft,
  toggle_right: ToggleRight,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube
}

const getSrc = (key) => {
  return svgs[key] ? svgs[key] : key
}

export default svgs
export { getSrc }
