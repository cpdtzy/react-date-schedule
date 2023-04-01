import {getDaysFromDateRange, getPrefixClass} from './utils';
import {memo, useMemo, useRef} from 'react';
import moment from 'moment';
import './index.less';
import {Header} from './components/Header';

interface DateScheduleProps {
  dateRange: [moment.Moment, moment.Moment];
}

function DateSchedule(props: DateScheduleProps) {
  const dates = useMemo(() => {
    return getDaysFromDateRange(props.dateRange);
  }, [props.dateRange]);

  const headRef = useRef<null | HTMLDivElement>(null);
  const handleScroll = (e: any) => {
    if (headRef.current) {
      headRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  return (
    <div className={getPrefixClass('wrap')}>
      <Header ref={headRef} dates={dates} />
      <div style={{height: 500, overflow: 'hidden'}}>
        <div style={{overflow: 'auto'}} onScroll={handleScroll}>
          {
            Array(30).fill(1).map((_, ii) => {
              return (
                <div key={ii} className={getPrefixClass(['grid', 'row'])} style={{gridTemplateColumns: `132px repeat(${dates.length}, minmax(42px, 1fr)) 160px`}}>
                  <div className={getPrefixClass(['item', 'fix-left'], true)}>人员：12人</div>
                  <div
                    className={getPrefixClass('grid')}
                    style={{gridColumn: 'span ' + dates.length, gridTemplateColumns: `repeat(${dates.length}, minmax(42px, 1fr))`}}
                  >
                    {
                      dates.map(date => {
                        return (
                          <div
                            className={getPrefixClass(['item', date.isWeek ? 'item-week' : ''], true)}
                            key={date.date}
                          />
                        );
                      })
                    }
                    <div
                      style={{
                        gridColumn: '3 / span 5',
                        backgroundColor: 'lightgreen',
                        position: 'relative',
                        zIndex: 9,
                      }}
                    >
                      {ii}
                    </div>
                  </div>
                  <div className={getPrefixClass(['item', 'fix-right'], true)} style={{display: 'flex'}}>
                    <div>计划投入</div>
                    <div>详细计划</div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default memo(DateSchedule);
