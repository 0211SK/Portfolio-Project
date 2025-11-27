# 🌟 Portfolio Project — Nuxt 3 + TypeScript + E2E/Unit Tests

このリポジトリは **Nuxt 3 + TypeScript** を用いて構築した、個人ポートフォリオサイトです。  
制作実績、プロフィール、経験、スキル、問い合わせフォームを備え、  
さらに **E2E（Cypress）/ Unit（Vitest）/ API テスト** を完備した実務レベル構成になっています。

---

## 🚀 Features（このサイトでできること）

### ■ Top（トップページ）
- 大きなメイン画像（Hero）
- 自己紹介メッセージ  
- 次のページへ進むシンプルな導線

### ■ Profile（プロフィール）
- 3カラム構造  
  - 左：写真・基本情報  
  - 中央：ABOUT / SKILLS（Radar Chart）  
  - 右：MY LIFE（年表形式のタイムライン）
- コンポーネント構造化（ProfileLeft / ProfileCenter / ProfileRight）

### ■ Experience（経験）
- 経験カード一覧（ExperienceCard）
- クリックで詳細モーダル（ExperienceModal）
- モーダル内に月別タイムライン表示

### ■ Works（制作物）
- 制作物一覧（スクロール可能）
- 作品選択で右側にプレビュー画像表示
- 複数画像のプレビューに対応

### ■ Contact（お問い合わせ）
- 名前 / メール / 内容の送信フォーム
- Nitro API（/api/contact）経由で Gmail へメール送信
- nodemailer + .env による安全な認証
- バリデーション / エラーメッセージ表示

### ■ Navigation（ページ移動）
- 共通コンポーネント PageNavButtons
- 各ページで「戻る」「次へ」が柔軟に設定可能

---

## 🛠 Tech Stack

### Frontend
- Nuxt 3
- Vue 3（Composition API）
- TypeScript
- SCSS / CSS / レスポンシブ対応
- Chart.js（レーダーチャート）

### Backend
- Nitro Server（Nuxt 内蔵 API）
- nodemailer（問い合わせメール送信）

### Testing
- Vitest（ユニットテスト）
- Cypress（E2E / UI 動作確認）
- Mock / Intercept / Snapshot など対応済み

---

## 📁 Directory Structure

```bash
app/
  ├─ components/
  ├─ pages/
  ├─ data/
  ├─ assets/
  ├─ server/
  │   └─ api/
  │        └─ contact.post.ts    # お問い合わせAPI
  └─ plugins/

tests/
  ├─ unit/
  │   ├─ ContactForm.spec.ts
  │   ├─ WorksList.spec.ts
  │   └─ WorksPreview.spec.ts
  ├─ server/
  │   └─ contactApi.spec.ts      # nodemailer 完全モックのAPIテスト

cypress/
  ├─ e2e/
  │   ├─ top-page.cy.ts
  │   ├─ profile-page.cy.ts
  │   ├─ experience-page.cy.ts
  │   ├─ works-page.cy.ts
  │   ├─ contact-page.cy.ts
  │   └─ page-nav-buttons.cy.ts
  ├─ fixtures/
  ├─ screenshots/
  └─ support/
```

---

## ⚙ Setup（セットアップ）
```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

http://localhost:3000 が開発環境になります。

---

## 🧪 Testing（テスト実行方法）
■ Unit / Server Tests（Vitest）

ユニットテスト（ContactForm / WorksList / WorksPreview など）
＋ API サーバー（nodemailer モック）のテストが含まれています。

npm run test


テストファイルは tests/unit と tests/server にあります。

■ E2E Tests（Cypress）

UI の全ページ遷移・モーダル動作・フォーム送信まで確認します。

GUI モード（視覚的に確認）
npx cypress open

CLI（自動実行）
npx cypress run


テストファイルはすべて cypress/e2e/ に配置され、
以下のページが完全自動でテストされます：

Top ページ

Profile ページ

Experience ページ（モーダル操作含む）

Works ページ（一覧・プレビュー連動）

Contact ページ（送信テスト）

PageNavButtons（戻る / 次へ 導線テスト）

---

## 🔐 Environment Variables（.env 設定）

お問い合わせフォームで Gmail にメール送信するため、以下を設定してください。

プロジェクトルートに .env を作成：

```env
GMAIL_USER=your@gmail.com
GMAIL_PASS=your_app_password
MAIL_TO=destination@gmail.com
```

※ Gmail の「アプリパスワード」が必要です。
通常のログインパスワードでは動作しません。

---

## 📬 Contact API Overview（サーバー側のしくみ）

/server/api/contact.post.ts では以下を実装しています：

必須項目（name / email / message）のチェック

nodemailer による Gmail SMTP 送信

成功：{ success: true }

失敗：{ success: false, error: '送信に失敗しました。' }

エラー時のログを console.error('[MAIL ERROR]', error) で記録

Vitest による API テスト（nodemailer 完全モック）

---

## 🖼 Screenshots

Top
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/3799571c-b573-444c-9712-bf1e6f0279a3" />

Profile
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/84570846-59d7-49cb-8bd9-a7828fd2222c" />

Experience
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/ea28842c-0c80-462d-8b0c-11b298d3cbfd" />
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/651e626b-88d5-4ba5-b528-7b3e66fdddcc" />

Works
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/ce00b25b-e8e4-4f96-8b62-f0f79cd73646" />

ContactForm
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/bb6b7e17-0948-4570-a9bc-94ba84065b15" />

---

## 💡 工夫したポイント

本プロジェクトでは、Nuxt 3 + TypeScript を用いて
コンポーネント設計、UI 実装、API 構築、テスト自動化まで
フロント〜バックエンド〜CI の全工程を通して構築しています。

---

## 🌐 Deployment

本プロジェクトは **Vercel** にデプロイしています。

- Production URL: https://portfolio-project-ruby-five.vercel.app/
- CI: GitHub Actions + Cypress + Vitest

---

## 📄 License

This project is for personal portfolio use and not intended for commercial distribution.
