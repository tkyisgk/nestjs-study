# study3

## やること
* GraphQlと連携する

## 手順

### GraphQLを動かす

* 公式サイトに則り、以下のモジュールをインストール

``` bash
$ yarn add @nestjs/graphql graphql-tools graphql apollo-server-express
```

* app.module.tsに、graphqlをインポート

* それだけだと、実行エラーになってしまうため、リゾルバーを最低１つ定義する。

### MySQL、TypeORM、GraphQLを連携する

* models/resolver/serviceを定義する

* 追加後にサーバーを起動すると、以下のエラーが発生する

``` bash
$ yarn start

SyntaxError: Cannot use import statement outside a module
```

* 原因は、app.module.tsで読み込んでいるentitiesがtsを読み込めないらしい。
* ビルド後のjsファイルをmodelとして読み込むように変更
* [参考](https://github.com/nestjs/nest/issues/4283)