:: BASE_DOC ::

## API

### Switch Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
customValue | Array | - | 开关内容，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]。TS 类型：`Array<SwitchValue>` | N
disabled | Boolean | false | 是否禁用组件 | N
label | TNode | [] | 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 或 (value) => value ? '开' : '关'。TS 类型：`Array<string | TNode> | TNode<{ value: SwitchValue }>`。[通用类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/blob/develop/src/common.ts) | N
loading | Boolean | false | 是否处于加载中状态 | N
size | String | medium | 开关尺寸。可选项：small/medium/large | N
value | String / Number / Boolean | undefined | 开关值。TS 类型：`SwitchValue` `type SwitchValue = string | number | boolean`。[详细类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/tree/develop/src/switch/type.ts) | N
defaultValue | String / Number / Boolean | undefined | 开关值。非受控属性。TS 类型：`SwitchValue` `type SwitchValue = string | number | boolean`。[详细类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/tree/develop/src/switch/type.ts) | N
onChange | Function |  | TS 类型：`(value: SwitchValue) => void`<br/>数据发生变化时触发 | N
