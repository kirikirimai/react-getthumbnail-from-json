import React, { useState } from "react";
import { Modal, Typography } from "@mui/material";

import styled from "@emotion/styled";
import { Box, css } from "@mui/system";

const ModalBlock = ({flg}) => {
  const [openFlg,setOpenFlg]=useState(flg)

  console.log("modal block",openFlg)

  const handleClose = () => {
    setOpenFlg(!openFlg)
  };

  return (
    <Modal sx={modalWrapper} open={openFlg} onClose={handleClose}>
    
      <OriginalModalStyle>
        <Typography variant="h2" sx={ttlFont}>モーダルタイトル</Typography>
        <p>ここは文章</p>
        <p><a href="https://www.yahoo.co.jp" target="_blank">yahoo japan</a></p>
        <button onClick={handleClose}>閉じる</button>
      </OriginalModalStyle>

    </Modal>
  );
};

const boxStyle=css`
background-color: #ff0000;
`
const modalWrapper=css`
background-color: rgba(255,255,255,0.5);
`
const ttlFont=css`
    font-size: 30px;
    font-weight: bold;
    color: #ffff00;
`

const OriginalModalStyle = styled(Box)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  padding: 4vw;
  transform: translate(-50%,0);
  width: 80vw;
  height:60vh;
  height:60dvh;
  background-color: #fff;

  p {
    font-size: 3vw;
  }
`;

export default ModalBlock;
