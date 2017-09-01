# CLWO Forum Header

> Proxy requests to `/networkquery.php` to remove extraneous information.

## Installation

```sh
$ git clone https://github.com/popey456963/clwo-forum-header
$ cd clwo-forum-header
$ npm i
$ npm start
```

## Usage

The API, by default, binds to :3050.  It contains the following endpoints:

 - `/` - Provides a list of current running servers, and metadata about those servers.

### Response Format

```json
{
  "servers": {
    "Jailbreak": {
      "player_count": "13",
      "max_players": "40",
      "map": "jb_obama_v5_beta",
      "ip": "jb.clwo.eu/27015",
      "staff": "0",
      "warden": "Kayf the deceiver"
    },
    "TTT": {
      "player_count": "4",
      "max_players": "30",
      "map": "ttt_community_pool_csgoport_v6",
      "ip": "ttt.clwo.eu/27015"
    },
    "Minirace": {
      "player_count": "0",
      "max_players": "40",
      "map": "minirace_v3",
      "ip": "mr.clwo.eu/27015"
    },
    "Deathrun": {
      "player_count": "0",
      "max_players": "24",
      "map": "dr_dojo",
      "ip": "dr.clwo.eu/27015"
    }
  }
}
```

## License

ISC © [popey456963](https://github.com/popey456963)
