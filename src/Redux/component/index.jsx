import React from "react";
import Counter from "./counteer";
import { Provider } from "react-redux";
import store from "../app/store";

function Index(){
    return(
        <div>
            <Provider store={store}>
            <Counter />
            </Provider>
        </div>
    );
}
export default Index;