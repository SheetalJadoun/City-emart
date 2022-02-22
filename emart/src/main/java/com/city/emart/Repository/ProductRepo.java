package com.city.emart.Repository;

import com.city.emart.model.Product;
import com.city.emart.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


//@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {

    //@Query(value="select * from products where products.category=category;",nativeQuery = true)
    List<Product> getByCategory(String category);

//    @Query(value="select * from products where merchant=m and shop=s;",nativeQuery = true)
//    List<Product> findAllProducts(String m,String s);

    //@Query(value="SELECT * from products p WHERE products.shop_name = ?1;",nativeQuery = true)
    List<Product> findAllByShop(String s);

    List<Product> findAllByMerchant(String merchant);

    List<Product> findALlByShopAndMerchant(String shop,String merchant);

    Product findById(int id);
}
