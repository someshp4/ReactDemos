import React from 'react';

const ApprovalCard = (p) => {
    return(
        <div className="ui card">
            <div className="content">{p.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Appove</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;