interface Product {
  title: string
  price: number
  inStock?: boolean
}

function getPrice(product: Product[]): void {

  const productPrice = product.forEach((item) => {
    console.log(item.price)
  })

  // for (let item of product){
  //   console.log(item.price) 
  // }
}


const product: Product[] = [
  { title: "Laptop", price: 55000 },
  { title: "Mouse", price: 500, inStock: true }
]

getPrice(product)