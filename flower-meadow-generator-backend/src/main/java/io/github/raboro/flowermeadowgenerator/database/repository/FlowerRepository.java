package io.github.raboro.flowermeadowgenerator.database.repository;

import io.github.raboro.flowermeadowgenerator.database.model.Flower;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Raboro
 */
@Repository
public interface FlowerRepository extends JpaRepository<Flower, Long> {
}
