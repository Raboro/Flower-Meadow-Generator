package io.github.raboro.flowermeadowgenerator.businesslogic;

import io.github.raboro.flowermeadowgenerator.database.repository.FlowerRepository;
import io.github.raboro.flowermeadowgenerator.rest.dto.FlowerDTO;
import io.github.raboro.flowermeadowgenerator.rest.mapper.FlowerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlowerBusinessLogic {

    @Autowired
    private FlowerRepository repository;
    private final FlowerMapper mapper = new FlowerMapper();

    public List<FlowerDTO> getAll() {
        return repository.findAll().stream()
                .map(mapper::toDTO)
                .toList();
    }
}