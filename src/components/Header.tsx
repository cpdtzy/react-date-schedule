import moment from 'moment/moment';
import {getPrefixClass} from '../utils';

export interface DateInfo {
    dateMoment: moment.Moment,
    isWeek: boolean,
    date: string,
    week: string,
}

interface HeaderProps {
    list: DateInfo[]
}

export function Header(props: HeaderProps) {
    const {list} = props;
    return (
        <div className={getPrefixClass('grid')} style={{gridTemplateColumns: `132px repeat(${list.length}, minmax(42px, 1fr)) 160px`}}>
            <div className={getPrefixClass(['item', 'fix-left'], true)}>人员：12人</div>
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
                <div>计划投入</div>
                <div>详细计划</div>
            </div>
        </div>
    );
}
