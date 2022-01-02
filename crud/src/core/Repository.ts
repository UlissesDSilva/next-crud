import Client from "./Client";

export default interface Repository {
  save(client: Client): Promise<Client>
  delete(client: Client): Promise<void>
  getClient(id: string): Promise<any>
  getAll(): Promise<Client[]>
}