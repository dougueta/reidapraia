import React from "react";

const Component = () => {
  return <div>teste</div>;
};

const list = ["dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog"];

list.map((item) => {
  return <Component />;
});
