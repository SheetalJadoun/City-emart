package com.city.emart.Repository;

import com.city.emart.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer>
{

}
