declare namespace Types {
  type Query = {
    replace?: boolean
    [propName: string]: any
  }


}



// Kconfig各种声明项
declare namespace Kconfig {
  enum Type  {
    String = "string",
    Int = "int",
    Bool = "bool",
    Choice = "choice",
    Menu = "menu",
    Menu2 = "menu2",
  }
  type children = StringObj | IntObj | BoolObj | ChoiceObj
  // type为string时
  type StringObj = {
    children: children[]
    default?: string
    depends_on: string | null
    help: string | null
    id: string
    name: string
    range: null
    title: string
    type: string
    inline?: boolean
  }
  // type为int时
  type IntObj = {
    children: children[]
    default?: string
    depends_on: string | null
    help: string | null
    id: string
    name: string
    range: null | number[]
    title: string
    type: string
    inline?: boolean
  }
  // type为bool时
  type BoolObj = {
    children: children[]
    default?: string
    depends_on: string | null
    help: string | null
    id: string
    name: string
    range: null
    title: string
    type: string
    inline?: boolean
  }
  // type为Choice时
  type ChoiceObj = {
    children: children[]
    default?: string
    depends_on: string | null
    help: string | null
    id: string
    name: string
    title: string
    type: string
    inline?: boolean
  }
}
