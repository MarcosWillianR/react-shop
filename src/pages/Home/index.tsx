import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import api from '../../services/apiClient';

import {
  priceFormatter,
  iconByType,
  iconNameByType,
  debounce,
} from '../../utils';

import Header from '../../components/Header';
import Search from '../../components/Search';

import { useModal } from '../../hooks/Modal';

import banner from '../../assets/banner.svg';

import { IProduct } from '../../store/modules/cart/types';

import { MaxContentSizeWrapper } from '../../styles/constants';

import { CategoryResponse, CategoryState, ProductItem } from './types';

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

  const { search } = useLocation();

  const {
    showProductItemModal,
    showInfoModal,
    infoModalIsVisible,
  } = useModal();

  const handleProductsGenericError = useCallback(() => {
    if (!infoModalIsVisible) {
      showInfoModal({
        description:
          'Ocorreu um erro ao tentar buscar produtos, tente novamente.',
        title: 'Erro ao buscar produtos',
        infoStatus: 'error',
      });
    }

    return null;
  }, [infoModalIsVisible, showInfoModal]);

  const handleSearch = useCallback(
    async (text: string) => {
      debounce(async () => {
        try {
          const { data } = await api.get<ProductItem[]>('products', {
            params: { name_like: text },
          });

          setProducts(
            data.map(product => ({
              ...product,
              priceFormatted: priceFormatter(product.price),
              icon: iconByType[product.idCategory],
              iconName: iconNameByType[product.idCategory],
            })),
          );
        } catch {
          handleProductsGenericError();
        }
      }, 500);
    },
    [handleProductsGenericError],
  );

  const handleFilterByCategory = useCallback(
    async (idCategory: 0 | 1 | 2 | 3) => {
      try {
        const params = idCategory !== 0 ? { idCategory } : null;

        const { data } = await api.get<ProductItem[]>('products', { params });

        setProducts(
          data.map(product => ({
            ...product,
            priceFormatted: priceFormatter(product.price),
            icon: iconByType[product.idCategory],
            iconName: iconNameByType[product.idCategory],
          })),
        );
      } catch (err) {
        handleProductsGenericError();
      }
    },
    [handleProductsGenericError],
  );

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
      api.get<ProductItem[]>('products', {
        params: {
          name_like: search ? search.replace('?search_text=', '') : '',
        },
      }),
    ])
      .then(response => {
        const [categoriesResponse, productsResponse] = response;

        setCategories(
          categoriesResponse.data.map(category => ({
            ...category,
            icon: iconByType[category.id],
          })),
        );

        setProducts(
          productsResponse.data.map(product => ({
            ...product,
            priceFormatted: priceFormatter(product.price),
            icon: iconByType[product.idCategory],
            iconName: iconNameByType[product.idCategory],
          })),
        );
      })
      .catch(() => handleProductsGenericError());
  }, [handleProductsGenericError, search]);

  return (
    <Container>
      <Header SearchComponent={<Search onSearch={handleSearch} />} />

      <MaxContentSizeWrapper className="home__wrapper">
        <BannerContent>
          <img src={banner} alt="RosaMarket - Compre sem sair de casa" />
        </BannerContent>

        <AvailableCategoriesContent>
          {categories.map(({ icon, id, name }) => (
            <CategorySelectButton
              key={id}
              onClick={() => handleFilterByCategory(id)}
            >
              <img
                src={icon}
                alt={`Categoria - ${name}`}
                style={{
                  width: id === 0 ? 65 : 44,
                  height: id === 0 ? 65 : 44,
                }}
              />

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
      </MaxContentSizeWrapper>
    </Container>
  );
};

export default Home;
