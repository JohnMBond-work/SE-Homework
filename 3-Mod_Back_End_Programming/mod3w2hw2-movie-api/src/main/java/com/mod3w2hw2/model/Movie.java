package com.mod3w2hw2.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonIgnoreProperties
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Movie {
	private int movie_id;
	private String title;
	
	
	


}
