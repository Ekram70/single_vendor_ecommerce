import { Image, Paper, Text } from '@mantine/core';
import React from 'react';
import categoryImage from '../../assets/images/category.png';

const CategoriesCard = () => (
  <Paper className="bg-primary/40 py-7 text-center">
    <Image src={categoryImage} width={75} className="mx-auto mb-5" />
    <Text className="text-sm font-bold">Oganic Kiwi</Text>
    <Text className="text-sm">Total 28 items</Text>
  </Paper>
);

export default CategoriesCard;
