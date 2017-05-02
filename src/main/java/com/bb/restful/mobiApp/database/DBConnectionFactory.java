package com.bb.restful.mobiApp.database;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DBConnectionFactory {

	private static Logger LOG = LoggerFactory.getLogger(DBConnectionFactory.class);
	private static String CONFIG_FILE = "config.properties"; 
	private static String DB_URL = "db.url";
	private static String DB_USERNAME = "db.username";
	private static String DB_PASSWORD = "db.password";
	private static String DB_DRIVER = "db.driver";
	
	private static Connection jdbcConnection = null;
	
	
	static{
		
	}
	
	public static void main(String[] args)
	{
		
	}
	
	public static Connection getJDBCConnection()
	{
		Properties properties = new Properties();
		
		try
		{
			
			InputStream configStream = DBConnectionFactory.class.getClassLoader().getResourceAsStream(CONFIG_FILE);
			properties.load(configStream);
		
			LOG.info("Establishing the connection..");
			Class.forName (properties.getProperty(DB_DRIVER));
			jdbcConnection = DriverManager.getConnection(properties.getProperty(DB_URL), properties.getProperty(DB_USERNAME), properties.getProperty(DB_PASSWORD));
		
		}catch(Exception ex){
			LOG.error("ERROR : while creating JDBC connection..");
			LOG.error(ex.getMessage());
		}
		
		return jdbcConnection;
	}

	public static void closeJDBCConnection() 
	{
		if(jdbcConnection!=null)
		{
			try 
			{
				LOG.info("Closing the connection..");
				jdbcConnection.close();
			
			} catch (SQLException e) {
				
				LOG.error("ERROR : while closing JDBC connection..");
				LOG.error(e.getMessage());
			}
		}
	}
}
