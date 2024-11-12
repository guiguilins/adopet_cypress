describe('Api Adopets', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZmV
  iZGU4MS03N2FiLTRmZjQtODU4MC1lZTJkODAwODNhZmIiLCJhZG9wdGVyTmFtZSI6Ikd1aWxoZXJtZSBMaW5zIiwiaWF
  0IjoxNzMxNDI0MjAyLCJleHAiOjE3MzE2ODM0MDJ9.K3ktDfqN3sX3ilL8IUg6ZlSptHYSz1_UsxiIkS1T_wg`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })

    })
})