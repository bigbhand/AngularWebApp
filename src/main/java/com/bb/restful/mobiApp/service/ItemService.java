package com.bb.restful.mobiApp.service;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bb.restful.mobiApp.database.DBConnectionFactory;
import com.bb.restful.mobiApp.model.Item;

public class ItemService {

	private static Logger LOG = LoggerFactory.getLogger(ItemService.class);
	
	public List<Item> getAllItems()
	{
		LOG.debug("--START of getAllItems()--");
		List<Item> items = null;
		
		try
		{
			Statement statement = DBConnectionFactory.getJDBCConnection().createStatement();
			ResultSet rs = statement.executeQuery("SELECT * FROM PRODUCT");
			
			items = new ArrayList<>();
			while(rs.next())
			{
				Item item = new Item();
				item.setId(rs.getInt("ID"));
				item.setName(rs.getString("NAME"));
				item.setCategory(rs.getString("CATEGORY"));
				item.setSnippet(rs.getString("SNIPPET"));
				item.setDescr(rs.getString("DESCR"));
				item.setPrice(rs.getDouble("PRICE"));
				item.setRating(rs.getInt("RATING"));
				item.setSeller(rs.getString("SELLER"));
				item.setDiscount(rs.getInt("DISCOUNT"));
				item.setStocks(rs.getInt("STOCKS"));
				item.setColor(rs.getString("COLOR"));
				
				items.add(item);
			}
		
		
		}catch(Exception ex){
			
			LOG.debug("ERROR : getAllItems "+ex.getMessage());
		}finally{
			
			DBConnectionFactory.closeJDBCConnection();
		}
		
		LOG.debug("--END of getAllItems()--");
		return items;
	}

	public Item getItem(String id) 
	{
		LOG.debug("--START of getItem()--");
		Item item = null;
		
		try{
			
			String query = "SELECT * FROM PRODUCT WHERE ID = ?";
			PreparedStatement statement = DBConnectionFactory.getJDBCConnection().prepareStatement(query);
			statement.setString(1, id);
			LOG.debug(query);
			ResultSet rs = statement.executeQuery();
			if(rs.next()){
				item = new Item();
				item.setId(rs.getInt("ID"));
				item.setName(rs.getString("NAME"));
				item.setCategory(rs.getString("CATEGORY"));
				item.setSnippet(rs.getString("SNIPPET"));
				item.setDescr(rs.getString("DESCR"));
				item.setPrice(rs.getDouble("PRICE"));
				item.setRating(rs.getInt("RATING"));
				item.setSeller(rs.getString("SELLER"));
				item.setDiscount(rs.getInt("DISCOUNT"));
				item.setStocks(rs.getInt("STOCKS"));
				item.setColor(rs.getString("COLOR"));
			}
			
		}catch(Exception ex){
			LOG.debug("ERROR : getItem "+ex.getMessage());
		}finally{
			DBConnectionFactory.closeJDBCConnection();
		}
	
		LOG.debug("--END of getItem()--");
		return item;
	}
	
	public Item addItem(Item item){
		
		LOG.debug("--START of addItem()--");
		int newID = getNewItemID();
		
		try{
		
			PreparedStatement statement = DBConnectionFactory.getJDBCConnection().prepareStatement("INSERT INTO PRODUCT(ID,NAME,CATEGORY,SNIPPET,DESCR,PRICE,RATING,SELLER,DISCOUNT,STOCKS,COLOR) "
					+ "VALUES(?,?,?,?,?,?,?,?,?,?,?)");
			statement.setInt(1, newID);
			statement.setString(2, item.getName());
			statement.setString(3, item.getCategory());
			statement.setString(4, item.getSnippet());
			statement.setString(5, item.getDescr());
			statement.setDouble(6, item.getPrice());
			statement.setInt(7, item.getRating());
			statement.setString(8, item.getSeller());
			statement.setInt(9, item.getDiscount());
			statement.setInt(10, item.getStocks());
			statement.setString(11, item.getColor());
			
			statement.executeUpdate();
			
		}catch(Exception ex){
			LOG.debug("ERROR : addItem "+ex.getMessage());
		}finally{
			DBConnectionFactory.closeJDBCConnection();
		}
		
		LOG.debug("--END of addItem()--");
		return getItem(newID+"");
	}
	
	public Item updateItem(Item item)
	{
		LOG.debug("--START of updateItem()--");
		try
		{
			PreparedStatement statement = DBConnectionFactory.getJDBCConnection().prepareStatement("UPDATE PRODUCT SET "
					+ "NAME = ?,CATEGORY = ?,SNIPPET = ?,DESCR = ?,PRICE = ?,RATING = ?,SELLER = ?,DISCOUNT = ?,STOCKS = ?,COLOR = ? "
					+ "WHERE ID = ?");
			statement.setString(1, item.getName());
			statement.setString(2, item.getCategory());
			statement.setString(3, item.getSnippet());
			statement.setString(4, item.getDescr());
			statement.setDouble(5, item.getPrice());
			statement.setInt(6, item.getRating());
			statement.setString(7, item.getSeller());
			statement.setInt(8, item.getDiscount());
			statement.setInt(9, item.getStocks());
			statement.setString(10, item.getColor());
			statement.setInt(11, item.getId());
			
			int result = statement.executeUpdate();
			
			if(result<0){
				return null;
			}
		}catch(Exception ex){
			LOG.error("ERROR : updateItem : "+ex.getMessage());
			return null;
		}finally{
			DBConnectionFactory.closeJDBCConnection();
		}
		
		LOG.debug("--END of updateItem()--");
		return getItem(item.getId()+"");
	}
	
	public int deleteItem(int id)
	{
		LOG.debug("--START of deleteItem()--");
		int result=0;
		try
		{
			PreparedStatement statement = DBConnectionFactory.getJDBCConnection().prepareStatement("DELETE FROM PRODUCT WHERE ID = ?");
			statement.setInt(1, id);
			
			result = statement.executeUpdate();
			
		}catch(Exception ex){
			LOG.error("ERROR : deleteItem + "+ex.getMessage());
		}finally{
			DBConnectionFactory.closeJDBCConnection();
		}
		
		LOG.debug("--END of deleteItem()--");
		return result;
		
	}
	
	private int getNewItemID()
	{
		int id=0;
		
		try
		{
			Statement statement = DBConnectionFactory.getJDBCConnection().createStatement();
			ResultSet rs = statement.executeQuery("SELECT item_id_seq.NEXTVAL FROM DUAL");
			
			while(rs.next())
			{
				id = rs.getInt(1);
			}
			LOG.debug("New ID : "+id);
		}catch(Exception ex){
			LOG.error(ex.getMessage());
		}finally{
			DBConnectionFactory.closeJDBCConnection();
		}
		
		return id;
	}

}
