1. Hash
```sh
npm i bcrypt @types/bcrypt
```
2. import in user service
```ts
import * as bcrypt from 'bcrypt';
```
3. use
```ts
  hash(password: string) {
    return bcrypt.hash(password, Number(process.env.HASH_SALT));
  }
  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }

```

4. user
```ts
 delete user.password;
```
```json

{
  "$__": {
    "activePaths": {
      "paths": {
        "password": "init",
        "username": "init",
        "email": "require",
        "_id": "init",
        "name": "init"
      },
      "states": {
        "require": {
          "email": true
        },
        "init": {
          "_id": true,
          "name": true,
          "username": true,
          "password": true
        }
      }
    },
    "skipId": true,
    "selected": {
      "password": 1,
      "name": 1,
      "username": 1
    },
    "exclude": false
  },
  "$isNew": false,
  "_doc": {
    "_id": "6415669d0b6822d844e5abe2",
    "name": "sajjad",
    "username": "sajjad9",
    "password": "$2b$10$DLoHFDbuRES1BnT0oslJBONCRBPSNbjfbB4o.Iys1/.jtIZprbJ6y"
  }
}

```