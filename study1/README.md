# study1

## やること
* インストール
* DTO
* get/post確認

## 手順

### CLIをインストール

``` bash
$ yarn global add @nestjs/cli
```

### Nest.jsプロジェクトの作成
``` bash
$ nest new <project-name>
```

### 疎通確認
``` bash
$ yarn start

# http://localhost:3000/ にgetでアクセス
```

### エンドポイントを追加してみる
``` bash
# ref: https://docs.nestjs.com/cli/usages#nest-generate

# userモジュール作成
$ nest g mo user

# userコントローラ作成
$ nest g co user

# userサービス作成
$ nest g s user 
```

### DTOを定義する

### user Controller/Serviceを実装

## 疎通確認
``` bash
$ yarn start

# http://localhost:3000/user にpostでアクセス、bodyは以下
{
  "name": "takuya",
  "age": 29,
  "hobby": "music"
}

# http://localhost:3000/user getでアクセス
```


