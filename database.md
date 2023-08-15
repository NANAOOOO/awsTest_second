## データベースの作成

スプレッドシートで例えるなら、**ファイル全体**

```sql
create database comments
```

## テーブルの作成

スプレッドシートで例えるなら、1 つのファイルの中の、**シート 1 枚**がテーブル。

https://www.javadrive.jp/postgresql/table/index1.html

### user テーブル

以下のカラム(列) を持つテーブルを作成します

- id: ユーザの id
- name: ユーザ名

```sql
create table users(
id integer,
name varchar(20));
```

### comments テーブル

以下のカラム(列) を持つテーブルを作成します

- commentId: コメントの id
- toName: コメントの送り先の名前。10 字以内
- fromName: コメントしたユーザの名前。10 字以内
- commentText: コメント内容。300 字以内

`commentId`については、自動で割り振ってもらいましょう！
(アプリを使う人が、次何番でコメントすればいいか、なんてわからないですもんね！万が一かぶったら、過去のコメントが上書きされてしまうかもしれません)

数値の自動割り当てについては、[こちら](https://www.javadrive.jp/postgresql/table/index10.html)

```sql
create table comments(
commentId integer generated always as identity,
toName varchar(10),
fromName varchar(10),
commentText varchar(300));
```

### 余談：テーブルの設計

本当は、toName や fromName は users テーブルと対応させて、を自動で参照することが多いです。例えば、ユーザにログインさせ、今のユーザの情報から自動でデータベースに追加するとか。今回は、簡易的にユーザー名としてます。

例えば、users テーブルに、アイコン画像やプロフィール情報を持たせるとします。

users テーブル

- id: ユーザの id
- name: ユーザ名
- profileImg: プロフィール画像

すると、コメント画面は以下のような手順でアイコンを表示できます！

1. コメントがあったら、`コメントしたユーザのid` を取得
2. `コメントしたユーザのid` をもとに、users テーブルで検索をし情報をとってくる(SELECT 文)
3. 得られたプロフィール画像を掲示板画面に表示

データベースの情報が重複しないように設計することがデータベースを扱うエンジニアの腕の見せ所です！興味のある人は、「データベース　正規化」「データモデリング」等で調べてみてください！

参考：

https://qiita.com/mochichoco/items/2904384b2856db2bf46c

### 一旦確認

> \dt;

を実行し、テーブルが 2 つ作成されていることを確認！

>          List of relations

     Schema |   Name   | Type  | Owner
    --------+----------+-------+-------
     public | comments | table | ayana
     public | users    | table | ayana
    (2 rows)

## データを追加する

テーブルにデータを追加しましょう

https://www.javadrive.jp/postgresql/insert/index1.html

**注意：**
文字列は、**シングルクォーテーション**で囲みましょう！

```sql
insert into users values (1,'waffle');
insert into users values (2,'choco');
```

### 確認

データが追加されているか確認しましょう

https://www.javadrive.jp/postgresql/select/index1.html

```sql
select * from users;
```

## やってみよう！

### アプリ側でデータの追加

> node app.js

でアプリを起動

Google Chrome で[http://localhost:3000/](http://localhost:3000/)にアクセス

表示されるフォームに、名前とコメントを追加

### Postgres で確認

ターミナルで以下を実行。postgres を起動

> psql -d comments

comments テーブルにデータが追加されているか確認しましょう！

```sql
select * from comments;
```

  <% if (stocks.length > 0) { %>
    <ul>
      <% stocks.forEach(stock => { %>
        <li><%= stock.productname %> - Quantity: <%= stock.productquantity %></li>
      <% }) %>
    </ul>
  <% } else { %>
    <p>No stocks available.</p>
  <% } %> 
   <% if (sales.length > 0) { %>
    <ul>
      <% sales.forEach(sale => { %>
        <li><%= sale.productname %> - Quantity: <%= sale.quantity %> - Amount: <%= sale.amount %></li>
      <% }) %>
    </ul>
    <p>Total Sales Amount: <%= totalSalesAmount %></p>
  <% } else { %>
    <p>No sales recorded.</p>
  <% } %>

    