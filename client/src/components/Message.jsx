import React from 'react';
import styled from 'styled-components';


const Well = styled.div`
  padding : 1em;
  font-size : 0.9em;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 100%;
  min-height: 4.5em;
  `;

  const Avatar = styled.img`
    background-image: url(${'https://s3-us-west-1.amazonaws.com/knowhow-s3/assets/nan.jpg'});
    display: block;
    margin: 0 auto;
    width: 3em;
    height: 3em;
    border-radius: .25rem;
    float: left;
    margin: 0.5em 1.5em 0.5em 0.5em;
  `;

  const Wrapper = styled.div`
    padding : 0.5em 0.5em 0.5em;
    padding-right: 1em;
  `;

  const User = styled.div`
    font-size: 1em;
    color: rgba(0,0,0,.87);
    font-weight: 700;
  `;

const Message = (props) => {

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


  var d = new Date();

	return(
    <Wrapper>
       <Avatar/>
    <Well>
      <User>{props.message.user} </User>
      {props.message.message.text}
    </Well>
    </Wrapper>
		)
}

export default Message;