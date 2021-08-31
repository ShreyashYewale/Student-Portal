import React, { useState, useEffect } from "react";

const AdminCreateFeedback = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("My Data Object: ", data);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var i = 0;
    let target = e.target;

    var obj = {},
      newdata = [];

    var j = 1,
      q = true;
    for (let i = 0; i < target.length; i++) {
      if (q) {
        console.log("Question Added");
        obj["question"] = target.elements[i].value;
        q = false;
      } else {
        obj["option" + j] = target.elements[i].value;
        j++;
      }

      if (j === 5) {
        //console.log("Object:", obj);
        // setData([...data, obj]);
        newdata.push(obj);
        obj = {};
        j = 1;
        q = true;
      }
    }

    setData([...newdata]);
  };

  const addNewQuestion = () => {
    const q_container = document.querySelector(".admin-feedback-questions");
    var cnt = q_container.childNodes.length;
    console.log(cnt);
    const container = document.createElement("div");
    container.classList.add("admin-feedback-form");

    const question_container = document.createElement("div");
    question_container.classList.add("question-container");
    question_container.classList.add("container");
    question_container.classList.add("bg-light");
    question_container.classList.add("mb-3");
    question_container.classList.add("p-3");

    const para = document.createElement("p");
    para.classList.add("mb-2");
    para.classList.add("fs-5");
    para.innerText = `Question - ${++cnt}`;

    var question = document.createElement("input");
    question.type = "text";
    question.className = "form-control";
    question.classList.add("feedback-question");
    question.name = "question";
    question.placeholder = "Question";

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    var option1 = document.createElement("input");
    option1.type = "text";
    option1.className = "form-control";
    option1.name = "Option-1";
    option1.placeholder = "Option - 1";

    var option2 = document.createElement("input");
    option2.type = "text";
    option2.className = "form-control";
    option2.name = "Option-2";
    option2.placeholder = "Option - 2";

    var option3 = document.createElement("input");
    option3.type = "text";
    option3.className = "form-control";
    option3.name = "Option-3";
    option3.placeholder = "Option - 3";

    var option4 = document.createElement("input");
    option4.type = "text";
    option4.className = "form-control";
    option4.name = "Option-4";
    option4.placeholder = "Option - 4";

    optionsDiv.appendChild(option1);
    optionsDiv.appendChild(option2);
    optionsDiv.appendChild(option3);
    optionsDiv.appendChild(option4);

    question_container.appendChild(para);
    question_container.appendChild(question);
    question_container.appendChild(optionsDiv);

    container.appendChild(question_container);

    q_container.appendChild(container);
  };

  return (
    <div>
      <h3 className="d-block text-center p-3">Questions</h3>
      <form className=" m-4" onSubmit={handleSubmit}>
        <div className="admin-feedback-questions">
          <div className="admin-feedback-form">
            <div className="question-container container bg-light mb-3 p-3">
              <p className="mb-2 fs-5">Question - 1</p>
              <input
                type="text"
                className="feedback-question form-control"
                name="Question"
                placeholder="Question"
              />
              <div className="options">
                <input
                  type="text"
                  className="form-control"
                  name="Option-1"
                  placeholder="Option - 1"
                />
                <input
                  type="text"
                  className="form-control"
                  name="Option-2"
                  placeholder="Option - 2"
                />
                <input
                  type="text"
                  className="form-control"
                  name="Option-3"
                  placeholder="Option - 3"
                />
                <input
                  type="text"
                  className="form-control"
                  name="Option-4"
                  placeholder="Option - 4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-buttons">
          <button
            className="btn btn-primary"
            style={{ marginRight: `10px` }}
            onClick={addNewQuestion}
          >
            Add New Question
          </button>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateFeedback;
