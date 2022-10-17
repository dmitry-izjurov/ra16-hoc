import React from 'react';
import Article from './article';
import Video from './video';
import GetPretty from './pretty';

const NewComponentVideo = GetPretty(Video);
const NewComponentArticle = GetPretty(Article);

function List(props) {
  return props.list.map((item, i) => {
    switch (item.type) {
      case 'video':
        return (
          <NewComponentVideo key={i} {...item} />
        );

      case 'article':
        return (
          <NewComponentArticle key={i} {...item} />
        );
    }
  });
};

export default function AppTask2() {
  const list = [
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ];

  return (
    <List list={list} />
  );
}