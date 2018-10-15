'use strict';

const got = require('got');

const DEFAULT_USER_AGENT = 'https://github.com/chrisvogt/get-fbid';
const FB_BASE_URL = 'https://www.facebook.com/';
const USERNAME_REQUIRED = 'Username required';

const fbidMatch = /fb:\/\/(group|page|profile)\/(\d{1,})/gi;
const fbidSanitize = /fb:\/\/(group|page|profile)\//gi;

module.exports = async username => {
  if (typeof username !== 'string' || username.length === 0) {
    throw new TypeError(USERNAME_REQUIRED);
  }

  const {body} = await got(username, {
    baseUrl: FB_BASE_URL,
    headers: {
      'user-agent': DEFAULT_USER_AGENT
    }
  });

  try {
    const matchArray = body.match(fbidMatch);
    return matchArray[0].replace(fbidSanitize, '');
  } catch (error) {
    throw new Error(`No FBID found for ${username}`, error);
  }
};
