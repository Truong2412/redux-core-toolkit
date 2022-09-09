import { createStore } from "redux";
import rootReducer from "./reducers";
// createStore(reducers,state,enhancer)
//enhancer như là 1 cách giao tiếp với redux-devtool-extenstion trên trình duyệt, nếu muốn xem thì cài = npm và thêm vào dòng dưới
const store = createStore(rootReducer);

export default store;