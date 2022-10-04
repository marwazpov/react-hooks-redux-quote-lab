import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";

function QuoteForm() {
  const [formData, setFormData] = useState({
    quote:"",
    author:""
  });

  function handleChange(event) {
    // Handle Updating Component State
    let name = event.target.name;
    let value = event.target.value;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const dispatch = useDispatch();

  function handleSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    const quote = {
      id: uuid(),
      author: formData.author,
      content: formData.content,
      votes: 0,
    };
    // Pass quote object to action creator
    dispatch(addQuote(quote));
    // Update component state to return to default state
    setFormData({
      author:"",
      content:"",
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form 
              className="form-horizontal"
              onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
