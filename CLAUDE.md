# kanban-app

クリーンアーキテクチャを学ぶためのカンバン API（Express + TypeScript + Prisma/SQLite）。
ブログ連載「クリーンアーキテクチャ → TDD → DDD」の題材でもある。

## このリポジトリでの進め方（最重要）

**学習が目的。コードは Claude が書くが、書く前に必ずユーザーが設計を説明する。**

1. ユーザーが「この層に何が必要か・なぜか・何に依存するか」を自分の言葉で説明する
2. Claude はその説明をレビューする（正しい点 / 抜け / 誤解を指摘し、質問で考えを深める）
3. 設計に合意してから Claude が実装する
4. 実装と、ユーザーの説明との対応を示す

守ること:

- ユーザーの説明より先に答え（設計やコード）を出さない。行き詰まったらヒントを段階的に出す
- 合意した設計から勝手に広げない（ついでの機能追加・リファクタをしない）
- 1 回の作業単位は小さく（1 層 or 1 ファイル群）。差分をブログで見せやすくする
- 学習セッションは `/start-study` で始める

## 連載ステージの制約

現在は **クリーンアーキテクチャ編**。後の記事のネタを先取りしない。

- TDD（テストファースト）はしない。テストは頼まれたときだけ
- DDD のパターン（値オブジェクト、集約、リッチな不変条件）は入れない
- 提案が後の記事に属するときは「これは TDD/DDD 編の話」と指摘するに留める

## アーキテクチャ

依存の向きは必ず内側へ: `infrastructure → adapter → application → domain`

| 層 | 場所 | 役割 |
| --- | --- | --- |
| domain | `src/domain/` | エンティティ（`Task`）、`TaskStatus`、リポジトリのインターフェース |
| application | `src/application/` | ユースケース（`usecases/<name>/`）と DTO（`dto/`） |
| adapter | `src/adapter/` | コントローラ、リポジトリ実装など外界との変換 |
| infrastructure | `src/infrastructure/` | Express（`web/`）、Prisma クライアント（`database/`）、組み立て |

- 内側の層は外側の層を import しない（domain は何にも依存しない）
- ユースケースは `XxxUseCaseInterface` を実装し、リポジトリはインターフェース経由で受け取る（コンストラクタ注入）
- ユースケースの入出力は DTO。domain の `Task` を外に漏らさない（`toTaskResponseDto` で詰め替え）

## コード規約

- ファイル名は camelCase（`createTaskUseCase.ts`）、インターフェースは `XxxInterface` 接尾辞
- ESM + `nodenext`: 相対 import には `.js` 拡張子を付ける。型だけの import は `import type`
- コメントとエラーメッセージは日本語
- Prisma のクライアントは `generated/prisma/` に生成される

## コマンド

- `npm run dev` — 開発サーバー（`src/infrastructure/web/app.ts`）
- `npm run typecheck` — 型チェック（実装後は必ず通す）
- `npm test` — vitest
- `npm run db:migrate` / `npm run db:generate` — Prisma

## Git

main に直接 push。コミットメッセージは Conventional Commits（`feat:` など）。コミットはユーザーが OK を出してから。
