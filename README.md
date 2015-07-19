http://staging.westcoastclassical.org.s3-website-us-east-1.amazonaws.com

## Setup
```bash
npm install

```

## Deploy
```bash
# only for new deploy
gem install s3_website
s3_website cfg apply

# build and upload
gulp make
s3_website push
```
