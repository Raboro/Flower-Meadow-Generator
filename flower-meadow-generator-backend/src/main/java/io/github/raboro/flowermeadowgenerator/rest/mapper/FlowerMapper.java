package io.github.raboro.flowermeadowgenerator.rest.mapper;

import io.github.raboro.flowermeadowgenerator.database.model.Flower;
import io.github.raboro.flowermeadowgenerator.rest.dto.FlowerDTO;
import org.springframework.stereotype.Component;

@Component
public class FlowerMapper {

    public Flower toModel(FlowerDTO dto) {
        return new Flower(dto.getName(), dto.getImages());
    }

    public FlowerDTO toDTO(Flower model) {
        return new FlowerDTO(model.getId(), model.getName(), model.getImage());
    }
}
