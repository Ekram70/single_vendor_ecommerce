import { Box, Table } from '@mantine/core';
import React from 'react';

const ProductInformations = () => (
  <Box className="mt-5 text-sm">
    <Table withBorder withColumnBorders highlightOnHover>
      <tbody>
        <tr>
          <td>Stand Up</td>
          <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
        </tr>
        <tr>
          <td>Folded (w/o wheels)</td>
          <td>32.5″L x 18.5″W x 16.5″H</td>
        </tr>
        <tr>
          <td>Folded (w/ wheels)</td>
          <td>32.5″L x 24″W x 18.5″H</td>
        </tr>
        <tr>
          <td>Door Pass Through</td>
          <td>24</td>
        </tr>
        <tr>
          <td>Frame</td>
          <td>Aluminum</td>
        </tr>
        <tr>
          <td>Weight (w/o wheels)</td>
          <td>20 LBS</td>
        </tr>
        <tr>
          <td>Weight Capacity</td>
          <td>60 LBS</td>
        </tr>
        <tr>
          <td>Width</td>
          <td>24″</td>
        </tr>
        <tr>
          <td>Handle height (ground to handle)</td>
          <td>37-45″</td>
        </tr>
        <tr>
          <td>Wheels</td>
          <td>12″ air / wide track slick tread</td>
        </tr>
        <tr>
          <td>Seat back height</td>
          <td>21.5″</td>
        </tr>
        <tr>
          <td>Head room (inside canopy)</td>
          <td>25″</td>
        </tr>
        <tr>
          <td>Color</td>
          <td>Black, Blue, Red, White</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>M, S</td>
        </tr>
      </tbody>
    </Table>
  </Box>
);

export default ProductInformations;
