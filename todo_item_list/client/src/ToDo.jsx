import React, { useState } from "react";

const id = (function*() {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

export default function ToDo({ addArticle, articleList }) {
  const [articles, setArticles] = useState([
    {
      id: id.next(),
      title: "Item 1",
      details: "Item 1 details",
      display: "none"
    },
    {
      id: id.next(),
      title: "Item 2",
      details: "Item 2 details",
      display: "none"
    },
    {
      id: id.next(),
      title: "Item 3",
      details: "Item 3 details",
      display: "none"
    },
  ]);

  const [title, setTitle] = useState("");
  const [details, setdetails] = useState("");

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangedetails(e) {
    setdetails(e.target.value);
  }

  function onClickAdd() {
    setArticles([
      ...articles,
      {
        id: id.next(),
        title: title,
        details: details,
        display: "none"
      }
    ]);
    setTitle("");
    setdetails("");
  }

  function onClickRemove(id) {
    setArticles(articles.filter(article => article.id !== id));
  }

  function onClickToggle(id) {
    const index = articles.findIndex(article => article.id === id);
    const updatedArticles = [...articles];

    updatedArticles[index] = {
      ...articles[index],
      display: articles[index].display ? "" : "none"
    };

    setArticles(updatedArticles);
  }

  return (
    <div className="mainToDoComp">
      <section>
        {addArticle({
          title,
          details,
          onChangeTitle,
          onChangedetails,
          onClickAdd
        })}
        {articleList({ 
          articles, 
          onClickToggle, 
          onClickRemove 
        })}
      </section>
    </div>

  );
}