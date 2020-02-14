import Check from './check.svg'
import CheckCircle from './check-circle.svg'
import PlusCircle from './plus-circle.svg'
import Trash from './trash.svg'
import Loading from './loading.svg'
const svgs = {
  check: Check,
  plus_circle: PlusCircle,
  trash: Trash,
  loading: Loading,
  check_circle: CheckCircle,
}

const getSrc = (key) => {
  return svgs[key] ? svgs[key] : key
}
export default svgs
export { getSrc }