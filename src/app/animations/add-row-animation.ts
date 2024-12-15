import {
  animate,
  sequence,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const addTableRowAnimation = trigger('addTableRowAnimation', [
  transition('void => *', [
    style({
      opacity: '0',
      transform: 'translateX(-550px)' 
    }),
    sequence([
      animate(
        '.35s ease',
        style({
          opacity: 0.75,
          transform: 'translateX(0)' 
        })
      ),
      animate(
        '.35s ease',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
    ]),
  ]),
]);
