import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Front = styled.div`
  text-align: right;
`;

const Back = styled.div`
  width: 1em;
`;

function Timer() {
  const [timeStamp, setTimeStamp] = useState(0);
  const record = useRef();
  record.current = timeStamp;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStamp((timeStamp) => {
        return timeStamp + 20;
      });
    }, 20);
    return () => {
      alert("당신의 기록은 " + record.current / 1000 + " 초 입니다!!");
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Front>{Math.floor(timeStamp / 1000)}:</Front>
      <Back>{(timeStamp % 1000) / 10}</Back>
    </Container>
  );
}

export default Timer;
