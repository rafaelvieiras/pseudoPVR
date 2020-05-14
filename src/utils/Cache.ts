export class Cache {
  private data: { [key: string]: string } = {};
  private isProd = process.env.NODE_ENV === 'production';

  public get(key: string) {
    if(this.isProd) {
      return this.data[key];
    }
    return null;
  }

  public set(key: string, value: any) {
    this.data[key] = value;
  }
  public del(key: string) {
    delete this.data[key];
  }

  private async update(key: string, promiseFn: Promise<any>) {
    console.log(`cache update: ${key}`);

    return promiseFn.then((dataResponse: string) => {
      this.set(key, dataResponse);
      return dataResponse;
    });
  };

  public getOrInit(key: string, promiseFn: Promise<any>) {
    const data = this.get(key);
    console.log(`cache get: ${key}, result: ${typeof data}`);

    if (data) {
      return Promise.resolve(data);
    } else {
      return this.update(key, promiseFn);
    }
  };

  public async renew(key: string, promiseFn: Promise<any>) {
    return this.update(key, promiseFn);
  };

  // public expressResponse(key: string, promiseFn: Promise<any>) {
  //   return (req, res, next) => {
  //     return getOrInit(key, promiseFn)
  //       .then(result => res.json(result))
  //       .catch(err => next(err));
  //   };
  // };

  // return {
  //   set: cache.set.bind(cache),
  //   get: cache.get.bind(cache),
  //   del: cache.del.bind(cache),
  //   renew,
  //   getOrInit,
  //   expressResponse
  // };
};
