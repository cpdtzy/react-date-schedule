import moment from 'moment/moment';
import {getPrefixClass} from '../utils';
import {ForwardedRef, forwardRef} from 'react';

export interface DateInfo {
    dateMoment: moment.Moment,
    isWeek: boolean,
    date: string,
    week: string,
}

interface HeaderProps {
    dates: DateInfo[]
}

export const Header = forwardRef(function Header(props: HeaderProps, ref: ForwardedRef<HTMLDivElement>) {
    const {dates} = props;

    return (
        <div
          ref={ref}
          className={getPrefixClass(['grid', 'head'])}
          style={{gridTemplateColumns: `132px repeat(${dates.length}, minmax(42px, 1fr)) 160px`, overflow: 'auto visible'}}
        >
            <div className={getPrefixClass(['item', 'fix-left'], true)}>人员：12人</div>
            {
                dates.map(date => {
                    return (
                        <div className={getPrefixClass(['item', date.isWeek ? 'item-week' : ''], true)} key={date.date}>
                            {date.date}
                            <div>
                                {date.week}
                            </div>
                        </div>
                    );
                })
            }
            <div className={getPrefixClass(['item', 'fix-right'], true)} style={{display: 'flex'}}>
                <div>计划投入</div>
                <div>详细计划</div>
            </div>
        </div>
    );
});
