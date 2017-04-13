package com.bb.restful.mobiApp.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.bb.restful.mobiApp.model.Item;
import com.bb.restful.mobiApp.service.ItemService;
import com.bb.restful.mobiApp.service.ItemServiceSpring;

@Path("/items")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ItemResource {
	
	@Autowired
	ItemServiceSpring service;
	
	ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");

	@GET
	public List<Item> getAllItems()
	{
		/** JDBC Call **/
		/*return new ItemService().getAllItems();*/
		
		/** Spring JDBC Call **/
		ItemServiceSpring service = context.getBean("itemServiceSpring", ItemServiceSpring.class);
		return service.getAllItems();
	}
	
	@GET
	@Path("/{id}")
	public Item getItem(@PathParam("id") String id)
	{
		return new ItemService().getItem(id);
	}
	
	@GET
	@Path("/newID")
	@Produces(MediaType.TEXT_PLAIN)
	public int getNewItemID()
	{
		return new ItemService().getNewItemID();
	}
	
	@POST
	public Item addItem(Item item)
	{
		return new ItemService().addItem(item);
	}
	
	@PUT
	@Path("/{id}")
	public Item updateItem(@PathParam("id") int id, Item item)
	{
		return new ItemService().updateItem(item);
	}
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.TEXT_PLAIN)
	public int deleteItem(@PathParam("id") int id)
	{
		return new ItemService().deleteItem(id);
	}
}
