import React from "react";

const Spinner = props => {

    return (
      <>
            <div className="ui active dimmer">
                <div className="ui large text loader">{props.message}</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
      </>
    );
};

Spinner.defaultProps = {
    message: "Yükleniyor..."
};

export default Spinner;