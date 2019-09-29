import React, { Component } from 'react';
import Papa from 'papaparse';
import {connect} from "react-redux";
import {storeData} from "../actions/fetchAction";

class DataParser extends Component {

    constructor(props) {
        // Call super class
        super(props);

        // Bind this to function updateData (This eliminates the error)
        this.updateData = this.updateData.bind(this);
    }

    componentWillMount() {

        // Your parse code, but not seperated in a function
        let csvFilePath = require("../sachin.csv");
        Papa.parse(csvFilePath, {
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: this.updateData
        });
    }

    updateData(result) {
        const data = result.data;
        // Here this is available and we can call this.setState (since it's binded in the constructor)
        this.setState({data: data}); // or shorter ES syntax: this.setState({ data });
        this.props.storeData(data);
    }

    render() {
        // Your render functi
        return (null);
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        storeData: (data) => dispatch(storeData(data))
    }
}
export default connect(null,mapDispatchToProps) (DataParser);