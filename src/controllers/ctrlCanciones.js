
app.get('/', (req, res) => {
    res.send('GET request received')
  })
  
  app.post('/', (req, res) => {
    res.send('POST request received')
  })
  
  app.put('/', (req, res) => {
    res.send('PUT request received')
  })
  
  app.delete('/', (req, res) => {
    res.send('DELETE request received')
  })