import React from "react";

export class States extends React.Component {
    constructor() {
        super();
        this.state = { united: false };
    }

    unite = () => {
        this.setState({ united: true });
    };

    render() {
        return this.state.united ? (
            <div className="status">Code for everyone</div>
        ) : (
            <div className="status">Make America code again</div>
        );
    }
}
