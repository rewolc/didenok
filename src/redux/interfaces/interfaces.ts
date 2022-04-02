export interface IEmployee {
  name?: string;
  'Дата рождения'?: string;
  'Гражданство'?: string;
  "Адрес проживания"?: string;
  "Руководитель группы"?: string;
  'Должность'?: string;
  'Телефон'?: string;
  "Почта (личная)"?: string;
  "Почта (рабочая, если есть)"?: string;
  "Дата приема на работу"?: string;
  "Размер оплаты труда"? : string;
  'Оформление'?:  string;
}

export interface TeamsState {
  id : number;
  leadName: string;
  employees: IEmployee[]
}

export interface IaddEmployee {
  name : string
  id : number
}

export interface IAction {
  teams? : TeamsState[]
  name? : string 
  leadName? : string 
  id? : number 
  key? : string
  value? :string
  indx? : number
}