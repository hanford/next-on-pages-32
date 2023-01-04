https://github.com/cloudflare/next-on-pages/issues/32
https://github.com/cloudflare/next-on-pages/pull/51

Running the application normally works:

```sh
$ npm install
$ npm run dev
```

Visit http://localhost:3000

See that linking inside the application is working as expected

To see the bug, try building:

```
$ npm run build-pages
```

And you'll be able to click around dynamic pages.
