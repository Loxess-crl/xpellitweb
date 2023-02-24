import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition(
    'home => news, home => guides, home => documentation, news => guides, news => documentation, guides => documentation',
    [
      style({ position: 'relative' }),
      query(':enter', [
        style({
          transform: 'translateX(100%)',
        }),
      ]),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            width: 'auto',
            opacity: 0,
          }),
        ],
        { optional: true }
      ), // optional: true is needed for the first time the page is loaded
      query(':leave', animateChild(), { optional: true }),
      group([
        query(
          ':leave',
          [
            animate(
              '0.3s ease-in-out',
              style({ transform: 'translateX(-100%)', opacity: 0 })
            ),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            animate(
              '0.3s ease-in-out',
              style({ transform: 'translateX(0%)', opacity: 1 })
            ),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]
  ),
  transition(
    'news => home, guides => news, guides => home, documentation => guides, documentation => news, documentation => home',
    [
      style({ position: 'relative' }),
      query(':enter', [
        style({
          transform: 'translateX(-100%)',
        }),
      ]),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            width: 'auto',
            opacity: 0,
          }),
        ],
        { optional: true }
      ), // optional: true is needed for the first time the page is loaded
      query(':leave', animateChild(), { optional: true }),
      group([
        query(
          ':leave',
          [
            animate(
              '0.3s ease-in-out',
              style({ transform: 'translateX(100%)', opacity: 0 })
            ),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            animate(
              '0.3s ease-in-out',
              style({ transform: 'translateX(0%)', opacity: 1 })
            ),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]
  ),
]);
