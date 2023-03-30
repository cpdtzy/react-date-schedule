import {getDaysFromDateRange, getPrefixClass} from './utils';
import {memo, useMemo} from 'react';
import moment from 'moment';
import './index.less';
import {Header} from './components/Header';

interface DateScheduleProps {
    dateRange: [moment.Moment, moment.Moment];
}

function DateSchedule(props: DateScheduleProps) {
  const dateList = useMemo(() => {
    return getDaysFromDateRange(props.dateRange);
  }, [props.dateRange]);

  return (
      <div className={getPrefixClass('wrap')}>
          <Header list={dateList} />
      </div>
  );
}

export default memo(DateSchedule);
