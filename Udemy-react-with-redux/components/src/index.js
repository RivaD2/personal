import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './Components/CommentDetail';
import ApprovalCard from './Components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments" >
            <ApprovalCard />
            {/* author is name of prop and names of people are values */}
            <CommentDetail  
            author="Sam" 
            timeAgo="Today at 4:46PM" 
            comment="Love it!"
            foodImage={faker.image.food}
            />
            <CommentDetail  
            author="Alex" 
            timeAgo="Yesterday at 2PM" 
            comment="Great post"
            foodImage={faker.image.food}
            />
            <CommentDetail  
            author="Jane" 
            timeAgo="Today at 1PM" 
            comment="Really enjoyed the blog!"
            foodImage={faker.image.food}
            />
        </div>
  );
}
ReactDOM.render(<App />, document.querySelector('#root'));