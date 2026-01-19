
export type WebWork = {
    id: number
    title: string
    description: string
    src: string[]
    gitUrl?: string[]
    webUrl?: string
}

export const webWorksData: WebWork[] = [
    {
        id: 1,
        title: 'ポートフォリオ',
        description: '【使用言語】HTML、CSS、JavaScript、TypeScript\n【フレームワーク】Nuxt.js\n【説明】このポートフォリオサイト自体を制作しました。レスポンシブデザインを採用し、様々なデバイスで快適に閲覧できるようにしています。作品紹介や経歴、スキルなどを掲載しています。',
        src: [
            '/images/webWorks/1.png',
        ],
        gitUrl: ['https://github.com/0211SK/Portfolio-Project'],
        webUrl: 'https://portfolio-project-ruby-five.vercel.app/',
    },
    {
        id: 2,
        title: 'グッズ在庫管理アプリ',
        description: '【使用言語】フロントエンド：HTML、CSS、JavaScript、TypeScript　バックエンド：Java\n【フレームワーク】フロントエンド：Nuxt.js　バックエンド：Spring Boot\n【データベース】postgreSQL\n【説明】グッズの在庫を管理するためのアプリケーションです。フロントエンドとバックエンドを分けて開発しました。ユーザー登録、ログイン、グッズの追加、編集、削除、在庫数の管理などの機能があります。',
        src: [
            '/images/webWorks/2.png',
        ],
        gitUrl: ['https://github.com/0211SK/goods-stock-app',
            'https://github.com/0211SK/goods-stock-backend'
        ],
        webUrl: 'https://goods-stock-app-t5up.vercel.app/login',
    },
]
