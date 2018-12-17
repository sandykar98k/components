import React from 'react';
import ReactDOM from 'react-dom';

// faker
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date">{faker.date.weekday()}</span>
          </div>
          <div className="text">{faker.company.catchPhrase()}</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
