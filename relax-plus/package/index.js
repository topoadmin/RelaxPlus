import pkg from '../../package.json'
// General
import Button from './button/index'
import Icon from './icon/index'
import Tooltip from './tooltip/index'

// Feedback
import Message from './message/index'
import Notice from './notice/index'
import modal from './modal/index'

// Layout
import Row from './row/index'
import Col from './col/index'

// Data Entry 
import Switch from './switch/index'
import Checkbox from './checkbox/index'
import CheckboxGroup from './checkbox-group/index'
import Input from './input/index'
import Select from './select/index';
import SelectOption from './select-option/index';
import Slider from './slider/index'
import DatePicker from './date-picker/index'

// Data Display
import Calendar from './calendar/index'
import Carousel from './carousel/index'
import CarouselItem from './carousel-item/index'
import Tabs from './tabs/index'
import TabPane from './tab-pane/index'

const {Modal, Modals} = modal

const components = [
  Button,
  Icon,
  Switch,
  Row,
  Col,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SelectOption,
  Modal,
  Tooltip,
  Slider,
  Calendar,
  DatePicker,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane
]


const install = function (app) {
  components.forEach((component) => {
    app.component('x'+component.name, component)
  })

  applyOptions(app)
}

function applyOptions(app){
  app.config.globalProperties.$message = Message
  app.config.globalProperties.$notice = Notice
  app.config.globalProperties.$modal = Modals
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: pkg.version,
  install,
  Button,
  Icon,
  Message,
  Switch,
  Notice,
  Row,
  Col,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SelectOption,
  Modal,
  Tooltip,
  Slider,
  Calendar,
  DatePicker,
  Carousel,
  CarouselItem
}
