import {getDaysFromDateRange} from './utils';
import {memo, useMemo} from 'react';
import moment from 'moment';
import './index.less';
import {Header} from './components/Header';

const formatDate = 'YYYY-MM-DD';

function DateSchedule() {
  const dateList = useMemo(() => {
    return getDaysFromDateRange([moment('2023-03-01', formatDate), moment('2023-04-30', formatDate)]);
  }, []);

  return (
      <div className={'wrap'}>
        <div className={'overflow-x'}>
          <Header list={dateList} />
        </div>
      </div>
  );
}

export default memo(DateSchedule);
