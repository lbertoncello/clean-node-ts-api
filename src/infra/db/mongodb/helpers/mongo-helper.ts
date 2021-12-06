import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  /*
   * This is a necessary workaround because TypeScript syntax for typing is
   * the same that JavaScript uses to define the value of an object property.
   */
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  async getCollection (name: string): Promise<Collection> {
    return this.client.db().collection(name)
  },

  map (document: any): any {
    const { _id, ...documentWithoutId } = document

    return Object.assign({}, documentWithoutId, { id: _id })
  }
}
