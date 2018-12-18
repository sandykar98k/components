import React from 'react';
import PropTypes from 'prop-types';

// Other libraries
import faker from 'faker';

const CommentDetail = props => {
  // Props Destructuring
  const { avatar, author, date, content } = props;

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};

// Default Proptypes
CommentDetail.defaultProps = {
  avatar: faker.image.avatar(),
  author: faker.name.firstName(),
  date: faker.date.weekday(),
  content: faker.company.catchPhrase()
};

// PropTypes
CommentDetail.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default CommentDetail;
