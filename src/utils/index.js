const mapSongsDBToModel = ({
  id,
  title,
  genre,
  year,
  performer,
  duration,
  album_id,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  genre,
  year,
  performer,
  duration,
  albumId: album_id,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapSongsDBToModel };
