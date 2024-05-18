export interface CardData {
  heading?: string;
  subHeading?: string;
  body?: {
    heading?: string;
    subHeading?: string;
    content?: string;
    list?: string[];
  }
}

export interface StringKey {
  [key:string]: any
}

export interface Styles extends StringKey{
  height?: string;
  width?: string;
}

export interface TagDetails {
  name?: string;
  iconName?: string;
  height?: string;
  width?: string;
  iconHeight?: string;
  iconWidth?: string;  
}
