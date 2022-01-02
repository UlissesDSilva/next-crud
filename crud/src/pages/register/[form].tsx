import Form from "../../components/Form"
import Layout from "../../components/Layout"
import Client from "../../core/Client";
import { useRouter } from "next/router";

export default function FormRegister() {
  const router = useRouter()
  const idClient = router.query.form

  if(idClient === "_") {
    return(
      <Layout title="Formulário">
        <Form/>
      </Layout>
    )
  }

  return(
    <Layout title="Formulário">
      <Form idClient={`${idClient}`}/>
    </Layout>
  )
}