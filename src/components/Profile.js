import React, {Component, Fragment} from 'react';
import './Profile.css';
import {Button} from "react-bootstrap";
import Sachin from '../images/sach.jpg';
import DataParser from "./DataParser";
import {connect} from "react-redux";

class Profile extends Component {
    state = {
        name: "",
        email: "",
        // aT: (this.props.auth.stsTokenManager)?this.props.auth.stsTokenManager.accessToken:""
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps,"next")
    }

    componentWillMount() {
        console.log("will", this.props)
    }

    componentDidMount() {
        console.log("this is the props", this.props)
    }

    render() {
        // const { auth } = this.props;
        // console.log("ye hain prop", this.props);
        // if(!auth.uid) return <Redirect to={"/signin/"} />
        return (
            <Fragment>
                <DataParser/>
                <div className="profile-aside">
                    <div className="back"></div>
                    <div className="profileCard">
                        {/*{ !this.state.name && <Fragment>*/}
                        {/*    <div className="profile-image">*/}
                        {/*        <img src={""} alt="profile" />*/}
                        {/*    </div>*/}
                        {/*    <div className="profile-info">*/}
                        {/*        <lines className="shine heading"></lines>*/}
                        {/*        <br />*/}
                        {/*        <br />*/}
                        {/*        <lines className="shine num_space"></lines>*/}
                        {/*        <lines className="shine email_space"></lines>*/}
                        {/*    </div>*/}
                        {/*</Fragment> }*/}
                        {/*{ this.state.name && <Fragment>*/}
                            <div className="profile-image">
                                <img src={Sachin} alt="profile" />
                            </div>
                            <br />
                            <div className="profile-info">
                                <h1>Sachin Tendulkar</h1>
                                <br />

                            </div>
                        {/*</Fragment> }*/}



                    </div>

                    <p className={"highlight"} >"Commit all your crimes when Sachin is
                        batting. They will go unnoticed for even the Lord is busy watching him."</p>
                    <p className="text-center"><em>-A placard at the SCG</em></p>

                    <div className="minibox">
                        <div className="box box1">
                            <div className="extra-content">
                                <div className="no">1</div>
                                <div className="what">client</div>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="extra-content">
                                <div className="no">4</div>
                                <div className="what">projects</div>
                            </div>
                        </div>
                        <div className="box box3">
                            <div className="extra-content">
                                <div className="no">5</div>
                                <div className="what">task active</div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="extra-content">
                                <div className="no">5</div>
                                <div className="what">task active</div>
                            </div>
                        </div>
                    </div>



                    <div className="minibox">
                        <div className="box box1">
                            <div className="extra-content">
                                <div className="no">1</div>
                                <div className="what">client</div>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="extra-content">
                                <div className="no">4</div>
                                <div className="what">projects</div>
                            </div>
                        </div>
                        <div className="box box3">
                            <div className="extra-content">
                                <div className="no">5</div>
                                <div className="what">task active</div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="extra-content">
                                <div className="no">5</div>
                                <div className="what">task active</div>
                            </div>
                        </div>
                    </div>
                    <div className="minibox">
                        <div className="box box1">
                            <div className="extra-content">
                                <div className="no">1</div>
                                <div className="what">client</div>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="extra-content">
                                <div className="no">4</div>
                                <div className="what">projects</div>
                            </div>
                        </div>
                    </div>
                    <div className="log_out">

                            <Button variant="secondary" size="sm" type="submit" className={`cancel`}>
                                LOG OUT
                            </Button>

                    </div>
                </div>


            </Fragment>

        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        data:state.data
    }
}
export default connect(mapStateToProps)(Profile);