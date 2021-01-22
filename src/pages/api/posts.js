// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const blogs = Array.from({ length: 100 }, (id, index) => ({
  id: index,
  title: 'Some super happy post',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxYKrUbh8UJpkTrVxfHsU6WEpzSZLte5PHg&usqp=CAU',
  intro: 'A sweater, also called a jumper in British English, is a piece of clothing, typically with long sleeves, made of knitted or crocheted material, that covers the upper part of the body',
  price: 320
}));

export default (req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200
    res.json({
      data: blogs,
      total: 100
    })
  }
}
