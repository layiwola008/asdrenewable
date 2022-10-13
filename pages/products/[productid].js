import React from 'react';
import { useRouter } from 'next/router';

const Product = () => {
    const router = useRouter();
    const path = router.query.productid
  return (
    <div>
      Product Page
      {path}
    </div>
  )
}

export default Product;
