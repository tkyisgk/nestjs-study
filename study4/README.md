# study4

## やること
* GraphQLと連携する

## 手順

### GraphQLを動かす

* 公式サイトに則り、以下のモジュールをインストール

``` bash
$ yarn add @nestjs/graphql graphql-tools graphql apollo-server-express
```

* app.module.tsに、graphqlをインポート

* それだけだと、実行エラーになってしまうため、リゾルバーを最低１つ定義する。

### MySQL、TypeORM、GraphQLを連携する

* models/resolver/service/DTO（入力検証タイプ）を定義する

* 追加後にサーバーを起動すると、以下のエラーが発生する

``` bash
$ yarn start

SyntaxError: Cannot use import statement outside a module
```

* 原因は、app.module.tsで読み込んでいるentitiesがtsを読み込めないらしい。
* ビルド後のjsファイルをmodelとして読み込むように変更
* [参考](https://github.com/nestjs/nest/issues/4283)

* queryとmutationを実行する
  
``` graphql
query {
  users {
    id
    firstName
    lastName
    isActive
  }
}
```

``` graphql
query($id: ID!) {
  user(id: $id) {
    id
    firstName
    lastName
    isActive
  }
}

<!-- variables -->
{
  "id": 1
}
```

``` graphql
mutation($user: AddUserInput!) {
  addUser(user: $user) {
    id
    firstName
    lastName
    isActive
  }
}

<!-- variables -->
{
  "user": {
 		"firstName": "tatsuya",
  	"lastName": "fujiwara" 
	}
}
```

### リレーションの追加