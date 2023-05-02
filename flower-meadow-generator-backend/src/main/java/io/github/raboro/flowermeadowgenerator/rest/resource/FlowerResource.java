package io.github.raboro.flowermeadowgenerator.rest.resource;

import io.github.raboro.flowermeadowgenerator.businesslogic.FlowerBusinessLogic;
import io.github.raboro.flowermeadowgenerator.rest.dto.FlowerDTO;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

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

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public FlowerDTO addFlower(@RequestBody FlowerDTO flowerDTO) {
        return logic.addFlower(flowerDTO);
    }

    @DELETE
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteFlowerByID(@PathParam("id") long id) {
        logic.deleteFlower(id);
        return Response.ok().build();
    }
}
