import React from "react";

const PageElement = props => {
  const { data, children } = props;
  const DomNode = data.domNode;
  data.attrs && console.log(Object.entries(data.attrs));

  const attributes = data.attrs
    ? Object.entries(data.attrs).map(attr => `${attr[0]}="${attr[1]}"`)
    : "";
  console.log(attributes);

  return <DomNode {...attributes}>{children}</DomNode>;
};

export default PageElement;
