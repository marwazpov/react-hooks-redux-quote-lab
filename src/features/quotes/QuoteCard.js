import React from "react";
import { useDispatch } from "react-redux";
import {removeQuote,upvoteQuote,downvoteQuote} from "./quotesSlice";

function QuoteCard({author, content, votes, id}) {
  let dispatch=useDispatch();
  return (
    <div key={id}>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button onClick={()=>dispatch(upvoteQuote(id))} type="button" className="btn btn-primary" >
              Upvote
            </button>
            <button onClick={()=>dispatch(downvoteQuote(id))} type="button" className="btn btn-secondary">
              Downvote
            </button>
            <button onClick={()=>dispatch(removeQuote(id))} type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
