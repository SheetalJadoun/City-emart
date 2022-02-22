package com.city.emart.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String merchant;
    private String shop;
    private String name;
    private String description;
    private String category;
    private int price;
    private int qty;

    public Product(int pid, String merchant, String shop, String name, String description, String category, int price, int qty) {
        this.id = pid;
        this.merchant = merchant;
        this.shop = shop;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.qty = qty;
    }

    @Override
    public String toString() {
        return "Product{" +
                "pid=" + id +
                ", merchant='" + merchant + '\'' +
                ", shop='" + shop + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", price=" + price +
                ", qty=" + qty +
                '}';
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public Product() {
    }
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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

    public int getPid() {
        return id;
    }

    public void setPid(int pid) {
        this.id = pid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }
}
