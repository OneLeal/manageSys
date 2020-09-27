import Jsonp from 'jsonp';

export default class Axios {
    static jsonp = (opts) => {
        const { url } = opts;
        return new Promise((resolve, reject) => {
            Jsonp(url, {
               param: 'callback'
            }, (err, res) => {
                if (res.status === '1') {
                    resolve(res);
                } else {
                    reject(err);
                }
            });
        });
    }
}