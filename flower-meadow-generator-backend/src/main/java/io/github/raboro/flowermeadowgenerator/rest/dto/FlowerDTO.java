package io.github.raboro.flowermeadowgenerator.rest.dto;

/**
 * @author Raboro
 */
public class FlowerDTO {

    long id;
    private String name;
    private String category;
    private String stemColor;
    private short stemHeight;
    private short stemWidth;
    private boolean stemThrones;
    private String petalColor;
    private short petalHeight;
    private short petalWidth;
    private boolean petalThrones;

    public FlowerDTO() {

    }

    public FlowerDTO(long id, String name, String category, String stemColor, short stemHeight, short stemWidth, boolean stemThrones, String petalColor, short petalHeight, short petalWidth, boolean petalThrones) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.stemColor = stemColor;
        this.stemHeight = stemHeight;
        this.stemWidth = stemWidth;
        this.stemThrones = stemThrones;
        this.petalColor = petalColor;
        this.petalHeight = petalHeight;
        this.petalWidth = petalWidth;
        this.petalThrones = petalThrones;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStemColor() {
        return stemColor;
    }

    public void setStemColor(String stemColor) {
        this.stemColor = stemColor;
    }

    public short getStemHeight() {
        return stemHeight;
    }

    public void setStemHeight(short stemHeight) {
        this.stemHeight = stemHeight;
    }

    public short getStemWidth() {
        return stemWidth;
    }

    public void setStemWidth(short stemWidth) {
        this.stemWidth = stemWidth;
    }

    public boolean isStemThrones() {
        return stemThrones;
    }

    public void setStemThrones(boolean stemThrones) {
        this.stemThrones = stemThrones;
    }

    public String getPetalColor() {
        return petalColor;
    }

    public void setPetalColor(String petalColor) {
        this.petalColor = petalColor;
    }

    public short getPetalHeight() {
        return petalHeight;
    }

    public void setPetalHeight(short petalHeight) {
        this.petalHeight = petalHeight;
    }

    public short getPetalWidth() {
        return petalWidth;
    }

    public void setPetalWidth(short petalWidth) {
        this.petalWidth = petalWidth;
    }

    public boolean isPetalThrones() {
        return petalThrones;
    }

    public void setPetalThrones(boolean petalThrones) {
        this.petalThrones = petalThrones;
    }

    @Override
    public String toString() {
        return ("FlowerDTO{id=%d, name='%s', stemColor='%s', stemHeight=%s, stemWidth=%s, stemThrones=%s, petalColor='%s', petalHeight=%s, petalWidth=%s, " +
                "petalThrones=%s}")
                .formatted(id, name, stemColor, stemHeight, stemWidth, stemThrones, petalColor, petalHeight, petalWidth, petalThrones);
    }
}
