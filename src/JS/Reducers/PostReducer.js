import { v4 as uuidv4 } from "uuid";
import { ADDPOST, DELETEPOST, EDITPOST, STATUS, VERIFIEDPOST } from "../Constants/actionTypes";

const initialState = {
  posts: [
    {
      id: uuidv4(),
      title: "html",
      content: "langage de balisage",
      isVerified: true,
    },
    {
      id: uuidv4(),
      title: "css",
      content: "langage de design",
      isVerified: true,
    },
    {
      id: uuidv4(),
      title: "Java script",
      content: "langage de programmation",
      isVerified: false,
    },
  ],
  status: "ALL",
};
const PostReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDPOST:
      return { ...state, posts: [...state.posts, payload] };
    case DELETEPOST:
      return { ...state, posts: state.posts.filter((el) => el.id !== payload) };
      case EDITPOST:
        return { ...state, posts: state.posts.map((el) => el.id === payload.id?{...el, title:payload.title, content: payload.content}: el) };
        case VERIFIEDPOST:
            return { ...state, posts: state.posts.map((el) => el.id === payload?{...el, isVerified:!el.isVerified}: el) };
            
            case STATUS:
                return { ...state, status:payload };
    default:
      return state;
  }
};

export default PostReducer;
