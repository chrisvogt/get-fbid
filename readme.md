# get-fbid [![Build Status](https://travis-ci.org/chrisvogt/get-fbid.svg?branch=master)](https://travis-ci.org/chrisvogt/get-fbid) [![codecov](https://codecov.io/gh/chrisvogt/fbid/badge.svg?branch=master)](https://codecov.io/gh/chrisvogt/fbid?branch=master)

> Get the FBID for a Facebook Group, Page or Profile.


## Install

```
$ npm install get-fbid
```


## Usage

```js
const getFBID = require('get-fbid');

getFBID('google');
//=> '104958162837'
```


## API

### getFBID(username)

#### input

Type: `string`

The username for the Group, Page or Profile..


# Errors

`getFBID()` rejects when it is unable to find an FBID for a username. It also rejects when Facebook returns a 404, which can happen for a valid user depending on their privacy settings.


## License

MIT © [Chris Vogt](https://www.chrisvogt.me)
