import React from 'react';
import ReactDOM from 'react-dom/client';
import DateSchedule from '../src/DateSchedule';
import './index.css';
import moment from 'moment';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DateSchedule dateRange={[moment('2023-03-01'), moment('2023-03-31')]} />
  </React.StrictMode>,
);
