import {
  Tag,
  Divider,
  Select,
  Option,
  OptionGroup,
  Popover,
  Icon,
  Link,
  Image,
} from 'element-ui'

const components = {
  [Tag.name]: Tag, // Tag.name = ElTag
  [Divider.name]: Divider,
  [Select.name]: Select,
  [Option.name]: Option,
  [OptionGroup.name]: OptionGroup,
  [Popover.name]: Popover,
  [Icon.name]: Icon,
  [Link.name]: Link,
  [Image.name]: Image,
}
/**
 * 组件是否存在
 *
 * @param {*} name 组件名 ElTag
 * @return {Boolean}
 */
function hasCompt(name) {
  return Object.prototype.hasOwnProperty.call(components, name)
}

/**
 *
 *
 * @export
 * @param {string[]|string} name
 * @return {component[]}
 */
export default function mapElementUI(name) {
  let result = {}
  if (typeof name === String && hasCompt(name)) {
    result[name] = components[name]
  } else if (Array.isArray(name)) {
    for (let key of name) {
      if (hasCompt(key)) {
        result[key] = components[key]
      }
    }
  }

  return result
}
