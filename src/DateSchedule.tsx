import {getDaysFromDateRange} from './utils';
import {memo, useMemo} from 'react';
import {Moment} from 'moment';
import './index.less';
import {Header} from './components/Header';

export type Dates = [Moment, Moment];
interface DateScheduleProps {
  dates: Dates;
}

function DateSchedule(props: DateScheduleProps) {
  const dateList = useMemo(() => {
    return getDaysFromDateRange(props.dates);
  }, [props.dates]);

  return (
      <div className={'wrap'}>
        <div className={'overflow-x'}>
          <Header list={dateList} />
        </div>
      </div>
  );
}

export default memo(DateSchedule);
