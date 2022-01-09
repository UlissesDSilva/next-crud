import { useState } from "react";

export default function useShow() {
  const [show, setShow] = useState<"table" | "form">('table')

  const showTable = () => setShow('table')
  const showForm = () => setShow('form')

  return {
    visibleForm: show === 'form',
    visibleTable: show === 'table',
    showForm,
    showTable
  }
}