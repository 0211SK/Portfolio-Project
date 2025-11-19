export type TimelineBlock = {
    period: string
    items: string[]
}

export type Experience = {
    id: number
    title: string
    summary: string
    detail?: string
    timeline?: TimelineBlock[]
}

// 実データ
export const experiences: Experience[] = [
    {
        id: 1,
        title: 'リストデータの移行ツール作成',
        summary: '【使用言語】\nフロント：HTML、CSS、Javascript\n【期間】\n2024/8～2024/10',
        detail: `CSV形式の既存データをSFDCに移行するための形式変換ツールを作成する案件。\nCSVの種類ごとに移行フォーマットが異なっており、4つのフォーマット変更を担当。データの順番、分割単位の変更、データ型の変更などの機能を実装。
    \n【使用ツール】\n作業管理：Backlog\nソース管理：Git、GitHub、VisualStudioCode\nコミュニケーション：teams`,
        timeline: [
            {
                period: '8月',
                items: [
                    'CSVを読み込ませ、フォーマットを変更しCSVファイルを出力するプログラムの開発'
                ]
            },
            {
                period: '9月',
                items: [
                    'CSVを読み込ませ、フォーマットを変更しCSVファイルを出力するプログラムの開発',
                    'Backlogに上がった不具合の改修'
                ]
            },
            {
                period: '10月',
                items: [
                    'Backlogに上がった不具合の改修'
                ]
            }
        ]
    },
    {
        id: 2,
        title: '工業系の業務ツールの改修及びテスト',
        summary: '【使用言語】\nCOBOL\n【期間】\n2024/11～2025/3',
        detail: `社員番号の桁数を4から6桁に変更する修正をし、それが他の機能に影響を与えていないか画面ごとに単体テストする案件。\n主な担当は修正と単体テストで、影響範囲の調査・結合テスト・簡単なロジックの開発も一部担当。
    \n【使用ツール】\n作業管理：Excel\nソース管理：Excel、エクスプローラー\nコミュニケーション：teams`,
        timeline: [
            {
                period: '11月',
                items: [
                    '改修されたソースの差分反映作業',
                    'IFファイル取込プログラムの設計書作成・開発・単体テスト仕様書の作成'
                ]
            },
            {
                period: '12月',
                items: [
                    'マスタ連携プログラムの設計書作成・開発・単体テスト仕様書作成',
                    'IFファイル取込・マスタ連携プログラムの単体テスト実施'
                ]
            },
            {
                period: '1月',
                items: [
                    '社員番号4桁→6桁変更の修正',
                    '社員番号4桁→6桁変更の単体テスト実施'
                ]
            },
            {
                period: '2月',
                items: [
                    '社員番号4桁→6桁変更の単体テスト実施',
                    'JP1Scriptの起動テスト（PGの整合性チェック）'
                ]
            },
            {
                period: '3月',
                items: [
                    'JP1Scriptの単体テスト実施',
                    '結合テスト'
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Webシステムのリライト案件',
        summary: '【使用言語】\nフロント：HTML、CSS、Javascript\nバックエンド：Kotlin\n【期間】\n2025/4～2025/10',
        detail: `データ移行に伴い、Javaで作成されているWebシステムをKotlinで再作成するリライト案件。\nフロント〜バックエンドまで一貫して開発し、設計書の作成～結合テストまでを担当。
    \n【使用ツール】\n作業管理：Redmine\nソース管理：Git、GitHub、VisualStudioCode\nコミュニケーション：Slack`,
        timeline: [
            {
                period: '4月',
                items: [
                    'Javaで作成された既存ソースの解析',
                    '画面定義書の作成',
                    '画面設計書の作成'
                ]
            },
            {
                period: '5月',
                items: [
                    'クライアント提供デザイン通りに画面を実装（3画面担当）',
                    '作成した画面の単体テスト（テストコード作成）',
                    'BFF設計書の作成'
                ]
            },
            {
                period: '6月',
                items: [
                    'BFF設計書を元にインターフェースを実装',
                    '画面デザインの修正対応'
                ]
            },
            {
                period: '7月',
                items: [
                    'BFFの仮製造（API未接続のスタブ版）',
                    '作成したBFFの単体テスト（テストコード作成）'
                ]
            },
            {
                period: '8月',
                items: [
                    '結合テスト用データの作成',
                    '結合テスト（3画面担当）'
                ]
            },
            {
                period: '9月',
                items: [
                    'BFFの本製造（実APIの適用）',
                    '作成したBFFの単体テスト（テストコード作成）',
                    'バグ修正（6画面担当）'
                ]
            },
            {
                period: '10月',
                items: [
                    'バグ修正（6画面担当）',
                    '性能改善対応',
                    '結合テスト（6画面担当）'
                ]
            }
        ]
    }
]
