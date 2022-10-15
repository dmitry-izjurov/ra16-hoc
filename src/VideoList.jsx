import React from 'react';

function DateTime(props) {
    return (
      <p className="date">{props.date}</p>
    )
  }
  
  function DateTimePretty(Component) {
    return class extends React.Component {
      render() {
        const dateNow = Date.now();
        const value = this.props;
        const objDateValue = new Date(value.date).getTime();
        const difValueDate = dateNow - +objDateValue;
        let difValueDateResult;
        const milSecInHour = 3600000;
        const milSecInDay = 86400000;
        if (difValueDate < milSecInHour) {
          if (difValueDate <= 60000) {
            difValueDateResult =`Меньше минуты назад`;
          } else if (difValueDate > 60000 && difValueDate < 120000) {
            difValueDateResult = `1 минуту назад`;
          } else if (difValueDate >= 120000 && difValueDate < 300000) {
            difValueDateResult = `${Math.floor(difValueDate / 1000 / 60)} минуты назад`;
          } else {
            difValueDateResult = `${Math.floor(difValueDate / 1000 / 60)} минут назад`;
          }
        }
        else if (difValueDate >= milSecInHour && difValueDate < milSecInDay) {
          if (difValueDate >= milSecInHour && difValueDate < milSecInHour * 2) {
            difValueDateResult = `1 час назад`;
          } else if (difValueDate >= milSecInHour * 2 && difValueDate < milSecInHour * 5) {
            difValueDateResult = `${Math.floor(difValueDate / 1000 / 60 / 60)} часа назад`;
          } else {
            difValueDateResult = `${Math.floor(difValueDate / 1000 / 60 / 60)} часов назад`;
          }
        } else {
          if (difValueDate >= milSecInDay && difValueDate < milSecInDay * 2) {
            difValueDateResult = `1 день назад`;
          } else if (difValueDate >= milSecInDay * 2 && difValueDate < milSecInDay * 5) {
            difValueDateResult = `${Math.floor(difValueDate / 1000 / 60 / 60 / 24)} дня назад`;
          } else {
            difValueDateResult = `${Math.floor(difValueDate / 1000 / 60 / 60 / 24)} дней назад`;
          }
        }
        return <Component date={difValueDateResult} />;
      }
    }
  }
  
  const DateNew = DateTimePretty(DateTime);
  
  function Video(props) {
    return (
      <div className="video">
        <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <DateNew date={props.date} />
      </div>
    )
  }
  
  export default  function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
  }