package com.city.emart.Repository;

import com.city.emart.model.Merchant;
import com.city.emart.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface MerchantRepo extends JpaRepository<Merchant,Integer>
{
    Merchant getByEmail(String email);

    Merchant findByEmailAndPassword(String email, String password);

//    Merchant findByMerchant_name(String mname);
//
//    Merchant findByShop_name(String shop);

    Merchant findByMerchantAndShop(String merchant, String shop);

    Merchant findByShop(String shop);

    Merchant findByEmail(String email);

    //Merchant findByEmailAndPasswordAndShop_name(String tempEmailId, String tempPass, String tempShop);
}
