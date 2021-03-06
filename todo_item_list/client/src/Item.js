import React from "react";

export default function Item({ 
  article, 
  onClickToggle, 
  onClickRemove }) { 
    return (
      <li>
        <a
          href={`#${article.id}`}
          title="Toggle details"
          onClick={onClickToggle.bind(null, article.id)}
        >
          {article.title}
        </a>
        &nbsp;
        <a
          href={`#${article.id}`}
          title="Remove"
          onClick={onClickRemove.bind(null, article.id)}
        >
          &#10007;
        </a>
        <p style={{ display: article.display }}>
          {article.details}
        </p>
      </li>
  );
}