package io.github.raboro.flowermeadowgenerator.rest.resource;

import io.github.raboro.flowermeadowgenerator.businesslogic.FlowerBusinessLogic;
import io.github.raboro.flowermeadowgenerator.rest.dto.FlowerDTO;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @author Raboro
 */
@Path("/flower")
public class FlowerResource {

    @Autowired
    private FlowerBusinessLogic logic;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<FlowerDTO> getAll() {
        return logic.getAll();
    }
}
