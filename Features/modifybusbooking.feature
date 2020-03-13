@modifybooking 
@e2e
Feature: Modify Bus booking 
Scenario Outline: To check user able to modify the booking 
	Given launch the browser "https://redbus.in" 
	Then enter the destination From "<StartingPlace>" 
	And enter the destination TO "<Destination>" 
	Then select the onward date 
	And click on search button to list the buses 
	
	Then click on modify button 
	And go to from text box and modify "<FromPlace>" 
	And go to to text box and modify "<ToPlace>" 
	
	Examples: 
	
	
	| StartingPlace |Destination |  FromPlace | ToPlace |
	| Chen 			| Erod	     | Kanchi	  |Pondy	  |
		
		
		
		
	