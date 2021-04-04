import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Freelance de website',
        amount: 5000,
        type: 'deposit',
        category: 'Dev',
        createdAt: new Date('2021-03-30 09:00:00')
      }, {
        id: 2,
        title: 'Pagamento do aluguel',
        type: 'withdraw',
        amount: 1200,
        category: 'Gastos',
        createdAt: new Date('2021-04-01 10:00:00')
      }],
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', (schema) => schema.all('transaction').models)

    this.post('/transactions', (schema, request) => {
      let data = JSON.parse(request.requestBody)

      data = { ...data, createdAt: new Date() }

      const { attrs } = schema.create('transaction', data)

      return attrs;
    })
  }
})
