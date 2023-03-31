
// HACER TODO EN INGLES
// hay que crear productos en product y luego insertarlos en ProductManager
class ProductManager{

    constructor(){
        this.products = [];
        // id autoincrementable para cada producto con getProductById 
        this.id = 0;
    }
    validate(product){
        if(
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock ||
            typeof product.title !== "string" ||
            typeof product.description !== "string" ||
            typeof product.code !== "string" ||
            typeof product.thumbnail !== "string" ||
            typeof product.price !== "number" ||
            typeof product.stock !== "number"
          )
            return console.log("Not Validate");
        }

    addProduct (product) {
        this.validate(product)
        this.products.length === 0 ? (id = 1) : (id = this.products[this.products.length - 1].id + 1);

    if (this.products.some((e) => e.code === product.code)) {
      console.log("code already entered ");
     } else {
        const newProduct = {
            id: id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            code: product.code,
            stock: product.stock,
      };
      this.products.push(newProduct);
      return newProduct;
      }
    }
    
    getProduct(){
        const allProduct = this.products;
        console.log(allProduct);
        
        return allProduct;
    }

    getProductById(id){
     const productById = this.products.find((idProduct)=> idProduct.id === id);
     !productById ? console.log("Not found") : console.log(productById);
       
      return productById;
    }

  }

const producto = new ProductManager();

producto.addProduct({
    title: "Remera",
    description: "Remera de algodon",
    price: 1000,
    thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp",
    stock: 10
  },
);

producto.addProduct({

  title:"camisa",
  description: "camisa larga",
  price: 2000,
  thumbnail: "https://http2.mlstatic.com/D_NQ_NP_852996-MLA53168359304_012023-W.jpg",
  stock: 14
});

producto.addProduct({
  title:"pantalon",
  description: "pantalon de jean",
  price: 3000,
  thumbnail: "https://http2.mlstatic.com/D_NQ_NP_637588-MLA49328528400_032022-W.jpg",
  stock: 20
});
 