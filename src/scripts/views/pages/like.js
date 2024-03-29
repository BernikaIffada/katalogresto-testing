import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Resto</h2>
        <div id="restos" class="restos">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');

    restos.forEach((resto) => {
      // jika ada favresto, pesan "Tidak ada restoran untuk ditampilkan" akan dihapus
      restosContainer.innerHTML = '';

      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Like;
