import React from 'react';
import ReactDOM from 'react-dom';

// faker
import faker from 'faker';

// Components
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="John"
          date="15 Dec 2018"
          content="Heyy Everyone how r u doin?"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <h4>Warning!</h4>
        Are u sure you want to do this?
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// NOTE: Component hierarchy
// App Component --> CommentDetail (App Component is a parent and CommentDetail is child component).
