import React, { useCallback, useEffect, useState } from 'react';

import api from '../../services/apiClient';

import { priceFormatter } from '../../utils';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Button from '../../components/Button';

import { useModal } from '../../hooks/Modal';

import banner from '../../assets/banner.svg';
import sodaCup from '../../assets/soda-cup.png';
import chocolate from '../../assets/chocolate.svg';
import sandwich from '../../assets/sandwich.svg';

import { IProduct } from '../../store/modules/cart/types';

import { MaxContentSizeWrapper } from '../../styles/constants';

import { CategoryResponse, CategoryState, ProductResponse } from './types';

import {
  Container,
  BannerContent,
  AvailableCategoriesContent,
  CategorySelectButton,
  ProductList,
  ProductListItem,
  ProductInfo,
} from './styles';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<CategoryState[]>([]);
  const [products, setProducts] = useState<Omit<IProduct, 'quantity'>[]>([]);
  const [, setProductsCount] = useState(0);

  const { showProductItemModal } = useModal();

  const handleSearch = useCallback((text: string) => {
    console.log(text);
  }, []);

  const handleShowProductItemModal = useCallback(
    (productId: number) => {
      const productSelected = products.find(
        product => product.id === productId,
      );

      if (productSelected) {
        showProductItemModal(productSelected);
      }
    },
    [products, showProductItemModal],
  );

  useEffect(() => {
    Promise.all([
      api.get<CategoryResponse[]>('categories'),
      api.get<ProductResponse>('products'),
    ]).then(response => {
      const [categoriesResponse, productsResponse] = response;
      const iconByType = { 0: sodaCup, 1: chocolate, 2: sandwich };
      const iconNameByType = { 0: 'Bebidas', 1: 'Doces', 2: 'Salgados' };

      setCategories(
        categoriesResponse.data.map(category => ({
          ...category,
          icon: iconByType[category.id],
        })),
      );

      setProducts(
        productsResponse.data.items.map(product => ({
          ...product,
          priceFormatted: priceFormatter(product.price),
          icon: iconByType[product.idCategory],
          iconName: iconNameByType[product.idCategory],
        })),
      );

      setProductsCount(productsResponse.data.count);
    });
  }, []);

  return (
    <Container>
      <Header SearchComponent={<Search onSearch={handleSearch} />} />

      <MaxContentSizeWrapper className="home__wrapper">
        <BannerContent>
          <img src={banner} alt="RosaMarket - Compre sem sair de casa" />
        </BannerContent>

        <AvailableCategoriesContent>
          {categories.map(({ icon, id, name }) => (
            <CategorySelectButton key={id}>
              <img src={icon} alt={`Categoria - ${name}`} />

              <span>{name}</span>
            </CategorySelectButton>
          ))}
        </AvailableCategoriesContent>

        <ProductList>
          {products.map(
            ({ id, image, name, icon, iconName, priceFormatted }) => (
              <ProductListItem
                key={id}
                onClick={() => handleShowProductItemModal(id)}
              >
                <div>
                  <img src={image} alt={name} />
                </div>

                <ProductInfo>
                  <strong>{name}</strong>

                  <div>
                    <span>
                      <img src={icon} alt={`Categoria - ${iconName}`} />
                    </span>

                    <p>{iconName}</p>
                  </div>

                  <strong>{priceFormatted}</strong>
                </ProductInfo>

                <span>Ver produto</span>
              </ProductListItem>
            ),
          )}
        </ProductList>

        <Button className="home__load-next-products">
          Carregar mais produtos
        </Button>
      </MaxContentSizeWrapper>
    </Container>
  );
};

export default Home;
