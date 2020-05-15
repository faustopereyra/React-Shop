import React from "react";

import CollectionItem from "../collection-Item/collection-item.component"

import "./preview-collection.style.scss"

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherProps }) => (
                    <CollectionItem key={id}{...otherProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;