const { get, post } = require('snekfetch');
const express = require('express');
const btoa = require('btoa');
const app = express();

const cfg = {
  id: 'get_one',
  secret: 'get_one'
};

app.get('/', (req, res) => {
  res.redirect([
    'https://discordapp.com/oauth2/authorize',
    `?client_id=${cfg.id}`,
    '&scope=identify+guilds',
    '&response_type=code',
    `&callback_uri=https://tamoghnak13.github.io/DB/`
  ].join(''));
});

app.get('/authorize', (req, res) => {
  const code = req.query.code;
  const cred = btoa(`${cfg.id}:${cfg.secret}`);
  post(`https://discord.com/api/oauth2/authorize?client_id=817430466717941815&redirect_uri=https%3A%2F%2Ftamoghnak13.github.io%2FDB%2F&response_type=code&scope=identify%20email`)
    .set('Authorization', `Basic ${cred}`)
    .then(response => res.redirect(`/guilds?token=${response.body.access_token}`))
    .catch(console.error);
});

app.get('/guilds', (req, res) => {
  get('https://discordapp.com/api/v6/users/@me/guilds')
    .set('Authorization', `Bearer ${req.query.token}`)
    .then(response => res.json(response.body))
    .catch(console.error);
});

app.listen(8080, () => console.log('Ready'));6
