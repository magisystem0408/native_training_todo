

## expoにおける環境構築env
- app.jsonをapp.config.tsに変える
- jsonにexport defaultにする
```shell
extra:{
  apiKey:process.env.API_KEY,
  authDomain:process.env.AUTH_DOMAIN,
  ...
}
```