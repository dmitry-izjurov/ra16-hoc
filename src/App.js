import './App.css';
import React from 'react';
import VideoList from './VideoList';
import AppTask2 from './AppTask2';

function App() {
  const list = [
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-10-14 09:47:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-10-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-09-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-10-14 09:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-08-04 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-10-02 05:24:00'
    },
  ];

  return (
    <main className='main'>
      <div className='task'>Форматирование даты публикации</div>
      <div className='wrapper__video'>
        <VideoList list={list} />
      </div>
      <div className='task'>Популярное и новое</div>
      <div className='wrapper__video_task2'>
        <AppTask2 />
      </div>
    </main>
  );
}

export default App;