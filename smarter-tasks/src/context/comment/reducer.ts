import { CommentListState, CommentActions } from "./types";

export const commentReducer = (
  state: CommentListState,
  action: CommentActions
): CommentListState => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_COMMENT_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      };
    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        comments: [...state.comments, action.payload],
      };
    case "ADD_COMMENT_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
