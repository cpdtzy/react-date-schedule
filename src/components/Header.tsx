import {DateInfo} from '../utils';
import {ItemRender, Render} from '../DateSchedule';
import {createElement, ReactNode, useMemo} from 'react';

interface HeaderProps extends Render {
    list: DateInfo[]
}
const render = (ren: ItemRender['render']): ReactNode => {
  if (typeof ren === 'function') {
    return createElement(ren, {});
  }
  return ren;
}
export function Header(props: HeaderProps) {
  const {list, left, right} = props;
  const leftTitleRender = useMemo(() => render(left.title), [left.title]);
  const rightTitleRender = useMemo(() => render(right.title), [right.title]);

  return (
    <div className={'rc-schedule-grid'} style={{gridTemplateColumns: `132px repeat(${list.length}, minmax(42px, 1fr)) 160px`}}>
      <div className={'grid-person grid-item grid-fix-left'}>
        {leftTitleRender}
      </div>
      {
        list.map(date => {
          return (
            <div className={date.isWeek ? 'week grid-item' : 'grid-item'} key={date.date}>
              {date.date}
              <p>
                {date.week}
              </p>
            </div>
          );
        })
      }
      <div className={'grid-person grid-item grid-fix-right'} style={{display: 'flex'}}>
        {rightTitleRender}
      </div>
    </div>
  );
}
