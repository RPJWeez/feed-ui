import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TheGrid from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

let imgs = [
  "https://scontent-dfw5-1.cdninstagram.com/vp/022b01cc85d344629d999be3bafd6498/5CEEBC15/t51.2885-15/e35/60580450_2319084704998517_8360120739215865942_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com",
  "https://scontent-dfw5-1.cdninstagram.com/vp/7a731612d1c1c2b246866978e2cd01cf/5D919E8D/t51.2885-15/e35/61265669_197509414550389_6363971189852084788_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com",
  "https://scontent-dfw5-1.cdninstagram.com/vp/f42b5701b2af98ed018a15603ba4826f/5D96E58B/t51.2885-15/sh0.08/e35/p640x640/61531538_389570495100298_385652030434128759_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com",
  "https://scontent-dfw5-1.cdninstagram.com/vp/60ff97e1f5cc0b6be360a08e60fdfd78/5D7C1F8D/t51.2885-15/sh0.08/e35/p640x640/61332931_862134937473023_180428966678681783_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com",
  "https://scontent-dfw5-1.cdninstagram.com/vp/9cc338b643fa6476fcc6b0c84d7aeecf/5D7A9263/t51.2885-15/sh0.08/e35/p640x640/60272359_820413548329258_8205632668813584414_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com",
  "https://scontent-dfw5-1.cdninstagram.com/vp/708c1e96f54d883728fe05843b099642/5D94E865/t51.2885-15/sh0.08/e35/p640x640/60402093_447608459145454_1242612566496742308_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com"
];

ReactDOM.render(
  <TheGrid imgs={imgs} width={400} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
