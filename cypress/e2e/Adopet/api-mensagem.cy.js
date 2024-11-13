describe('Api Adopets', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZmViZGU4MS03N2FiLTRmZjQtODU4MC1lZTJkODAwODNhZmIiLCJhZG9wdGVyTmFtZSI6Ikd1aWxoZXJtZSBMaW5zIiwiaWF0IjoxNzMxNDM3ODIwLCJleHAiOjE3MzE2OTcwMjB9.07N5SMPJVtxkPbPEpQ_ZBm8Nl7GdPhAHxKBur-g_0a0`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: { authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})