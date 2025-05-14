export function createExcerpt(post: any) {
  const firstParagraph = post.body.match(/^\w+[\w\W]+/m)[0];
  // console.log(firstParagraph);
  const first150 = firstParagraph
    .replace(/[^\w\s\.,!\?\n]+/gm, '')
    .substring(0, 150);
  // console.log(first150);
  const excerpt = first150.replace(/[\w\.?]+$/m, '').trim() + ' ...';
  console.log(excerpt);
  return excerpt;
}
