"use client";

import React from "react";
import { Provider } from "react-redux";
import Store from './Store'

export default function dataProvider({ children }) {
  return <Provider store={Store}>{children}</Provider>;
}
