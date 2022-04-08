import axios from "axios";
import sanitizeHtml from 'sanitize-html';
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";


export const GetPage = async (url) => {
  console.log('begin')
  const resp = await axios.get(url)
    .then((response) => {
      // console.log('success from axios', url, typeof response.data)
      return response.data
    })
    .catch((err) => {
      // console.log('err from axios')
      return err
    })

  // console.log('yippy', resp.data)
  return resp
}


export const SANITIZE = (html) => {
  const filtered = sanitizeHtml(html, {
    allowedTags: ['article', 'h1', 'h2', 'p'],
  })
  const filterToArticleTag = filtered.substring(filtered.indexOf("<article>"), filtered.indexOf("</article>") + 10);

  return filterToArticleTag
}


export const listBuckets = async () => {
  const s3Client = new S3Client({
    region: "ap-southeast-2",
    'credentials': {
      'accessKeyId': process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      'secretAccessKey': process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
    },
  });
  const listCommand = await s3Client.send(new ListObjectsCommand({ Bucket: 'test-bucket-photoupload' }))
    .then((response) => {
      console.log(response.Name, response.Contents)
    })
    .catch((err) => {
      console.log(err)
    })
}
