'use strict';

// jqueryモジュールの読み込み(jqueryオブジェクトを変数$に格納)
import $ from 'jquery';

// HTML要素を取得する(CSSセレクタとほぼ同じ書き方)
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

// click関数: 要素がクリックされた時に、引数に渡した関数を実行する
scalingButton.click(() => {
  // animate関数: CSSのstyleを、(第二引数)msかけて(第一引数)へと変更する
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }  , 2000);
  block.animate({ 'marginLeft': '20px' }, 2000);
});