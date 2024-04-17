import React from "react";

const About = () => {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Wiki Quizとは</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">
          Wikipediaの冒頭文から何の記事か当てるゲーム
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-1xl font-bold">Home</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">
          問題ページです。 ランダムに問題が表示されます。
          「答えを見る」ボタンを押すと答えのWikipediaページを開きます。
          次の問題に行く場合はページを更新してください。
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-1xl font-bold">About</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">本アプリの説明ページです。</p>
      </div>

      <div className="mb-8">
        <h1 className="text-1xl font-bold">Search</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">
          検索ページです。 問題のIDを入力すると該当の問題ページが表示されます。
        </p>
      </div>
    </div>
  );
};

export default About;
