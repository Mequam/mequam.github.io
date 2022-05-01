#include <iostream>

class IntPoint {
public:
	IntPoint(int,int);
	int x;
	int y;
	void add(IntPoint *);
	
	void  show() {
		std::cout << '(' << this->x << ',' << this->y << ')' << std::endl;
	}
};
IntPoint::IntPoint(int x, int y) {
	this->x = x;
	this->y = y;
}
void IntPoint::add(IntPoint * to_add) {
	this->x += to_add->x;
	this->y += to_add->y;
}


class FloatPoint {
public:
	FloatPoint(float,float);
	float x;
	float y;
	void add(FloatPoint *);
	void  show() {
		std::cout << '(' << this->x << ',' << this->y << ')' << std::endl;
	}	
};
FloatPoint::FloatPoint(float x, float y) {
	this->x = x;
	this->y = y;
}
void FloatPoint::add(FloatPoint * to_add) {
	this->x += to_add->x;
	this->y += to_add->y;
}
