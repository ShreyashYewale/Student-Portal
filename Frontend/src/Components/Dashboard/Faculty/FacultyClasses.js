import axios from "axios";
import React, { useContext, useState } from "react";
import FileBase64 from "react-file-base64";
import { nanoid } from "nanoid";
import { AppContext } from "../../../Context/Context";

const FacultyClasses = () => {
  const { currentUser } = useContext(AppContext);

  const [myClassName, setMyClassName] = useState("");
  const [classDesc, setClassDesc] = useState("");
  const [classImage, setClassImage] = useState("");
  var class_id = null;

  const onFormSubmit = (e) => {
    e.preventDefault();
    class_id = nanoid(5);

    axios
      .post("/classes/", {
        class_id: class_id,
        class_name: myClassName,
        class_desc: classDesc,
        class_image: classImage,
        faculty: {
          faculty_id: currentUser._id,
          username: currentUser.username,
          email: currentUser.email,
        },
      })
      .then((result) => {
        const { data } = result;
        if (result.isDone === true) {
          console.log("Class Not Created..!");
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log("Errors : ", err);
      });
  };

  return (
    <div>
      <h1>Faculty Classes</h1>
      <form onSubmit={onFormSubmit}>
        <div className="container-2" style={{ marginTop: "20px" }}>
          <div
            className="classname-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              className="form-control form-control-lg mt-4"
              type="text"
              placeholder="Class Name"
              value={myClassName}
              onChange={(e) => setMyClassName(e.target.value)}
              required
              style={{
                width: `350px`,
                borderRadius: 10,
                height: "35px",
                border: "1px solid #F3EFE0",
              }}
            ></input>
          </div>
          <div
            className="classdsesc-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              className="form-control form-control-lg mt-4"
              type="text"
              placeholder="Class Description"
              value={classDesc}
              onChange={(e) => setClassDesc(e.target.value)}
              required
              style={{
                width: `350px`,
                borderRadius: 10,
                height: "35px",
                border: "1px solid #F3EFE0",
              }}
            ></input>
          </div>
          <div
            className="image-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="form-group mt-4">
              <label className="btn btn-block">
                Upload Image
                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setClassImage(base64)}
                />
              </label>
            </div>
          </div>
          <div
            className="button-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="mt-4"
              type="submit"
              style={{
                width: 250,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#5f43bd",
                color: "#fff",
                fontWeight: 600,
                border: "1px solid transparent",
                fontSize: 16,
                marginTop: 40,
              }}
            >
              Add Class
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FacultyClasses;
