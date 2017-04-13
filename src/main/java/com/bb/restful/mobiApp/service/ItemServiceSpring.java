package com.bb.restful.mobiApp.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.bb.restful.mobiApp.model.Item;

@Component
public class ItemServiceSpring {

	private static Logger LOG = LoggerFactory.getLogger(ItemService.class);
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public List<Item> getAllItems()
	{
		String sql = "SELECT * FROM PRODUCT";
		return jdbcTemplate.query(sql, new ItemMapper());
	}

	public Item getItem(String id) 
	{
		String sql = "SELECT * FROM PRODUCT WHERE ID = ?";
		return jdbcTemplate.queryForObject(sql, new Object[]{id}, new ItemMapper());
	}
	
	public Item addItem(Item item){
		
		String sql = "INSERT INTO PRODUCT(ID,NAME,CATEGORY,SNIPPET,DESCR,PRICE,RATING,SELLER,DISCOUNT,STOCKS,COLOR) "
					+ "VALUES(?,?,?,?,?,?,?,?,?,?,?)";
		jdbcTemplate.update(sql, new Object[]{item.getId(), item.getName(), item.getCategory(), item.getSnippet(),
				item.getDescr(), item.getPrice(), item.getRating(), item.getSeller(), item.getDiscount(), 
				item.getStocks(), item.getColor()});
		
		return getItem(item.getId()+"");
	}
	
	public Item updateItem(Item item)
	{
		String sql = "UPDATE PRODUCT SET "
					+ "NAME = ?,CATEGORY = ?,SNIPPET = ?,DESCR = ?,PRICE = ?,RATING = ?,SELLER = ?,DISCOUNT = ?,STOCKS = ?,COLOR = ? "
					+ "WHERE ID = ?";
		jdbcTemplate.update(sql, new Object[]{item.getName(), item.getCategory(), item.getSnippet(),
				item.getDescr(), item.getPrice(), item.getRating(), item.getSeller(), item.getDiscount(), 
				item.getStocks(), item.getColor(), item.getId()});
		
		return getItem(item.getId()+"");
	}
	
	public int deleteItem(int id)
	{
		String sql = "DELETE FROM PRODUCT WHERE ID = ?";
		
		return jdbcTemplate.update(sql, id);
	}
	
	public int getNewItemID()
	{
		String sql = "SELECT item_id_seq.NEXTVAL FROM DUAL";
		return jdbcTemplate.queryForObject(sql, int.class);
	}
	
	private class ItemMapper implements RowMapper<Item>{

		@Override
		public Item mapRow(ResultSet rs, int rowNum) throws SQLException {
			
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
			return item;
		}
		
	}

}
