# TAoSK - LP

フォルダ構成やコーディング規約等はここを参照しよう</br>
`npm` は禁止 `yarn` を使う

## 初期インストール

`cd TAoSK`</br>
`yarn`</br>

## 起動方法

`yarn start`</br>

## フォルダ構成

```bash
TAoSK-lp/
      ├─ public
      ├─ src/
            ├─ components/
                  ├─ ui/
                  ├─ models/
            ├─ hooks/
            ├─ consts/
            ├─ providers/
            ├─ utils/
                  ├─ animations/
            ├─ env/
            ├─ styles/
```

| ディレクトリ     | 役割                                  |
| ---------------- | ------------------------------------- |
| components       | ui: 各パーツ models: ビジネスロジック |
| hooks            | hooks 関数                            |
| consts           | 変更が無い値                          |
| providers        | provider の設定                       |
| types            | 共通で使う型                          |
| utils            | 通常関数                              |
| utils/animations | gsapのアニメーションを管理            |
| env              | env 系の設定                          |
| styles           | 初期スタイル設定                      |

## コード規約

### コードについて

- any は禁止。unknown を使う
  - やむを得ず使用する場合はコメントアウトを書く
- as は API との関係もあるため禁止とまではいかないが、極力使わないようにする
  - レビューの際に厳しくチェックする
- 色の変数名は name-that-color を使う
  - [Name that Color - Chirag Mehta : chir.ag](https://chir.ag/projects/name-that-color)
- コメントアウトで何か書くときは、該当するものがあれば Prefix を付けるようにする
  - ex: TODO, FIXME, BUG, HACK, XXX
    - HACK と XXX は危険なコードの意味。なんとなく XXX の方が危険そうなイメージある
  - VSCode の拡張機能の "Todo Tree" を入れる
    - 左のサイドバー下のチェックアイコンを押すと、上記の ex で示した prefix がついたコメントアウトが一覧で確認できる
- プロジェクト共通の定数についてはコンスタンスケースを使う
  - 主に `src/consts` や `src/styles/theme.ts` が該当
  - ex. SIZE_14, HEADER_HEIGHT, RED_OXIDE
- enum 禁止
  - オブジェクトに`as const`をつける
- utils, hooks 内のフォルダに関しては、JSDoc で説明を書く
  - param, return に関しては必須ではないが、わかりづらいと判断した場合は追加する

### コンポーネントについて

- 1 コンポーネント最大 300~350 行までとする
  - スタイルの関係でどうしても収まらない場合もあるかもしれないが、その場合でも少なくともスタイル以外の部分は 200~250 行で収めるようにする
- map 内でさらに map を使うような場合はコンポーネントに分ける
- 単一責任の原則を守る
  - 今回は使う機会はないかもしれないが頭に入れておいて欲しい
  - 1 コンポーネント内に複数アクターを扱う処理を書かないようにする
    - アクター: 人事、一般ユーザー
  - 例えば、同じ画面でも一般ユーザーと人事で表示内容が異なる場合、それぞれでコンポーネントを分ける
    - テキストが少し分岐する程度なら分けなくても良いが、処理そのものが変わるような場合は分ける
- コンポーネント作成時は、props で className を受け取れるようにするために、FCX の型を仕様する

  - これをしないと、`styled(Component)``` のようにコンポーネントをスタイル拡張する際に、スタイルが付与できなくなる
  - 詳しくはこの記事を参考: [React.FC 型を拡張する - Qiita](https://qiita.com/Takepepe/items/f66c7e2e1d22b431f148)

  ```tsx
  import React, { FCX } from "react";

  const Text: FCX<Props> = (props) => {
    return <Component className={props.className}>hoge</Component>;
  };
  ```

- コンポーネントに margin をつけない
  - 参考: [UI コンポーネントにはマージンをつけるな！絶対にだ！！ - Qiita](https://qiita.com/otsukayuhi/items/d88b5158745f700be534)

### hooks と utils について

- "共通できるか" という視点ではなく、機能単位でどんどんファイルに分けていく
- 見た目の関心ごと以外のロジックはなるべくファイルに切り出すようにする
- useState などの hooks を使う処理は hooks フォルダ内に、それらを一切使わない純粋な JS の処理のみを記述する場合は utils に格納する
- 2~5 行程度であれば切り出さなくても良い
  - この処理が utils に属するものであれば、コンポーネントの外に記述する
- フォルダ内はどんどん増えていくが、無理に分けようとはせず、明確な共通部分が自然とできた時に初めてフォルダ分けする

### その他考え中のこと

- hooks 内の粒度について
  - いくらコンポーネント内を行数制限つけたとしても、カスタムフックが肥大して見づらくなったらどうしようもないよなぁ
  - フック内もどうにか見やすくできるようなルールを設けたい
    - 行数制限でどうにかできるようなものでもなさそうだしむずい

### ファイル名・クラス名・変数・関数名とかの命名

[codic](https://codic.jp/engine)を使う

### ファイル名・クラス名

拡張子が tsx のコンポーネントファイルに関してはアッパーキャメルを使う

```js
// 例
UserData.tsx, PostForm.tsx;
class User extends React.Component {}
const App: FC = () => {};
```

それ以外の通常の ts ファイルなどに関してはローワーキャメルを使う

```js
// 例
multipleIncludes.ts, formatDate.ts,
```

### 変数・関数名

ローワーキャメルを使う

```js
// 例
const userData = "hoge";
const createUser = () => {};
const [state, setState] = useState("");
```

### コンポーネントの呼び出しと書き出し

基本的に default export は禁止、export を利用する

```js
// 例
import { Button } from "components/Button";

export const Hoge = () => {
  // 処理
};
```

### styled-components の使用

- 記述する際はコンポーネントの 1 番下に置く
- 通常のコンポーネントと勘違いが起きないように、接頭辞に「Styled」を付ける

```js
// 例
import { Button } from "components/Button";

export const Hoge = () => {
  return (
    <StyledContainer>
      <p>hoge</p>
      <Button />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: "#fff";
`;
```
