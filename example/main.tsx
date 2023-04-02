import React from 'react';
import ReactDOM from 'react-dom/client';
import DateSchedule, {Dates} from '../src/DateSchedule';
import './index.css';
import moment from 'moment/moment';

const formatDate = 'YYYY-MM-DD';

const dates: Dates = [moment('2023-03-01', formatDate), moment('2023-04-30', formatDate)];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DateSchedule dates={dates} />
  </React.StrictMode>,
)
