import { trigger, state, style, transition, animate } from '@angular/animations';

const miniMenuSize = '74px';
const fullMenuSize = '180px';

export const resizeMenu = trigger('resizeMenu', [
  state(
    'false',
    style({
      width: miniMenuSize,
    })
  ),
  state(
    'true',
    style({
      width: fullMenuSize,
    })
  ),
  transition('false => true', animate('250ms ease-in')),
  transition('true => false', animate('250ms ease-in')),
]);

export const resizeMain = trigger('resizeMain', [
  state(
    'false',
    style({
      'margin-left': miniMenuSize,
    })
  ),
  state(
    'true',
    style({
      'margin-left': fullMenuSize,
    })
  ),
  transition('false => true', animate('250ms ease-in')),
  transition('true => false', animate('250ms ease-in')),
]);
