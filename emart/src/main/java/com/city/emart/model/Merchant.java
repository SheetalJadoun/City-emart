package com.city.emart.model;

import javax.persistence.*;

@Entity
@Table(name="merchant_details")
public class Merchant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String merchant;
    private String email;
    private String password;
    private String shop;
    private String phone;
    private String role="Merchant";
    private int wallet;

    public int getWallet() {
        return wallet;
    }

    public void setWallet(int wallet) {
        this.wallet = wallet;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public Merchant() {
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMerchant() {
        return merchant;
    }

    public void setMerchant(String merchant) {
        this.merchant = merchant;
    }

    public String getShop() {
        return shop;
    }

    public void setShop(String shop) {
        this.shop = shop;
    }


    @Override
    public String toString() {
        return "Merchant{" +
                "id=" + id +
                ", merchant='" + merchant + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", shop='" + shop + '\'' +
                ", phone='" + phone + '\'' +
                ", role='" + role + '\'' +
                ", wallet=" + wallet +
                '}';
    }

    public Merchant(int id, String merchant, String email, String password, String shop, String phone, String role, int wallet) {
        this.id = id;
        this.merchant = merchant;
        this.email = email;
        this.password = password;
        this.shop = shop;
        this.phone = phone;
        this.role = role;
        this.wallet = wallet;
    }
}

