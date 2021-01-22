// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.json({
      id: req.query.productId,
      title: 'Some very very cute sweater',
      image:
        'https://cdni.llbean.net/is/image/wim/297466_1155_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquam animi aut, beatae consequuntur cum deserunt dignissimos dolores ea eos error esse eveniet ex expedita explicabo harum illo ipsam magni nam nostrum optio perferendis placeat porro quia quis quos rerum saepe sit sunt totam ullam ut vel velit veniam vero voluptatem. Alias consectetur ducimus eaque harum hic ipsam maiores molestias nam nisi obcaecati quam quia, similique sunt veritatis vitae? Asperiores distinctio laudantium molestiae nam nemo quas quidem voluptate. Dolore eligendi id nostrum provident. Blanditiis deleniti fugiat labore laboriosam magni minima omnis pariatur quam rem, repudiandae similique soluta tempore voluptas voluptatem voluptatibus! Accusantium asperiores at ex fugiat id praesentium, quis reiciendis sit unde ut. Aliquam commodi fugiat laudantium magnam similique?
`,
      price: 320,
    });
  }
};
