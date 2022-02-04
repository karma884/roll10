import { useState } from "react";
import { Button } from "./Buttons";
import { getSuccessText } from "../helpers";
import url from "../api-url";

const Comment = ({ entry, addComment }) => {
  const [comment, setComment] = useState(entry.comment ? entry.comment : "");

  const [showEditField, setShowEditField] = useState(false);

  const editComment = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  return (
    <>
      {showEditField ? (
        <textarea
          value={comment}
          placeholder={getSuccessText(entry.successes)}
          onChange={editComment}
        ></textarea>
      ) : (
        " "
      )}
      <Button
        text={showEditField ? "save" : "edit"}
        className="btn btn-tertiary"
        callback={async () => {
          if (showEditField) {
            fetch(`${url}newcomment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ comment, _id: entry._id }),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => addComment(entry, data.comment))
              .catch((error) => console.log(error));

            // const result = await request(
            //   "http://localhost:5000/newmessages",
            //   {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ message: comment }),
            //   },
            //   fetch
            // );
            // console.log(result);
          } else {
            setComment(entry.comment);
          }

          setShowEditField(!showEditField);
        }}
      />
      {showEditField && (
        <Button
          text={"discard"}
          className="btn btn-tertiary"
          callback={() => {
            setShowEditField(!showEditField);
          }}
        />
      )}{" "}
      {showEditField && (
        <Button
          text={"delete ENTIRE ROLL"}
          className="btn btn-tertiary"
          callback={() => {}}
        />
      )}
      {entry && entry.comment ? "  | Comment: " + entry.comment : " "}
    </>
  );
};

export default Comment;
