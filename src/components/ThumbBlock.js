import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Img} from 'react-image'

const ThumbBlock = ({ id }) => {
  const thumb_id = id;

  const [thumbData, setThumbData] = useState({});

  const getThumb = (id) => {
    const readThumb = async (id) => {

      let res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      let get_thumb = await res.json();
      console.log(get_thumb.thumbnailUrl);
      setThumbData({ id: get_thumb.id, thumb_url: get_thumb.thumbnailUrl });

    };

    if (thumbData.length === 0) {
      try {
        readThumb(id);
      } catch (error) {
        console.log(error);
      }
    } else {
      if (id === thumbData.id) {
       
        return;
      } else {
        readThumb(id);
      }
    }
  };

  return (
    <>
      <p css={btnThumb} onClick={() => getThumb(thumb_id)}>画像を読み込む</p>
        {thumbData.thumb_url && (
          <MyImageComponent url={thumbData.thumb_url} />
        )}

    </>
  );
};

const MyImageComponent=({url})=> {
    return <Img css={imgThumb} src={url} loader={<p>読み込身中</p>} />
  }

const btnThumb = css`
  border: 1px solid #ccc;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const imgThumb=css`
display: block;
padding-top: 20px;
`

export default ThumbBlock;
