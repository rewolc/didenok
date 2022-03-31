export interface IEmployee {
  name?: string;
  birthDate?: number;
  citizenship?: string;
  adress?: string;
  teamLead?: string;
  position?: string;
  phoneNumber?: number | string;
  mail?: string;
  workMail?: string;
  whenHired?: string;
  registration?: number | string;
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
  name? : string | number
  leadName? : string | number
}