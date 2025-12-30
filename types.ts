export type QuestionType = 
  | 'text_input' 
  | 'radio' 
  | 'word_order' 
  | 'categorize' 
  | 'clause_highlight'
  | 'fill_blank';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  instruction: string;
  text?: string; // Context text if needed
  options?: Option[]; // For radio, categorize (items to sort/rows), word_order
  choices?: string[]; // For categorize dropdown options
  categories?: string[]; // For categorize type column headers or example row data
  correctAnswer: string | string[] | Record<string, string>; // Flexible answer type
  placeholder?: string;
  explanation?: string;
}

export interface Section {
  title: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
}
