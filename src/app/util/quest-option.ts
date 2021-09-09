export const options: string[] = [
  'don`t show',
  'show answer at the end',
  'show answer after user response',
  'show answer immediately'
];

export const orderOption: string[] = [
  'show sequentially',
  'show in reverse order',
  'show everything in random order'
];

interface Question {
  value: string;
  viewValue: string;
}

export const questions: Question[] = [
  {value: 'answer-option', viewValue: 'answer option'},
  {value: 'match-matches', viewValue: 'match matches'},
  {value: 'choose-right-picture', viewValue: 'choose the right picture'},
  {value: 'find-object-on-the-picture', viewValue: 'find object on the picture'},
  {value: 'answer-question', viewValue: 'answer question'},
];

