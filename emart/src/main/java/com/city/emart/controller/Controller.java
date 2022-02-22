package com.city.emart.controller;
import com.city.emart.model.Merchant;
import com.city.emart.model.Product;
import com.city.emart.model.User;
import com.city.emart.service.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestMapping;

//import org.springframework.web.bind.annotation.RestController;
@RestController
//@RequestMapping("/user")
@CrossOrigin("*")
public class Controller
{
    @Autowired
    private Services service;

//*************************************************  User  ******************************************************
//    *********************************************************************************************************



    //    register user
    @PostMapping("/register-user")
    public User registerUser(@RequestBody User user) throws Exception {
        String email=user.getEmail();
        User check1=service.userByEmail(email);
        if(check1==null)
        {
            User u=service.register(user);
            System.out.println("user registered successfully");
        }
        else
        {
            System.out.println("user already exists");
            throw new Exception("User with this email id already exists");
        }
        return user;
    }

    // method for login user
    //@GetMapping("/login")
    @RequestMapping("/login")
    @CrossOrigin(origins="http://localhost:4200/")
    public User loginUser(@RequestBody User user) throws Exception {

        String tempEmailId=user.getEmail();
        String tempPass=user.getPassword();
        String role=user.getRole();
        User userObj=null;
        if(tempEmailId!=null && tempPass!=null) {
            // check combination of id and password exists or not
            userObj=service.fetchUserByEmailIdAndPassAndRole(tempEmailId, tempPass,role);
            if (userObj == null) {
                throw new Exception("Bad Credentials");
            }
        }
        System.out.println(userObj.getWallet());
        return userObj;
    }



    @RequestMapping("/getUserByEmail")
    public User fetchUserByEmail(@RequestParam String email) {
        System.out.println(email);
        User userObj=null;
        try {
            userObj= service.fetchUserByEmailId(email);
            System.out.println("successful");

        }
        catch(Exception e) {
            System.out.println("error occured");
        }

        return userObj;
    }


    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user) {
        return  service.updateUser(user);
    }

    //    get all users
    @GetMapping("/getAllCustomer")
    public List<User> getAllUser()
    {
        List<User> li=new ArrayList<User>();
        li=this.service.getAllUser();
        List<User> ans=new ArrayList<User>();


        return li;
    }

    //delete customer
    @DeleteMapping("/deleteCustomer")

    public void deleteCustomer(@RequestParam Integer id) {
        service.deleteCustomerById(id);
    }

    //**************************************** MERCHANT ***************************************
    @PostMapping("/register-merchant")

    public Merchant registerUser(@RequestBody Merchant user) throws Exception {
        String email=user.getEmail();
        Merchant check1=service.merchantByEmail(email);
        if(check1==null)
        {
            Merchant u=service.registerMerchant(user);
            System.out.println("user registered successfully");
        }
        else
        {
            System.out.println("user already exists");
            throw new Exception("User with this email id already exists");
        }
        return user;
    }

    // method for login user
    //@GetMapping("/login")
    @RequestMapping("/getMerchantByShop")

    public Merchant fetchMerchantByShop(@RequestParam String shop) throws Exception {



        //String tempShop=user.getShop_name();
        Merchant userObj=null;
        if(shop!=null) {
            // check combination of id and password exists or not
            userObj=this.service.fetchMerchantByShop(shop);
            if (userObj == null) {
                throw new Exception("Bad Credentials");
            }
        }

//        System.out.println(userObj.getPhone());
        return userObj;
    }

    //fetch merchnat by email
    @RequestMapping("/getMerchantByEmail")
    public Merchant fetchMerchnatByEmail(@RequestParam String email) {
        System.out.println(email);
        Merchant userObj=null;
        try {
            userObj= service.fetchMerchantByEmailId(email);
            System.out.println("successful");

        }
        catch(Exception e) {
            System.out.println("error occured");
        }

        return userObj;
    }
// get merchant by shop
    @RequestMapping("/merchant-login")

    public Merchant loginMerchant(@RequestBody Merchant user) throws Exception {

        String tempEmailId=user.getEmail();
        String tempPass=user.getPassword();
        //String tempShop=user.getShop_name();
        Merchant userObj=null;
        if(tempEmailId!=null && tempPass!=null) {
            // check combination of id and password exists or not
            userObj=this.service.fetchMerchantByEmailAndPass(tempEmailId,tempPass);
            if (userObj == null) {
                throw new Exception("Bad Credentials");
            }
        }

//        System.out.println(userObj.getPhone());
        return userObj;
    }
//update merchant
    @PutMapping("/updateMerchant")
    public Merchant updateMerchant(@RequestBody Merchant user) {
        return  service.updateMerchant(user);
    }


    //    get all merchant
    @GetMapping("/getAllMerchant")
    public List<Merchant> getAllMerchant()
    {
        List<Merchant> li=new ArrayList<Merchant>();
        li=this.service.getAllMerchant();
        List<Merchant> ans=new ArrayList<Merchant>();


        return li;
    }

//delete customer
    @DeleteMapping("/deleteMerchant")

    public void deleteMerchant(@RequestParam Integer id) {
        service.deleteMerchantById(id);
    }


//**********************************************    product controller    *****************************************


//   add product in product table

    @PostMapping("/add-product")
    public Product addProduct(@RequestBody Product pro) throws Exception
    {
        String merchant=pro.getMerchant();
        String shop=pro.getShop();
        Merchant m=null;
        if(merchant!=null && shop!=null)
        {
            m=this.service.checkDetails(merchant,shop);
            if (m == null) {
                throw new Exception("This combination of merchant and shop does not exists");
            }
            else {
                this.service.addPro(pro);
            }
        }
//        System.out.println(m.getShop());

        return pro;
    }

//    get all products

    @GetMapping("/getAllProducts")
    public List<Product> getAllProducts()
    {
        List<Product> li=new ArrayList<Product>();
        li=this.service.getAllProducts();
        return li;
    }

    //    get all shops

    @GetMapping("/getAllShops")
    public List<String> getAllShops()
    {
        List<Product> li=new ArrayList<Product>();
        List<String> ans=new ArrayList<String>();
        li=this.service.getAllShops();
        HashSet<String> hs=new HashSet<>();
        for(Product p:li)
        {
            hs.add(p.getShop());
        }
        for(String s:hs)
        {
            ans.add(s);
            System.out.println(s);
        }
        return ans;
    }


    //    get products by category
    @GetMapping("/getByCategory/{cat}")
    public List<Product> getProductsByCategory(@PathVariable("cat") String cat)
    {
        List<Product> li=new ArrayList<Product>();
        li=this.service.getProductsByCategory(cat);
        return li;
    }

//    get all products of particular shop

@PostMapping("/getAllProductByShop")

    public List<Product> allProductOfShop(@RequestBody Merchant user) throws Exception {
        String merchant=user.getMerchant();
        String shop=user.getShop();
        Merchant m=null;
        List<Product> li=new ArrayList<>();
        if(merchant!=null && shop!=null)
        {
            m=this.service.checkDetails(merchant,shop);
            if(m!=null)
            {
                li=this.service.getAllProductsOfShop(merchant,shop);
            }
            else {
                throw new Exception("error occurs");
            }
        }
        return li;
    }

    @CrossOrigin(origins="http://localhost:4200/")
    @PutMapping("/updateItemQty/{id}")
    public void updateProductQty(@PathVariable("id") Integer id,@RequestBody Product pro) {
        service.updateProQuantity(pro,id);
    }

    @GetMapping("/getProduct")

    public Product fetchProductById(@RequestParam int id)
    {
        return service.fetchProductById(id);
    }

    @DeleteMapping("/deleteProduct")

    public void deleteItem(@RequestParam Integer id) {
        service.deleteProductById(id);
    }
    
}
