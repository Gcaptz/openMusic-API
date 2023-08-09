require('dotenv').config();
const Hapi = require('@hapi/hapi');

const albums = require('./api/albums');
const AlbumService = require('./service/inMemory/albumService');
const AlbumsValidator = require('./validator/albums');

const songs = require('./api/songs');
const SongService = require('./service/inMemory/songService');
const SongsValidator = require('./validator/songs');

const init = async () => {
  const albumService = new AlbumService();
  const songService = new SongService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    debug: { request: ['error'] },
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: albums,
      options: {
        service: albumService,
        validator: AlbumsValidator,
      },
    },
    {
      plugin: songs,
      options: {
        service: songService,
        validator: SongsValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
