# [Hearth](https://github.com/Nereare/Hearth) Change Log

This is the change log to Hearth. For further info on this project, see the [ReadMe file](https://github.com/Nereare/Hearth/blob/master/readme.md).

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

Principles of a change log, excerpted from [Keep a Changelog](http://keepachangelog.com/):

 * It’s made for humans, not machines, so legibility is crucial.
 * Easy to link to any section (hence Markdown over plain text).
 * One sub-section per version.
 * List releases in reverse-chronological order (newest on top).
 * Write all dates in `YYYY-MM-DD` format. (Example: `2012-06-02` for `June 2nd, 2012`.) It’s international, [sensible](http://xkcd.com/1179/), and language-independent.
 * Explicitly mention whether the project follows [Semantic Versioning](http://semver.org/).
 * Each version should:
   * `List` its release date in the above format.
   * `Group` changes to describe their impact on the project, as follows:
     * `Added` for new features.
     * `Changed` for changes in existing functionality.
     * `Deprecated` for once-stable features removed in upcoming releases.
     * `Removed` for deprecated features removed in this release.
     * `Fixed` for any bug fixes.
     * `Security` to invite users to upgrade in case of vulnerabilities.

## [Unreleased]

### Added
 * Cryptography saving and loading.
 * Packages:
   - [Crypto-JS](https://www.npmjs.com/package/crypto-js);
   - [Smalltalk](https://www.npmjs.com/package/smalltalk).

### Fixed
 * Lack of file extensions when saving.
 * Saving previously encrypted file as unencrypted without warning - now we warn you first.
 * Saving without file extension.
 * Asking before saving non-encrypted file as if it was encrypted.

## [0.6.0-beta] - 2019-07-30

### Added
 * Code of Conduct from [Contributor Covenant v1.4.1](https://www.contributor-covenant.org/).
 * License, git metafiles and ReadMe file.
 * Changelog file.
 * CSS stylesheet.
 * Packages:
   - [Normalize.css](https://necolas.github.io/normalize.css/);
   - [Material Design Icons](https://materialdesignicons.com/);
   - [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono);
   - [SimpleMDE](https://simplemde.com/);
   - [Electron](https://electronjs.org/) - :wrench: Dev-only;
   - [Electron Packager](https://github.com/electron/electron-packager) - :wrench: Dev-only.
 * Basic functionality.

[Unreleased]: https://github.com/Nereare/Hearth/compare/v0.6.0-beta...HEAD
[0.6.0-beta]: https://github.com/Nereare/Hearth/releases/tag/v0.6.0-beta
