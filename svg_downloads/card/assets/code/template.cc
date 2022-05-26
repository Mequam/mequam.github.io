#include "badTemplate.h"
#include "template.h"

int main(int argc, char ** argv) {
	
	//using the bad template file
	IntPoint int_oneone = IntPoint(1,1);
	IntPoint int_twotwo = IntPoint(2,2);
	
	int_oneone.add(&int_twotwo);
	
	int_oneone.show();
	std::cout << std::endl;
	
	FloatPoint float_halfhalf = FloatPoint(0.5,0.5);
	FloatPoint float_thirdthird = FloatPoint(0.3,0.3);
	
	float_thirdthird.add(&float_halfhalf);
	
	float_thirdthird.show();
	std::cout << std::endl;


	//using good template file
	/*
	Point<int> pi1 = Point<int>(1,1);
	Point<int> pi2 = Point<int>(2,2);
	
	pi1.add(&pi2);
	
	pi1.show();
	std::cout << std::endl;

	Point<float> pf1 = Point<float>(0.5,0.5);
	Point<float> pf2 = Point<float>(0.3,0.3);
	
	pf1.add(&pf2);
	
	pf1.show();
	std::cout << std::endl;
	*/

	return 1;
}
