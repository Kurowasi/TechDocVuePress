# About

## テーマ

### 会社の演習目的
>HTML/CSS/JavaScript + jQuery + Node.js + MSSQLを勉強して欲しい:anguished:
![HTML/CSS/JavaScript](http://shared-blog.kddi-web.com/sites/default/files/webinfo/15/html5_css3_js.png)
![jQuery](https://arrown-blog.com/wp-content/uploads/jQuery-Logo-1-e1502728306914.png)
![Node.js](https://tomokazu-kozuma.com/wp-content/uploads/2017/09/deploy_1504919915.png)
![MSSQL](http://techies-world.com/wp-content/uploads/2016/05/MS_Sqlserver-e1410529521738-800x294.png)

### 自分の演習目的
>- 使われるものを作りたい:grimacing:  
>
>- 新しいものを勉強したい:smile:  

## 作ったもの
<span style="font-size: 130%">:white_check_mark:使われるものを作りたい</span>  
<span style="font-size: 130%">6月に始まるプロジェクトのドキュメント管理サイト</span>  

## New Technology

<span style="font-size: 130%">:white_check_mark:新しいものを勉強したい</span>

* **<span style="font-size: 200%">Docker</span>**  
<span style="font-size: 130%">コンテナ型の仮想環境を作成、配布、実行するためのプラットフォーム</span>  
::: tip
2013年3月26日に発表(今更かよ)
:::
![Docker](https://cdn-ak.f.st-hatena.com/images/fotolife/u/uorat/20170131/20170131164247.png)

* **<span style="font-size: 200%">VuePress</span>**  
<span style="font-size: 130%">技術文書に最適化されたVueによる静的サイトジェネレーター</span>  
::: tip
2018年4月14日に発表
:::
![VuePress](https://vuepress.vuejs.org/hero.png)


## 技術構成

- VuePress
- Nuxt
- Vue.js
- HTML5
- CSS3
- JavaScript
- jQuery
- Vuetify
- Express
- MSSQL
- Docker
- Docker-Compose

![環境イメージ](/structure.png)

|| VuePress       | Express           | Nuxt  |
|:---| :-------------:|:-------------:| :-----:|
|Docker| press      | press | nuxt |
|ポート| 8080      | 3000      | 8888 |
|機能|記事画面 |API      | 管理画面 |

::: tip
Node.jsはv9.1.0を使用
:::

## こだわり部分
1. <span style="font-size: 130%">とにかくレスポンスが</span><span style="font-size: 200%">早い</span>

### Why?
- <span style="font-size: 130%">記事画面はSPA＋SSR</span>  
記事の表示速度が早い  
検索速度も早い  
- <span style="font-size: 130%">管理画面もSPA</span>  
編集画面の内容  

2. <span style="font-size: 130%">環境構築が</span><span style="font-size: 200%">簡単</span>

### Why?
- <span style="font-size: 130%">Dockerを利用</span>  
```
$ git clone リポジトリ名
$ cd リポジトリ名
$ docker-compose build
$ docker-compose up -d
```
::: warning
gitコマンド＆Dockerコマンドが打てる環境
:::

3. <span style="font-size: 130%">マークダウンの結果が</span><span style="font-size: 200%">見れる</span>

4. <span style="font-size: 130%">レスポンシブ対応してるのでスマホでも</span><span style="font-size: 200%">見れる</span>