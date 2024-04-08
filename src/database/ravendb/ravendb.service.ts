import { Injectable } from '@nestjs/common'
import { DocumentStore, IAuthOptions } from 'ravendb'
import * as fs from 'fs'
import { X509Certificate } from 'crypto'

@Injectable()
export class RavenDBService {
  private _store: DocumentStore

  constructor() {
    const url = 'http://172.30.0.2:8080'
    const databaseName = 'Random_fact'

    this._store = new DocumentStore(url, databaseName)
    this._store.initialize()
  }

  get store(): DocumentStore {
    return this._store
  }
}
