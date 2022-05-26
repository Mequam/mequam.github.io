/*
	C++ multithreading hello world example
*/

//i/o
#include <iostream>

//thread stuff
#include <thread>

//cross platform sleep function
#ifdef _WIN32
#include <Windows.h>
#else
#include <unistd.h>
#endif

//our callable object
void printer(std::string thread_name,int run_count) {
	for (int i = 0; i < run_count; i++) {	
		std::cout << "hello from thread " << thread_name << std::endl;
		sleep(1);
	}
}

int main(int argc, char ** argv) {
	
	std::thread t1(printer,"thread 1",5);
	std::thread t2(printer,"thread 2",5);
		
	t1.join();
	std::cout << "thread 1 finished" << std::endl;
	
	t2.join();
	std::cout << "thread 2 finished" << std::endl;

	return 1;
}
