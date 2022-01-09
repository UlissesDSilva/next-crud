import { useState } from "react";

export default function useShow() {
  const [view, setView] = useState("table")

  function changeViewTable() {
    setView("table")
  }

  function changeViewForm() {
    setView("form")
  }

  return{
    view,
    changeViewForm,
    changeViewTable
  }
}