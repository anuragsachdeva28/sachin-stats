import React, { Component, Fragment } from "react";
import "./Profile.css";
import Sachin from "../images/sach.jpg";
import DataParser from "./DataParser";
import { connect } from "react-redux";
import Charts from "./Chart/Chart";
import MixedCharts from "./Chart/MixedCharts";
import BarCharts from "./Chart/BarCharts";

class Profile extends Component {
  state = {
    name: "",
    email: "",
    four: null,
    six: null,
    strikeRate: null,
    highScore: null,
    century: null,
    half_century: null,
    catches: null,
    not_out: null,
    total_match: null,
    total_run: null
  };

  componentWillReceiveProps(nextProps, nextContext) {
    let stat = nextProps.data.data;
    let total_match = stat.length;
    let total_run = 0;
    let catches = 0;
    let not_out = 0;
    let century = 0;
    let half_century = 0;
    let highScore = 0;
    let strikeRate = 0;
    let four = 0;
    let six = 0;
    let balls = 0;
    stat.map(match => {
      if (match.batting_score.indexOf("DNB") >= 0) {
        total_run += 0;
      } else if (match.batting_score.indexOf("*") >= 0) {
        not_out++;
        total_run += parseInt(
          match.batting_score.substring(0, match.batting_score.length - 1)
        );
        if (
          parseInt(
            match.batting_score.substring(0, match.batting_score.length - 1)
          ) > highScore
        ) {
          highScore = parseInt(
            match.batting_score.substring(0, match.batting_score.length - 1)
          );
        }
        if (
          parseInt(
            match.batting_score.substring(0, match.batting_score.length - 1)
          ) >= 50 &&
          parseInt(
            match.batting_score.substring(0, match.batting_score.length - 1)
          ) < 100
        ) {
          half_century++;
        }
        if (
          parseInt(
            match.batting_score.substring(0, match.batting_score.length - 1)
          ) > 99
        ) {
          century++;
        }
      } else {
        total_run += parseInt(match.batting_score);
        if (parseInt(match.batting_score) > highScore) {
          highScore = parseInt(match.batting_score);
        }
        if (
          parseInt(match.batting_score) >= 50 &&
          parseInt(match.batting_score) < 100
        ) {
          half_century++;
        }
        if (parseInt(match.batting_score) > 99) {
          century++;
        }
      }
      if (match.catches !== "-") catches += parseInt(match.catches);

      if (match["4s"] !== "-") four += parseInt(match["4s"]);

      if (match["6s"] !== "-") six += parseInt(match["6s"]);

      if (match.balls_faced !== "-") {
        balls += parseInt(match.balls_faced);
      }
      strikeRate = (total_run / balls) * 100;
      strikeRate = strikeRate.toFixed(2);
      return null;
    });
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
    });

    let runs = [];
    let fours = [];
    let sixes = [];
    let halfCentury = [];
    let centuries = [];
    let highest = [];
    let ball = [];
    let strike_Rate = [];
    for (let i = 1990; i <= 2012; i++) {
      let count_for_runs = 0;
      let count_for_six = 0;
      let count_for_four = 0;
      let count_for_half = 0;
      let count_for_full = 0;
      let count_for_high = 0;
      let count_for_balls = 0;
      let count_for_strikeRate = 0;
      stat.map(match => {
        if (match.date.indexOf("/" + i) >= 0) {
          if (match.batting_score.indexOf("DNB") >= 0) {
            count_for_runs += 0;
          } else if (match.batting_score.indexOf("*") >= 0) {
            count_for_runs += parseInt(
              match.batting_score.substring(0, match.batting_score.length - 1)
            );
            if (
              parseInt(
                match.batting_score.substring(0, match.batting_score.length - 1)
              ) > count_for_high
            ) {
              count_for_high = parseInt(
                match.batting_score.substring(0, match.batting_score.length - 1)
              );
            }
            if (
              parseInt(
                match.batting_score.substring(0, match.batting_score.length - 1)
              ) >= 50 &&
              parseInt(
                match.batting_score.substring(0, match.batting_score.length - 1)
              ) < 100
            ) {
              count_for_half++;
            }
            if (
              parseInt(
                match.batting_score.substring(0, match.batting_score.length - 1)
              ) > 99
            ) {
              count_for_full++;
            }
          } else {
            count_for_runs += parseInt(match.batting_score);
            if (parseInt(match.batting_score) > count_for_high) {
              count_for_high = parseInt(match.batting_score);
            }
            if (
              parseInt(match.batting_score) >= 50 &&
              parseInt(match.batting_score) < 100
            ) {
              count_for_half++;
            }
            if (parseInt(match.batting_score) > 99) {
              count_for_full++;
            }
          }

          if (match["4s"] !== "-") count_for_four += parseInt(match["4s"]);

          if (match["6s"] !== "-") count_for_six += parseInt(match["6s"]);

          if (match.balls_faced !== "-")
            count_for_balls += parseInt(match.balls_faced);

          count_for_strikeRate = (count_for_runs / count_for_balls) * 100;
          count_for_strikeRate = count_for_strikeRate.toFixed(2);
        }
        return null;
      });
      runs.push(count_for_runs);
      fours.push(count_for_four);
      sixes.push(count_for_six);
      highest.push(count_for_high);
      halfCentury.push(count_for_half);
      centuries.push(count_for_full);
      ball.push(count_for_balls);
      strike_Rate.push(count_for_strikeRate);
    }
    this.setState({
      runs,
      fours,
      sixes,
      highest,
      centuries,
      halfCentury,
      ball,
      strike_Rate
    });
  }

  render() {
    return (
      <Fragment>
        <DataParser />
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
          </div>

          <p className={"highlight"}>
            "Commit all your crimes when Sachin is batting. They will go
            unnoticed for even the Lord is busy watching him."
          </p>
          <p className="text-center">
            <em>-A placard at the SCG</em>
          </p>

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
          <div className={"super"}>
            <div className="graphs">
              <div className="graph">
                <h1>Batting Highlights</h1>
                <Charts
                  a={this.state.strike_Rate}
                  b={this.state.highest}
                  c={this.state.ball}
                />
              </div>
            </div>
            <div className="graphs">
              <div className="graph">
                <h1>Total runs scored</h1>
                <BarCharts y={this.state.runs} />
              </div>
            </div>

            <div className="graphs">
              <div className="graph">
                <h1>Boundaries</h1>
                <MixedCharts
                  y_a={this.state.fours}
                  y_b={this.state.sixes}
                  type={"a"}
                />
              </div>
            </div>

            <div className="graphs">
              <div className="graph">
                <h1>Centuries and Half Centuries</h1>
                <MixedCharts
                  y_a={this.state.halfCentury}
                  y_b={this.state.centuries}
                  type={"b"}
                />
              </div>
            </div>
            <div className={"footer"}>Made by Anurag Sachdeva!!!</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};
export default connect(mapStateToProps)(Profile);
