import * as globby from "globby";
// tslint:disable: ordered-imports
import * as fs from "fs";
import * as _ from "lodash";
import * as path from "path";
import { Cache } from "./Cache";

const exts = "(mkv|mp4|avi)";
const sampleFilesRegex = /(?:\.|\/)(?:sample|rarbg\.com|etrg)\./i;


export class FileFind {

  // private UNRECOGNIZED = "Unrecognized";
  private rootDir = '';
  private db: Cache;

  constructor(rootDir: string) {
    this.rootDir = rootDir;
    this.db = new Cache();

    this.init();
  }

  private async init() {
    const files = await this.findFiles(this.rootDir);
    this.mergeFiles(files);

    // console.log(files.length, this.db);
  }

  async findFiles(rootDir: string) {
    // const globby = new Globby();
    return globby.default([`**/*.+${exts}`], { cwd: rootDir })
    .then((allVideos: any[]) => {
      return allVideos
      .filter((item: string) => !sampleFilesRegex.test(item))
      .map((canonicalPath: string) => {
        const video = canonicalPath.replace(new RegExp("^" + rootDir + "/"), "");
        return {
          canonicalPath,
          video
        };
      });
    });
  }

  async mergeFiles(videoFiles: any) {
    return this.parseVideoFiles(videoFiles);
  }

  parseVideoFiles(videoFiles: any) {
    const media = videoFiles
    .map((item: any) => {
      const data = item.video.split("/");

      const newMedia = {
        file: item.video,
        dir: path.dirname(item.video),
        fileName: path.basename(item.video),
        dirName: data[data.length - 2],
        birthtime: fs.statSync(this.rootDir + "/" + item.canonicalPath).ctime,
        changetime: fs.statSync(this.rootDir + "/" + item.canonicalPath).mtime
      };

      // newMedia.recognition = split(newMedia.fileName || newMedia.dirName);
      return newMedia;
    });
    console.warn(media);
    this.setupDb(this.db, media);


    return Promise
    // .all([
    //   this.db.File.getAll(media.map((_: { file: any; }) => _.file)),
    //   this.db.Prefix.getAll(media.filter((_: { recognition: any; }) => !!_.recognition))
    // ]);

  }

  setupDb(db: any, media: any[]) {
    console.warn(db);
    return media.map(
      (theMedia: any) => {
        console.warn(theMedia)

      return theMedia;
    });
  }
/*
  flattenVideos(result: any) {
    const groupedByImdbObj = _.groupBy(result, (item: { db: { imdb: any; s: any; }; }) => {
      return item.db && `${item.db.imdb}-${item.db.s}` || this.UNRECOGNIZED;
    });

    const groupedByImdb = _.map(groupedByImdbObj, (media: any, key: any) => ({ key, media }));

    groupedByImdb.sort((a: { media: any[]; }, b: { media: any[]; }) => {
      const mA = _.max(a.media.map((a: { birthtime: { getTime: () => any; }; }) => a.birthtime.getTime()));
      const mB = _.max(b.media.map((b: { birthtime: { getTime: () => any; }; }) => b.birthtime.getTime()));

      return mB - mA;
    });

    groupedByImdb.forEach((group: { media: any[]; dir: any; watched: boolean; hidden: any; imdb: any; s: any; type: any; title: any; unwatchedCount: any; posterUrl: string; summary: string; key: any; }) => {
      _.sortBy(group.media, "db.ep");

      const media = group.media.find((media: { db: any; recognition: any; }) => media.db || media.recognition) || group.media[0];

      group.dir = media.dir;
      group.media.forEach((media: { watched: boolean; db: { scrobble: any; hidden: any; }; hidden: boolean; birthtime: any; }) => {
        media.watched = media.db && !!media.db.scrobble;
        media.hidden = media.db && !!media.db.hidden;

        delete media.birthtime;
      });

      const unwatchedCount = group.media.filter((_: { watched: any; }) => !_.watched).length;
      group.watched = unwatchedCount === 0;
      group.hidden = group.media.every((_: { hidden: any; watched: any; }) => _.hidden || _.watched);

      if (media.db) {
        group.imdb = media.db.imdb;
        group.s = media.db.s;
        group.type = media.db.type;
        group.title = media.db.title;
        group.unwatchedCount = unwatchedCount;
      }

      group.posterUrl = media.db ? this.getPosterUrl(media.db.type, media.db.imdb, media.db.s) : this.getPosterUrl();

      if (media.db && media.db.s) {
        const title = `${media.db.title} season ${media.db.s}`;
        group.summary = `${title} (${unwatchedCount} / ${group.media.length})`;
      } else if (group.key === this.UNRECOGNIZED) {
        group.summary = `${this.UNRECOGNIZED} (${group.media.length})`;
      } else {
        const title = media.db && media.db.title || media.recognition && media.recognition.title || media.fileName;
        group.summary = `${title} ${group.media.length > 1 ? "(" + group.media.length + ")" : ""}`;
      }
    });

    return groupedByImdb;
  }


  getPosterUrl(type: undefined, imdb: undefined, s: undefined, host: undefined) {
    if (type && imdb) {
      return `http://${host || "localhost"}/api/v1/posters/${[type, imdb, s].filter(_ => !!_).join("/")}`;
    } else {
      return `http://${host || "localhost"}/api/v1/posters/placeholder.jpg`;
    }
  } */


}
