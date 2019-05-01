package com.revature.service;

import java.util.List;

import com.revature.model.Passenger;

public interface PassengerService {
	public boolean registerPassenger(Passenger passenger);
	public List<Passenger> getAllPassengers();
	Passenger getPassenger(String name);
}
