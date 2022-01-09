import Client from "../../core/Client";
import Repository from "../../core/Repository";
import {firebase} from "../config";

export default class Collection implements Repository{

  #conversor = {
    //recebe um objeto x e devolve um objeto apto a ser persistido no fireStore
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age,
        editable: client.editable
      }
    },
    //devolve um snapshot e um option
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
      const data = snapshot?.data(options)
      return new Client(data.name, data.age, snapshot.id, data.editable)
    }

  }

  async save(client: Client): Promise<Client> {
    if(client?.id) {
      await this.collectionClient().doc(client.id).set(client)
      return client
    }
    const docRef = await this.collectionClient().add(client)
    const doc = await docRef.get()
    return doc.data()
  }

  async delete(client: Client): Promise<void> {
      return this.collectionClient().doc(client.id).delete()
  }

  async getClient(id: string): Promise<any> {
    const client = await this.collectionClient().doc(id)
    return client
  }

  async getAll(): Promise<Client[]> {
    const query = await this.collectionClient().get()
    return query.docs.map(doc => doc.data()) ?? []
  }

  private collectionClient(){
    return firebase.firestore().collection('clients').withConverter(this.#conversor)
  }
}