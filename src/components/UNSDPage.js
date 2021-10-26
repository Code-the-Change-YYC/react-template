import React from "react";

const UNSD = () => (
  <>
    <p>
      UNSD
    </p>
    <p>
      This boilerplate site was bootstrapped with Create React App.
    </p>
    <List />
  </>
)

const List = () => (
  <div>
    <p>Hello! Here's a to-do:</p>
    <ul>
      <li>Handle back-end REST API</li>
      <li>Create simple template</li>
    </ul>
  </div>
);

export default UNSD;