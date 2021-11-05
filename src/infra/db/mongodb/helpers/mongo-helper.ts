import { MongoClient } from 'mongodb'

export const MongoHelper = {
  /*
   * This is a necessary workaround because TypeScript syntax for typing is
   * the same that JavaScript uses to define the value of an object property.
   */
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
