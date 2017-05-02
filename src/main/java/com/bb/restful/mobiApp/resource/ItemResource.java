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
		/** JDBC Call **/
		/*return new ItemService().getItem(id);*/
		
		/** Spring JDBC Call **/
		ItemServiceSpring service = context.getBean("itemServiceSpring", ItemServiceSpring.class);
		return service.getItem(id);
	}
	
	@GET
	@Path("/newID")
	@Produces(MediaType.TEXT_PLAIN)
	public int getNewItemID()
	{
		/** JDBC Call **/
		/*return new ItemService().getNewItemID();*/
		
		/** Spring JDBC Call **/
		ItemServiceSpring service = context.getBean("itemServiceSpring", ItemServiceSpring.class);
		return service.getNewItemID();
	}
	
	@POST
	public Item addItem(Item item)
	{
		/** JDBC Call **/
		/*return new ItemService().addItem(item);*/
		
		/** Spring JDBC Call **/
		ItemServiceSpring service = context.getBean("itemServiceSpring", ItemServiceSpring.class);
		return service.addItem(item);
	}
	
	@PUT
	@Path("/{id}")
	public Item updateItem(@PathParam("id") int id, Item item)
	{
		/** JDBC Call **/
		/*return new ItemService().updateItem(item);*/
		
		/** Spring JDBC Call **/
		ItemServiceSpring service = context.getBean("itemServiceSpring", ItemServiceSpring.class);
		return service.updateItem(item);
	}
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.TEXT_PLAIN)
	public int deleteItem(@PathParam("id") int id)
	{
		/** JDBC Call **/
		/*return new ItemService().deleteItem(id);*/
		
		/** Spring JDBC Call **/
		ItemServiceSpring service = context.getBean("itemServiceSpring", ItemServiceSpring.class);
		return service.deleteItem(id);
	}
}
