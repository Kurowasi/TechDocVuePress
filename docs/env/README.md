# Environment

## Dockerをインストール
以下のサイトからDockerをダウンロードしてインストールする  
[Docker公式サイト](https://www.docker.com/community-edition#/download)

## Gitをインストール
以下のサイトからGitをダウンロードしてインストールする  
[Git公式サイト](https://git-scm.com/book/ja/v1/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)

## プロジェクトを自分のローカルに落とす
```
$ git clone　リポジトリURL
$ cd プロジェクト名
```

## docker-composeを利用して開発環境立ち上げ
```
$ docker-compose build
$ docker-compose up -d
```

# 開発の流れ

## 1. Docker環境を起動
```
$ docker-compose up -d
```

## 2. ソースコードを修正

## 3. Docker環境を落とす
```
$ docker-compose down
```