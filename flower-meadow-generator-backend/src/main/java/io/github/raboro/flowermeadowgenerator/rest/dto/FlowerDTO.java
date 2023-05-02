package io.github.raboro.flowermeadowgenerator.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Raboro
 */
@Data
@NoArgsConstructor
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
}
