import { CircularProgress } from "@material-ui/core";
import React from "react";

const BtnLoader = (props) => {
    return (
        <button
            className={props.className}
            style={{
                opacity: 0.6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        > 
            Loading...
        </button>
    );
};
export default BtnLoader;