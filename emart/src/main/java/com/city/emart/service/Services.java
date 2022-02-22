package com.city.emart.service;

import com.city.emart.Repository.CustomerRepo;
import com.city.emart.Repository.MerchantRepo;
import com.city.emart.Repository.ProductRepo;
import com.city.emart.Repository.UserSRepo;
import com.city.emart.model.Merchant;
import com.city.emart.model.Product;
import com.city.emart.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Services
{
    @Autowired
    private UserSRepo user;
    @Autowired
    private MerchantRepo merchant;
    @Autowired
    private CustomerRepo customer;
    @Autowired
    private ProductRepo product;



//*****************************************************user services*********************************************

    public User userByEmail(String email) {
//        User u=user.getByemail(email);
        User u=user.findByEmail(email);
        return u;
    }

    public User userByUsername(String username)
    {
        User u=user.getByusername(username);
        return u;
    }


    public User register(User u) {
        User ur=user.save(u);

        return ur;
    }

    public List<User> getAllUser()
    {
        List<User> li=new ArrayList<>();
        li=this.user.findAll();
        for(User u:li)
        {
            if(u.getRole()=="Admin")
            {
                li.remove(u);
            }
        }
        return li;
    }

    public User fetchUserByEmailIdAndPass(String email, String password) {
        return user.findByEmailAndPassword(email,password);
    }

    public User fetchUserByEmailId(String email) {
         return user.findByEmail(email);
    }

    public User fetchUserByEmailIdAndPassAndRole(String tempEmailId, String tempPass, String role) {
        return user.findByEmailAndPasswordAndRole(tempEmailId,tempPass,role);
    }

    public User updateUser(User u) {
        String email = u.getEmail();
        User std = user.findByEmail(email);
        std.setUsername(u.getUsername());
        std.setEmail(u.getEmail());
        std.setWallet(u.getWallet());
        return user.save(std);

    }

    public void deleteCustomerById(Integer id) {
        user.deleteById(id);
    }

   // ******************************************************merchant services**************************************
    public Merchant merchantByEmail(String email) {
        Merchant m=merchant.getByEmail(email);
        return m;
    }

    public Merchant registerMerchant(Merchant user)
    {
        Merchant m=merchant.save(user);
        return m;
    }
    public Merchant fetchMerchantByEmailAndPass(String tempEmailId, String tempPass) {
        return merchant.findByEmailAndPassword(tempEmailId,tempPass);
    }

    public Merchant checkDetails(String merchant, String shop) {
//        Merchant u=this.merchant.findByMerchant_name(merchant);
//        Merchant u2=this.merchant.findByShop_name(shop);
        Merchant f=this.merchant.findByMerchantAndShop(merchant,shop);
        System.out.println(f.getShop());
        return f;
    }

    public Merchant fetchMerchantByShop(String shop) {
        Merchant m=merchant.findByShop(shop);
        return  m;
    }

    public Merchant updateMerchant(Merchant u) {
        String email = u.getEmail();
        Merchant std = merchant.findByEmail(email);
        std.setMerchant(u.getMerchant());
        std.setEmail(u.getEmail());
        std.setWallet(u.getWallet());
        return merchant.save(std);

    }

    public Merchant fetchMerchantByEmailId(String email) {
        return merchant.findByEmail(email);
    }

    public List<Merchant> getAllMerchant() {
        List<Merchant> m=new ArrayList<>();
        m=merchant.findAll();
        return m;
    }

    public void deleteMerchantById(Integer id) {
        merchant.deleteById(id);
    }
    //**********************************************************product services**************************************

    public void addPro(Product pro) {
        this.product.save(pro);
    }

    public List<Product> getProductsByCategory(String category)
    {
        List<Product> li=new ArrayList<>();
        li=this.product.getByCategory(category);
        return li;
    }

	public List<Product> getAllProducts() {
		
		List<Product> li=new ArrayList<>();
		li=this.product.findAll();
		return li;
	}

    public Product fetchProductById(int id) {
//          Product p= product.getById(id);
        Product pro=product.findById(id);

        return pro;
    }


    public List<Product> getAllProductsOfShop(String merchant, String shop) {
//        List<Product> li=this.product.findAllByShop(shop);
//        List<Product> ans=this.product.findAllByMerchant(merchant);
        List<Product> li=this.product.findALlByShopAndMerchant(shop,merchant);
    return li;
    }

    public List<Product> getAllShops()
    {
        List<Product> li=this.product.findAll();
        return  li;
    }


    public Product updateProQuantity(Product item,Integer id)
    {
        Product curr=product.findById(id).get();
        int qty=curr.getQty();
        curr.setQty(qty-1);
        System.out.println("quantity decreases successfully");
//        curr.setCategory(item.getCategory());
//        curr.setName(item.getName());
//        curr.setPrice(item.getPrice());
//        curr.setPid(item.getPid());
        return product.save(item);
    }


    public void deleteProductById(Integer id) {
        product.deleteById(id);
    }



}
