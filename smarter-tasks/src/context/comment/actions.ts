/* eslint-disable prefer-const */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { VITE_API_ENDPOINT } from "../../config/constants";
import { CommentsDispatch, CommentListAvailableAction } from "./types";
import { CommentPayload } from "./types";

export const addComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string,
  comment: CommentPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    let response = await fetch(
      `${VITE_API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      }
    );

    dispatch({ type: CommentListAvailableAction.ADD_COMMENT_REQUEST });

    if (!response.ok) {
      throw new Error("Failed to create a comment for the task");
    }

    let data = await response.json();

    dispatch({
      type: CommentListAvailableAction.ADD_COMMENT_SUCCESS,
      payload: data,
    });

    console.log(data);
    fetchComment(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.ADD_COMMENT_FAILURE,
      payload: "Comment is not created",
    });
  }
};

export const fetchComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST });

    let response = await fetch(
      `${VITE_API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get comments");
    }

    let data = await response.json();

    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });

    console.log("API response data:", data);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Can't get those comments",
    });

    throw error;
  }
};
