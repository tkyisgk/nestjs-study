# study3

## やること
* database連携

## 手順

### Nest.jsでTypeORMの設定をする

* TypeORM / MySQLをインストール

``` bash
$ yarn add @nestjs/typeorm typeorm mysql2
```

* `app.module.ts`にインポートする。
* forRootのプロパティは、[こちら](https://typeorm.io/#/connection-options)に準拠
* forRootのプロパティは、`ormconfig.json`として管理することも可能。


### dockerを使って、MySQLを起動する
* docker-compose.ymlを記述する
* dockerを起動した上で、
``` bash
$ docker-compose up -d

# 起動中のコンテナを確認
$ docker-compose ps

$ docker exec -it DBコンテナNAME  bash

# MySQLログイン
$ mysql -u root -p

```

* TypeORMで記述した、userテーブルが作成されていることが確認できる

| Field     | Type         | Null | Key | Default | Extra          |
|-----------|--------------|------|-----|---------|----------------|
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| firstName | varchar(255) | NO   |     | NULL    |                |
| lastName  | varchar(255) | NO   |     | NULL    |                |
| isActive  | tinyint(4)   | NO   |     | 1       |                |

### MySQLコマンドメモ
``` bash
# データベース一覧を見る
$ show databases;

# データベースを指定する
$ use DATABASE_NAME;

# テーブル一覧を見る
$ show tables;

# テーブル定義を見る
$ desc TABLE_NAME;

# テーブルのレコードを見る
$ select * from TABLE_NAME;

# レコードを追加
$ insert into TABLE_NAME (COLUMN_NAME_1, COLUMN_NAME_1) values (COLUMN_VALUE_1, COLUMN_VALUE_2);

```

### 疎通確認

* 詳細は`/src/users/users.controller.ts`に記載


### リレーショナルの確認

* TypeORMのManyToOne / OneToManyのか考え方。
* たとえば、userとphotoというデータを考えると、userはphotoをたくさんもっている可能性があるので、OneToMany
* 逆に、photoは撮った人という概念で考えると、ユーザーは１人しか紐づかないので、ManyToOne

### PhotoとUserの紐付け

``` bash
# アクセス
$ post: localhost:3000/photos

# body
{
  "title": "first photo",
  "fileName": "test.jpg",
  "user": "1" # ユーザーIDが存在する値ではないとエラーが発生する
}
```
