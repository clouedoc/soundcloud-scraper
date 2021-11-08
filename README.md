# soundcloud-scraper

A soundcloud scraper

## Run

`sax`

## Link binary

```bash
yarn link

## Make sure you have yarn bin added to path
yarn global bin # <- add "export PATH=$PATH:$(yarn global bin)" to your zshrc
```

## Todo

- [ ] Write and test Soundcloud track downloading function
- [ ] Write and test SoundcloudScraper
- [ ] Write and test Archiver
- [ ] Write and test GitStorageBackend

## Next steps

- [ ] Maintain a list of tracks
- [ ] Tracks downloader + database (enable Git LFS!)
- [ ] Compare list of tracks against old one: output list of changed / tracks not downloaded

## Track versions

Multiple track versions are supported by going back in git history

- [ ] mark track version with git tags
