package com.mod3w2hw2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.client.RestTemplate;

import com.mod3w2hw2.model.Movie;

@SpringBootApplication
public class Mod3w2hw2MovieApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(Mod3w2hw2MovieApiApplication.class, args);
	
        String url = "https://my.api.mockaroo.com/movie.json?key=bb299fd0";

        RestTemplate restTemplate = new RestTemplate();

       Movie [] response  = null;

      response = restTemplate.getForObject(url, Movie[].class);
      
      System.out.println(response[0]);
		
	}

}
