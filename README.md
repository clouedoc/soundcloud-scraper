# Boilerplate

This repository contains boilerplate for my TypeScript projects.

## To edit

1. "bin" name in `package.json` and "bin" in "oclif" in `package.json`
2. Package name in `package.json`

## Link binary

```bash
yarn link

## Make sure you have yarn bin added to path
yarn global bin # <- add "export PATH=$PATH:$(yarn global bin)" to your zshrc
```

## Next steps

- [ ] Maintain a list of tracks
- [ ] Tracks downloader + database (enable Git LFS!)
- [ ] Compare list of tracks against old one: output list of changed / tracks not downloaded
