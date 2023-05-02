package io.github.raboro.flowermeadowgenerator.rest.dto;

import io.github.raboro.flowermeadowgenerator.database.model.Flower;

public class FlowerDTO {

    long id;
    private String name;
    private byte[] images;

    public FlowerDTO() {

    }

    public FlowerDTO(long id, String name, byte[] images) {
        this.id = id;
        this.name = name;
        this.images = images;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getImages() {
        return images;
    }

    public void setImages(byte[] images) {
        this.images = images;
    }
}
