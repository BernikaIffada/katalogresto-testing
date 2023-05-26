import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithResto = async (restaurants) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestos: FavoriteRestoIdb,
    restaurants,
  });
};

export { createLikeButtonPresenterWithResto };
