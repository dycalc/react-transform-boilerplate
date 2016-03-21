import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import AvatarURL from './assets/avatar.png';


class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content">
          <div className="story">
            <h3>个人信息</h3>
            <div className="desc">
              爱打csgo的小伙子
            </div>
            <a href="https://github.com/dycalc">
              <RaisedButton label="下载简历" primary={true} labelStyle={{fontSize: '16px'}}/>
            </a>
          </div>
          <div className="paper">
            <img src={AvatarURL} />
          </div>
          <div className="info">
            <h3>联系方式</h3>
            <ul>
              <li>
                <span>姓名：</span> Ding Yi
              </li>
              <li>
                <span>邮箱：</span> dywdry@gmail.com
              </li>
              <li>
                <span>微信：</span> dycalc
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
