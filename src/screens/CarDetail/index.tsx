import React, { useCallback, useRef, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { FlatList, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { AcessorieItem } from '@src/components/AcessoriesList';
import { Button, EditButton } from '@src/components/Button';
import { SpecificationCard } from '@src/components/Card/SpecificationCard';

import {
  Container,
  ImageContainer,
  CarImage,
  BrandName,
  CarName,
  Title,
  SpecificationContainer,
  PriceContainer,
  AcessoriesContainer,
  PriceTitle,
  FooterContainer,
  Cards,
  AcessItems,
  NoAcessoriesContainer,
  TitleContainer,
  ModalContainer,
  ModalPriceContainer,
} from './styles'

import { carList } from '@src/utils/carsList'

export default function CarDetail() {
  const navigation = useNavigation();

  // BottomSheet variables
  const bottomSheetRef = useRef<BottomSheet>(null);
  // Open/Close state
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  // variables
  const snapPoints = [1, '40%'];
  // callbacks
  const handleOpenSnap = useCallback(() => {
    bottomSheetRef.current?.expand();
    setIsSheetOpen(true);
  }, []);
  const handleCloseSnap = useCallback(() => {
    bottomSheetRef.current?.close();
    setIsSheetOpen(false);
  }, []);


  return (
    <Container>
      <ImageContainer>
        <CarImage
          source={{ uri: `https://raw.githubusercontent.com/pedroesmerio/car-tech-sales/main/src/assets/cars/pickup.png` }}
          resizeMode='contain'
        />
        <BrandName>toyota</BrandName>
        <CarName align='center'>Hilux - 2022</CarName>
      </ImageContainer>

      <SpecificationContainer>
        <Title align='left' color='default'>Especificações</Title>
        <Cards showsHorizontalScrollIndicator={false} bounces={false}>
          <ScrollView horizontal={true}>
            <SpecificationCard
              name='Cor'
              iconName='format-color-fill'
              value='Branco'
            />
            <SpecificationCard
              name='Combustível'
              iconName='fuel'
              value='Diesel'
            />
            <SpecificationCard
              name='Tipo'
              iconName='car'
              value='Pickup'
            />
            <SpecificationCard
              name='Transmissão'
              iconName='cog'
              value='Auto'
            />
          </ScrollView>
        </Cards>
      </SpecificationContainer>

      <AcessoriesContainer>
        <TitleContainer>
          <Title align='left' color='default'>Acessórios</Title>
          <Title
            align='right'
            color='blue'
            onPress={handleOpenSnap}
          >
            Adicionar +
          </Title>
        </TitleContainer>

        <FlatList
          data={carList}
          keyExtractor={(item) => item.idMobile}
          renderItem={({ item }) => (
            <AcessItems>
              {item.acessoriesItems.map((acessories) => (
                <AcessorieItem
                  acessorieName={acessories.acessorieName}
                  price={acessories.acessoriePrice}
                />
              ))
              }
            </AcessItems>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <NoAcessoriesContainer>
              <Title>
                Nenhum acessório encontrado
              </Title>
            </NoAcessoriesContainer>
          )}
        />
      </AcessoriesContainer>

      <FooterContainer>
        <PriceContainer>
          <Title align='left' color='default' size={30}>R$ 230.980</Title>
          <PriceTitle align='left'>Preço</PriceTitle>
        </PriceContainer>
        <EditButton
          name='EDITAR'
          type='edit'
          onPress={() => navigation.navigate('carRegister')}
        />
      </FooterContainer>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onClose={() => setIsSheetOpen(false)}
        enablePanDownToClose
      >
        <ModalContainer>
          <Title align='left' color='dark'>
            Novo acessório
          </Title>

          <Title align='left' color='dark'>
            Preço
          </Title>

          <ModalPriceContainer>
            <Button
              name='Editar'
              type='save'
              onPress={handleCloseSnap}
            />
          </ModalPriceContainer>
        </ModalContainer>
      </BottomSheet>

    </Container>
  );
}
