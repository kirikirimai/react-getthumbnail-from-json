import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ThumbBlock from "../components/ThumbBlock";

const ReadData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //
    const readData = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      console.log(data);
      setData(data);
    };

    readData();
  }, []);

  return (
    <div css={wrapper}>
      <p>下記にデータを読み込む</p>
      <hr />
      {data.map((d, idx) => {
        return (
          <div css={boxWrapper} key={idx}>
            <p css={ttl}>{d.title}</p>
            <ThumbBlock id={d.id} />
          </div>
        );
      })}
    </div>
  );
};

const wrapper=css`
margin: auto;
width: min(90%,960px);
`
const boxWrapper = css`
  position: relative;
  border-top: 1px solid #ccc;
  padding: 10px 0;
  &:last-child {
    border-bottom: 1px solid #ccc;
  }
`;

const ttl = css`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
export default ReadData;
