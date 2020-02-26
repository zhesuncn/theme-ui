import { ReactComponent as Check } from './check.svg'
import { ReactComponent as CheckCircle } from './check-circle.svg'
import { ReactComponent as PlusCircle } from './plus-circle.svg'
import { ReactComponent as Trash } from './trash.svg'
import { ReactComponent as Loading } from './loading.svg'
import { ReactComponent as LoadingWhite } from './loading-white.svg'
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Close } from './close.svg'
import { ReactComponent as Edit } from './edit.svg'

const svgs = {
  check: Check,
  plus_circle: PlusCircle,
  trash: Trash,
  loading: Loading,
  loading_inverse: LoadingWhite,
  check_circle: CheckCircle,
  arrow: Arrow,
  close: Close,
  edit: Edit
}

const getSrc = (key) => {
  return svgs[key] ? svgs[key] : key
}

export default svgs
export { getSrc }