package com.city.emart.Repository;

import com.city.emart.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSRepo extends JpaRepository<User,Integer>
{
    User getByemail(String email);

    User getByusername(String username);



    User findByEmailAndPassword(String email,String password);

    User findByEmail(String email);

    User findByEmailAndPasswordAndRole(String tempEmailId, String tempPass, String role);
}
