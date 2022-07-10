import { createStore } from "redux";
import reducers from "react";

const configure = () => {
  const store = createStore(reducers);
  return store;
};

export default configure;
