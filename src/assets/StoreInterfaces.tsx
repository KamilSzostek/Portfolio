export interface INavigationLink {
    id: string;
    sectionName: string;
}

export interface IContext {
  text1: string | INavigationLink;
  text2: string | INavigationLink;
  text3?: string | INavigationLink | string[];
  text4?: string;
}

export interface IData {
    navigation?: INavigationLink[];
    start?: IContext;
    aboutme?: IContext;
    qualifications?: IContext;
    projects?: IContext;
  }