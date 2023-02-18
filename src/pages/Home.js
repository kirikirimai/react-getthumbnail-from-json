import React, { useState, useEffect } from "react";
import ModalBlock from "../components/ModalBlock";
import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const [isClick, setClick] = useState(false);

  const onChangeParam = () => {
    setClick(!isClick);

    let current_url = window.location.href;
    let result = current_url.split("?")[0];
    let param = "";
    if (isClick) {
      param = "?id=true";
    } else {
      param = "?id=false";
    }

    window.history.pushState(null, null, result + param);
  };
  useEffect(() => {
    const getParam = () => {
      var url = new URL(window.location.href);
      // URLSearchParamsオブジェクトを取得
      let params = url.searchParams;
      let p = false;

      if (params.has("id")) {
        p = JSON.parse(params.get("id").toLowerCase());
        setOpen(p);
      } else {
        setOpen(false);
      }
    };
    getParam();
  }, []);

  return (
    <div className="App">
      <h1>MUIテスト</h1>

      <p><Link to={"/readdata"}>データ読み込みの練習</Link></p>
      <hr/>
      <h2>コンポーネントから呼び出す</h2>
      <p>
        パラメータに「?id=true」をつけるとモーダルが表示されて、「?id=false」もしくはパラメータがない場合は表示されない。
      </p>

      <button onClick={onChangeParam}>パラメータを切り替える</button>
      {isOpen && <ModalBlock flg={isOpen} />}
    </div>
  );
};

export default Home;
