import Image from './Image';
import Order from './Order';
import UserProfile from './UserProfile';

import { orders } from './orders';
import { users } from './users';

function App() {
  const img = {
    source: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    alternativeText: 'Cute cat staring'
  }

  // Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.
  return (
    <div>
      <section>
        <h2>Para fixar - Props</h2>
        <Image 
          source={img.source}
          alternativeText={img.alternativeText}
        />
      </section>
      <section>
        <h2>Para fixar - Composição de componentes</h2>
        <h3> Orders recently created </h3>
        {orders.map((order, index) => (
          <Order order={order} key={index} />
        ))}
      </section>
      <section>
        <h2>Para fixar - Lista de componentes e chaves</h2>
        {users.map((user, index) => (
          <UserProfile user={user} key={user.id} />
        ))}
      </section>
    </div>
  );
}

// 1. O que o componente App é em relação a Order
// É o componente pai

export default App;
