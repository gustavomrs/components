import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Component da Isa</h4>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="John" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Maria" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Patrick" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
