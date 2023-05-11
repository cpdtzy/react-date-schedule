import {getDaysFromDateRange} from './utils';
import React, {FunctionComponent, Key, memo, ReactNode, useMemo} from 'react';
import {Moment} from 'moment';
import {Header} from './components/Header';
import './index.module.less';

export type Dates = [Moment, Moment];
export interface ItemRender {
  key: Key,
  title: ReactNode | FunctionComponent<{}>,
  width: string | number,
  render: ReactNode | FunctionComponent<{}>,
}
export interface Render {
  left: ItemRender,
  item: ItemRender,
  right: ItemRender,
}
interface DateScheduleProps extends Render {
  dates: Dates;
}

function DateSchedule(props: DateScheduleProps) {
  const dateList = useMemo(() => {
    return getDaysFromDateRange(props.dates);
  }, [props.dates]);

  return (
      <div className={'rc-schedule-wrap'}>
        <div className={'rc-schedule-overflowX'}>
          <Header list={dateList} left={props.left} item={props.item} right={props.right} />
        </div>
      </div>
  );
}

export default memo(DateSchedule);
