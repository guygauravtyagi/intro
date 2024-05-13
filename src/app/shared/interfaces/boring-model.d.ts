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
