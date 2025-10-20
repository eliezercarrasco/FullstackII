import Navbar from '../../components/Navbar';

// Importar imágenes
import TC001 from '../../assets/img/TC001.JPG';
import TC002 from '../../assets/img/TC002.JPG';
import TT001 from '../../assets/img/TT001.JPG';
import TT002 from '../../assets/img/TT002.JPG';
import PI001 from '../../assets/img/PI001.JPG';
import PI002 from '../../assets/img/PI002.JPG';
import PSA001 from '../../assets/img/PSA001.JPG';
import PSA002 from '../../assets/img/PSA002.JPG';
import PT001 from '../../assets/img/PT001.JPG';
import PT002 from '../../assets/img/PT002.JPG';
import PG001 from '../../assets/img/PG001.JPG';
import PG002 from '../../assets/img/PG002.JPG';
import PV001 from '../../assets/img/PV001.JPG';
import PV002 from '../../assets/img/PV002.JPG';
import TE001 from '../../assets/img/TE001.JPG';
import TE002 from '../../assets/img/TE002.JPG';
import pasteleriaImg from '../../assets/img/portada.png';

function ProductDetails() {
  const products = [
    { img: TC001, name: "Torta Cuadrada de Chocolate", price: "$45.000 CLP", desc: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales." },
    { img: TC002, name: "Torta Cuadrada de Frutas", price: "$50.000 CLP", desc: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones." },
    { img: TT001, name: "Torta Circular de Vainilla", price: "$40.000 CLP", desc: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión." },
    { img: TT002, name: "Torta Circular de Manjar", price: "$42.000 CLP", desc: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos." },
    { img: PI001, name: "Mousse de Chocolate", price: "$5.000 CLP", desc: "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate." },
    { img: PI002, name: "Tiramisú Clásico", price: "$5.500 CLP", desc: "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida." },
    { img: PSA001, name: "Torta Sin Azúcar de Naranja", price: "$48.000 CLP", desc: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables." },
    { img: PSA002, name: "Cheesecake Sin Azúcar", price: "$47.000 CLP", desc: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa." },
    { img: PT001, name: "Empanada de Manzana", price: "$3.000 CLP", desc: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda." },
    { img: PT002, name: "Tarta de Santiago", price: "$6.000 CLP", desc: "Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos." },
    { img: PG001, name: "Brownie Sin Gluten", price: "$4.000 CLP", desc: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor." },
    { img: PG002, name: "Pan Sin Gluten", price: "$3.500 CLP", desc: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida." },
    { img: PV001, name: "Torta Vegana de Chocolate", price: "$50.000 CLP", desc: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos." },
    { img: PV002, name: "Galletas Veganas de Avena", price: "$4.500 CLP", desc: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano." },
    { img: TE001, name: "Torta Especial de Cumpleaños", price: "$55.000 CLP", desc: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos." },
    { img: TE002, name: "Torta Especial de Boda", price: "$60.000 CLP", desc: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda." },
  ];

  return (
    <div>
      <Navbar />

      <main className="container my-4">
        <img 
          src={pasteleriaImg} 
          alt="Logo Pastelería" 
          style={{ width: '80%', maxWidth: '200px', margin: '50px 0', borderRadius: '10px' }} />
        <h1 className="text-center mb-4">DETALLES DE PRODUCTOS</h1>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="p-3 border rounded shadow-sm"
              style={{ width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '420px' }}
            >
              <img 
                src={product.img} 
                alt={product.name} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} 
              />
              <h3 className="mt-3">{product.name}</h3>
              <p><strong>Precio: </strong>{product.price}</p>
              <p style={{ textAlign: 'center' }}>{product.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;
