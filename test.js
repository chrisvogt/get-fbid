import test from 'ava';
import proxyquire from 'proxyquire';

const getFBID = proxyquire
  .noCallThru()
  .load('./index.js', {
    got: username => new Promise((resolve, reject) => {
      if (username === 'google') {
        resolve({body: 'fb://page/104958162837'});
      }

      if (username === 'no-id') {
        resolve({body: 'hellogoodbye'});
      }

      reject(new Error(404));
    })
  });

test('gets getFBID from a username', async t => {
  t.is(await getFBID('google'), '104958162837');
});

test('rejects when no username was found', async t => {
  await t.throws(getFBID('no-id'));
});

test('rejects when unable to resolve the request', async t => {
  await t.throws(getFBID('no-access'));
});

test('rejects when username is not a string', async t => {
  await t.throws(getFBID());
});

test('rejects when username is empty', async t => {
  await t.throws(getFBID(''));
});
