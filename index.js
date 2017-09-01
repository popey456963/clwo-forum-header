const express = require('express')
const request = require('request-promise')
const compression = require('compression')
const app = express()

let data = {
  servers: {}
}

async function update_data() {
  let network_query = JSON.parse(await request('https://clwo.eu/jailbreak/api/v2/networkquery.php'))
  for (let server of network_query.data) {
    let server_info = {
      player_count: server.ClientCount,
      max_players: server.MaxPlayers,
      map: server.MapDisplayName,
      ip: `${server.Prefix}.clwo.eu/${server.SP}`
    }

    if (server.ShortName == 'Jailbreak') {
      server_info.staff = server.qrd.rules.Staff_online
      server_info.warden = server.qrd.rules.Warden
    }

    data.servers[server.ShortName] = server_info
  }
}

setInterval(update_data, 5000)

app.use(compression())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', function (req, res) {
  res.json(data)
})

app.listen(3050, function () {
  console.log('Example app listening on port 3050!')
})
