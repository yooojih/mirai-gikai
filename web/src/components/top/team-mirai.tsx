import { LinkButton } from "./link-button";

export function TeamMirai() {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-6">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold font-lexend tracking-widest text-primary-accent">
            EIC
          </h2>
          <p className="text-sm font-bold text-primary-accent">EICについて</p>
        </div>

        {/* コンテンツ */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-[15px] leading-[28px] text-black">
              一般財団法人環境イノベーション情報機構（EIC）は、環境省の二酸化炭素排出抑制対策事業費等補助事業の執行団体として、多くの地方自治体と協働しながら活動を展開しております。
            </p>
          </div>

          {/* ボタン */}
          <div className="flex flex-col gap-4">
            <LinkButton
              href="https://www.eic.or.jp/eic/"
              icon={{
                src: "/icons/info-icon.svg",
                alt: "",
                width: 23,
                height: 22,
              }}
            >
              EICについて
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
