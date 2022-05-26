template <typename T>
class Point {
public:
	Point(T,T);
	T x;
	T y;
	void add(Point<T> *);	
	void show() {
		std::cout << '(' << this->x << ',' << this->y << ')' << std::endl;
	}	
};
template <typename T>
Point<T>::Point(T x, T y) {
	this->x = x;
	this->y = y;
}
template <typename T>
void Point<T>::add(Point<T> * to_add) {
	this->x += to_add->x;
	this->y += to_add->y;
}
