# study2

## やること
* middleware
* 例外フィルター
* Pipe


## middlewareについて
* 特定のルートやコントローラにアクセスした時に、コントローラが実行される前に処理を実行することができる。
* アクセスログなんかに利用する。

## Pipeについて
* `@Injectable()`デコレータで注釈が付けられたクラス
* 主な目的
  * 変換：入力データを目的の形式に変換
  * 検証：入力データを評価し、データが正しくない時に例外をスローする。

### ビルトインパイプ
`@nestjs/common`からインポートして利用する。

```js
ValidationPipe
ParseIntPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
DefaultValuePipe
```

* @Param/@Queryデコレータの第二引数以降は、Pipesを定義できる

## オブジェクトスキーマの検証
* スキーマーを定義することにより、オブジェクトのバリデータをチェック。

``` bash
$ yarn add joi
$ yarn add @types/joi -D
```