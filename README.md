# study-webpack
# 概要
webpack勉強用

## Goal
- webpack公式tutorialをとりあえずやる
- ES6のトランスパイル
    - ~~Babel入れてなんやかんやする~~
    - target browserを決める
    - babelrcに設定書き出す
- ~~eslint導入~~
- 画像を扱う
    - ~~srcに置いた画像はdistに移動して欲しい。ファイル名変えずに。~~
- SCSSのコンパイル
    - postcss使う
    - ~~CSSはインラインではなく、ファイルとして外部に出す~~
- ejsのコンパイル
- fontawesome導入
- ~~buildしたらdistディレクトリに吐き出す~~
- portfinder使うかも??
- typescript導入するかも??

## 実装するか迷いどこ
- 画像のコピーはwebpackのプラグインじゃなくて、gulpのタスクとして作成する
- scssのコンパイルもwebpackで処理するんじゃなくて、gulpタスクとして定義する

## 所感
なんでもかんでもwebpackにすると逆に大変。jsのビルドくらいにと留めて他はgulpに任せたほうが無難かも。

## 参考にするサイト
webpack公式Guide
https://webpack.js.org/guides

webpack4入門記事
https://ics.media/entry/12140

eslint設定ファイルについて
https://qiita.com/makotot/items/822f592ff8470408be18

画像のコピーや、webpack-dev-serverを使った時に実ファイルが書き出されない問題の解消法を教えてくれる。神。
https://qiita.com/pepoipod/items/e41105e8f3afd47dc01c
