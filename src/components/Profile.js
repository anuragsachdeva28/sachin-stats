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
        four:null,
        six:null,
        strikeRate:null,
        highScore:null,
        century:null,
        half_century:null,
        catches:null,
        not_out:null,
        total_match:null,
        total_run:null
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps.data.data,"next");
        let stat = nextProps.data.data;
        let total_match = stat.length;
        let total_run = 0;
        let catches = 0;
        let not_out = 0;
        let century = 0;
        let c = 0;
        let half_century = 0;
        let highScore = 0;
        let strikeRate = 0;
        let four = 0;
        let six = 0;
        let balls = 0;
        stat.map((match) => {
            if(match.batting_score.indexOf("DNB")>=0){
                total_run+=0;
            }
            else if(match.batting_score.indexOf("*")>=0){
                not_out++;
                // console.log(match.batting_score);
                // console.log(match.batting_score.indexOf("*"));
                // console.log((match.batting_score.substring(0,match.batting_score.length-1)));
                total_run+=parseInt(match.batting_score.substring(0,match.batting_score.length-1));
                if(parseInt(match.batting_score.substring(0,match.batting_score.length-1))>highScore){
                    highScore = parseInt(match.batting_score.substring(0,match.batting_score.length-1));
                }
                if(parseInt(match.batting_score.substring(0,match.batting_score.length-1))>=50 && parseInt(match.batting_score.substring(0,match.batting_score.length-1))<100){
                    half_century++;
                }
                if(parseInt(match.batting_score.substring(0,match.batting_score.length-1))>99){
                    century++;
                }
            }
            else{
                // console.log(parseInt(match.batting_score));
                total_run+=parseInt(match.batting_score);
                if(parseInt(match.batting_score)>highScore){
                    highScore = parseInt(match.batting_score);
                }
                if(parseInt(match.batting_score)>=50 && parseInt(match.batting_score)<100){
                    half_century++;
                }
                if(parseInt(match.batting_score)>99){
                    century++;
                }
            }
            if(match.catches!="-")
                catches+=parseInt(match.catches)

            if(match["4s"]!="-")
                four+=parseInt(match["4s"])

            if(match["6s"]!="-")
                six+=parseInt(match["6s"])


            if(match.balls_faced!="-"){
                balls+=parseInt(match.balls_faced);

            }
            strikeRate = total_run/balls * 100;
            strikeRate = strikeRate.toFixed(2);

        });
        console.log(total_run)
        this.setState({
            total_match,
            total_run,
            not_out,
            catches,
            half_century,
            century,
            highScore,
            strikeRate,
            four,
            six
        })
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
                                <div className="no">{this.state.total_match}</div>
                                <div className="what">Matches played</div>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="extra-content">
                                <div className="no">{this.state.total_run}</div>
                                <div className="what">Runs scored</div>
                            </div>
                        </div>
                        <div className="box box3">
                            <div className="extra-content">
                                <div className="no">{this.state.not_out}</div>
                                <div className="what">Not outs</div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="extra-content">
                                <div className="no">{this.state.catches}</div>
                                <div className="what">Catches taken</div>
                            </div>
                        </div>
                    </div>



                    <div className="minibox">
                        <div className="box box1">
                            <div className="extra-content">
                                <div className="no">{this.state.half_century}</div>
                                <div className="what">Half centuries</div>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="extra-content">
                                <div className="no">{this.state.century}</div>
                                <div className="what">Centuries</div>
                            </div>
                        </div>
                        <div className="box box3">
                            <div className="extra-content">
                                <div className="no">{this.state.highScore}</div>
                                <div className="what">Highest Score</div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="extra-content">
                                <div className="no">{this.state.strikeRate}</div>
                                <div className="what">Strike rate</div>
                            </div>
                        </div>
                    </div>
                    <div className="minibox">
                        <div className="box box1">
                            <div className="extra-content">
                                <div className="no">{this.state.four}</div>
                                <div className="what">4s</div>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="extra-content">
                                <div className="no">{this.state.six}</div>
                                <div className="what">6s</div>
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