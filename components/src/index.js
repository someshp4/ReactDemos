import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="sam" timeAgo="Today at 6:00 PM" comment="Nice blog!!" pic={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="som" timeAgo="Today at 10:00 AM" comment="Good explanation." pic={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="kiran" timeAgo="Yesterday at 2:00 PM" comment="Can give better" pic={faker.image.avatar()}/>
            </ApprovalCard>
            
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));