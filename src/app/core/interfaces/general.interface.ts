export interface TableColumns {
  nombre: string,
  descripcion: string,
  type?: 'check' | 'multiselect' | 'multiple' | 'button' | 'checkbox' | 'color'
    | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image'
    | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset'
    | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | string,
  styles?: Partial<CSSStyleDeclaration>,
}
