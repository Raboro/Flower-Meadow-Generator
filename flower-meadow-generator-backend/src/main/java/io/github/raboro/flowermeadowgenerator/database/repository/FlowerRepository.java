package io.github.raboro.flowermeadowgenerator.database.repository;

import io.github.raboro.flowermeadowgenerator.database.model.Flower;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Raboro
 */
@Repository
@ComponentScan(basePackages = { "io.github.raboro.flowermeadowgenerator.businesslogic"})
public interface FlowerRepository extends JpaRepository<Flower, Long> {
}
